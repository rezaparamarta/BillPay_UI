describe('Keyboard shortcuts', () => {
  it('should toggle tooltip with Ctrl+K', () => {
    cy.visit('index.html#/practice');

    cy.pressCtrlKey('k');
    cy.get('#kbdTooltip').should('be.visible');

    cy.pressCtrlKey('k');
    cy.get('#kbdTooltip').should('not.be.visible');
  });

  it('should trigger save with Ctrl+S', () => {
    cy.visit('index.html#/practice');

    cy.pressCtrlKey('s');
    cy.get('#kbdOutput').should('contain.text', 'Ctrl+S');
  });
});
