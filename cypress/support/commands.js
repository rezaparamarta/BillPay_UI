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

// cypress/support/commands.js
// Access input fied number iframe or field name iframe
Cypress.Commands.add('getIframeInput', (iframeSelector, testId) => {
  cy.frameLoaded(iframeSelector);
  return cy.iframe(iframeSelector).find(`[data-testid="${testId}"]`);
});

// Access nested iFrame input
Cypress.Commands.add('getNestedIframeInput', (outerIframe, testId) => {
  cy.frameLoaded(outerIframe);

  return cy
    .iframe(outerIframe)
    .find('iframe')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find(`[data-testid="${testId}"]`);
});


