describe('Dynamic ID regeneration', () => {
  it('should regenerate input value', () => {
    cy.visit('index.html#/practice');

    cy.get('[data-testid="dynamic-id-input"]')
      .invoke('val', 'Ablahula')
      .as('initialId');

    cy.get('[data-testid="regenerate-id"]').click();

    cy.get('@initialId').then(initialId => {
      cy.get('[data-testid="dynamic-id-input"]')
        .invoke('val', 'Abdullah')
        .trigger('input')
        .trigger('change')
        .should('not.equal', initialId);
    });
  });
});
