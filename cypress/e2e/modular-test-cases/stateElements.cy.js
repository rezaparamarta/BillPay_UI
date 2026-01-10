describe('Stale Element Handling', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should preserve input value after DOM recreation', () => {
    cy.get('[data-testid="stale-input"]')
      .should('be.visible')
      .type('Gajah');

    cy.get('[data-testid="cause-stale"]')
      .should('be.visible')
      .click();

    cy.contains(
      'DOM was detached and recreated. Value preserved: "Gajah"'
    ).should('be.visible');
  });
});
