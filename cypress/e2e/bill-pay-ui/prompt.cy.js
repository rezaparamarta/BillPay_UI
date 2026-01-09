describe('Prompt input', () => {
  it('should show value from prompt', () => {
    cy.visit('index.html#/practice');

    cy.window().then(win => {
      cy.stub(win, 'prompt').returns('Gajah');
    });

    cy.get('[data-testid="show-prompt"]').click();
    cy.contains('Gajah').should('exist');
  });
});
