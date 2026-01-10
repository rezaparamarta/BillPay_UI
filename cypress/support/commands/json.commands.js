import {
  getJsonValue,
  assertJsonFields,
  validateJsonContract,
} from '../utils/json.utils';

Cypress.Commands.add('selectJsonRequest', (endpoint) => {
  cy.contains('📄 XML Response Format')
    .closest('.card')
    .within(() => {
      cy.get('[data-testid="xml-endpoint"]').select(endpoint);
      cy.get('[data-testid="xml-format"]').select('json');
      cy.get('[data-testid="test-xml-btn"]').click();
    });
});

Cypress.Commands.add('interceptJsonRequest', (endpoint, alias) => {
  cy.intercept('GET', endpoint, (req) => {
    expect(req.headers.accept).to.include('application/json');
  }).as(alias);
});

Cypress.Commands.add('assertJsonApiResponse', (alias, expectations = {}) => {
  cy.wait(alias).then(({ response }) => {
    expect(response.statusCode).to.eq(200);
    expect(response.headers['content-type'])
      .to.include('application/json');

    validateJsonContract(response.body);
    assertJsonFields(response.body, expectations);
  });
});

Cypress.Commands.add('assertJsonRenderedOnUI', () => {
  cy.get('#xmlResult')
    .should('be.visible')
    .should('not.contain.text', 'Loading')
    .invoke('text')
    .then((text) => {
      const trimmed = text.trim();

      // safety check
      expect(trimmed.startsWith('{')).to.eq(true);

      const parsed = JSON.parse(trimmed);
      validateJsonContract(parsed);
    });
});
