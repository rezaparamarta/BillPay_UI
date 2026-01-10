describe('Double Click Interaction', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should increase counter on double click', () => {
    cy.get('[data-testid="double-click-btn"]')
      .should('be.visible')
      .dblclick();

    cy.get('[data-testid="double-click-btn"]')
      .should('contain.text', 'Count: 1');
  });
});
