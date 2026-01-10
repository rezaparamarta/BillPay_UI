describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should drag item to drop target', () => {
    cy.get('[data-item="1"]')
      .drag('[data-testid="drop-target"]');

    cy.get('[data-testid="drop-target"]')
      .should('contain', '1');
  });
});
