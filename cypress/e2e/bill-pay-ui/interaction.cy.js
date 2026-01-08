describe('UI Interactions', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should handle autocomplete and hover', () => {
    cy.setDate('[data-testid="autocomplete"]', 'cypress');
    cy.get('[data-testid="autocomplete"]').should('have.value', 'cypress');

    cy.get('#startProgress').click();

    cy.get('[data-testid="hover-box-1"]').trigger('mouseover').click();
    cy.get('#hoverOutput').should('contain', 'Box 1');
  });
});
