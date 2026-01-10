// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop';
import 'cypress-iframe';
import './commands/xml.commands';

Cypress.Commands.add('fillInput', (selector, value) => {
  cy.get(selector).clear().type(value);
});

Cypress.Commands.add('setSlider', (selector, value) => {
  cy.get(selector)
    .invoke('val', value)
    .trigger('input')
    .trigger('change');
});

Cypress.Commands.add('setDate', (selector, value) => {
  cy.get(selector)
    .invoke('val', value)
    .trigger('input')
    .trigger('change');
});

Cypress.Commands.add('uploadFile', (selector, filePath) => {
  cy.get(selector).selectFile(filePath);
});

Cypress.Commands.add('uploadMultipleFiles', (selector, files) => {
  cy.get(selector).selectFile(files);
});

// iframe
Cypress.Commands.add('getIframeInput', (iframe, testId) => {
  cy.frameLoaded(iframe);
  return cy.iframe(iframe).find(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('getNestedIframeInput', (iframe, testId) => {
  cy.frameLoaded(iframe);
  return cy
    .iframe(iframe)
    .find('iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find(`[data-testid="${testId}"]`);
});

// infinite scroll
Cypress.Commands.add('scrollDownTimes', (selector, times) => {
  Cypress._.times(times, () => {
    cy.get(selector).scrollTo('bottom');
  });
});

// keyboard
Cypress.Commands.add('pressCtrlKey', (key) => {
  cy.get('body').trigger('keydown', {
    key,
    code: `Key${key.toUpperCase()}`,
    ctrlKey: true,
  });
});

// context menu
Cypress.Commands.add('openContextMenu', () => {
  cy.get('#contextTarget').rightclick();
  cy.get('#contextMenu').should('be.visible');
});

// Getbutton delayed
Cypress.Commands.add('getByTestId', (id) => {
  cy.get(`[data-testid="${id}"]`);
});




