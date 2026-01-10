describe('Hidden Elements', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should hide element after toggle button clicked', () => {
    cy.get('#toggleHidden')
      .should('be.visible')
      .click();

    cy.get('[data-testid="hidden-display"]')
      .should('contain.text', 'Hidden by display:none');
  });
});
