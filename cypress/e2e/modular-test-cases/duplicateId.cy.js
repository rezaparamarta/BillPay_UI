describe('Duplicate ID Handling', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should allow interacting with duplicated inputs using data-testid', () => {
    cy.contains('Duplicate IDs (Anti-Pattern)')
      .parent()
      .within(() => {
        cy.get('[data-testid="duplicate-1"]')
          .type('AAA')
          .should('have.value', 'AAA');

        cy.get('[data-testid="duplicate-2"]')
          .type('BBB')
          .should('have.value', 'BBB');
      });
  });
});
