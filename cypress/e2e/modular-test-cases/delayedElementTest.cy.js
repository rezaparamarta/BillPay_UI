describe('Delayed Element', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should show element after 3 seconds', () => {
    cy.getByTestId('load-delayed').click()
      .should('be.visible')
      .click();

    cy.get('[data-testid="delayed-element"]', { timeout: 5000 })
      .should('be.visible')
      .and('contain.text', 'Element loaded after 3 seconds!');
  });
});
