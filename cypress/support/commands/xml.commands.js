import { parseXml, getXmlText } from '../utils/xml.utils';

Cypress.Commands.add('selectXmlRequest', (endpoint) => {
  cy.get('[data-testid="xml-endpoint"]')
    .should('be.visible')
    .select(endpoint);

  cy.get('[data-testid="xml-format"]')
    .should('be.visible')
    .select('xml');

  cy.get('[data-testid="test-xml-btn"]')
    .should('be.enabled')
    .click();
});

Cypress.Commands.add('interceptXmlRequest', (endpoint, alias) => {
  cy.intercept('GET', endpoint, (req) => {
    expect(req.headers.accept).to.include('application/xml');
  }).as(alias);
});

Cypress.Commands.add('assertXmlApiResponse', (alias, expectations) => {
  cy.wait(alias).then(({ response }) => {
    expect(response.statusCode).to.eq(200);
    expect(response.headers['content-type'])
      .to.include('application/xml');

    const xmlDoc = parseXml(response.body);

    // generic success check
    expect(getXmlText(xmlDoc, 'success')).to.eq('true');

    // custom assertions
    Object.entries(expectations).forEach(([selector, expected]) => {
      expect(getXmlText(xmlDoc, selector)).to.eq(expected);
    });
  });
});

Cypress.Commands.add('assertXmlRenderedOnUI', () => {
  cy.get('#xmlResult')
    .should('be.visible')
    .within(() => {
      cy.contains('<?xml');
      cy.contains('<success>true</success>');
    });
});
