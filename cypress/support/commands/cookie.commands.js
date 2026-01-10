// =======================
// ACTION COMMANDS
// =======================

Cypress.Commands.add('setSessionCookie', (value) => {
  cy.setCookie('X-Session-Id', value);
});

Cypress.Commands.add('clearSessionCookie', () => {
  cy.clearCookie('X-Session-Id');
});

Cypress.Commands.add('triggerCookieAuth', () => {
  cy.get('[data-testid="test-cookie-btn"]').click();
});

Cypress.Commands.add('triggerNoCookieAuth', () => {
  cy.get('[data-testid="test-no-cookie-btn"]').click();
});

// =======================
// API INTERCEPT
// =======================

Cypress.Commands.add('interceptAuthMe', (alias) => {
  cy.intercept('GET', '/v1/auth/me').as(alias);
});

Cypress.Commands.add('interceptHealth', (alias) => {
  cy.intercept('GET', '/v1/health').as(alias);
});

// =======================
// UI ASSERTIONS
// =======================

Cypress.Commands.add('assertCookieResultJson', (assertFn) => {
  cy.get('#cookieResult')
    .should('be.visible')
    .invoke('text')
    .then(text => {
      const json = JSON.parse(text);
      assertFn(json);
    });
});

Cypress.Commands.add('assertCookieResult', (assertFn) => {
  cy.get('#cookieResult')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      const trimmed = text.trim();

      if (!trimmed.startsWith('{')) {
        assertFn({
          isJson: false,
          rawText: trimmed,
        });
        return;
      }

      const json = JSON.parse(trimmed);

      assertFn({
        ...json,
        isJson: true,
      });
    });
});

