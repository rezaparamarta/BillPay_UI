describe('Context menu', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should edit text', () => {
    cy.openContextMenu();
    cy.get('#ctxEdit').click();

    cy.get('#contextTarget')
      .invoke('val', 'Gajah')
      .trigger('input')
      .trigger('change');
  });

  it('should copy text', () => {
    cy.window().then(win => {
      cy.stub(win.navigator.clipboard, 'writeText').as('copy');
    });

    cy.openContextMenu();
    cy.get('#ctxCopy').click();

    cy.get('@copy').should('have.been.called');
  });

  it('should delete text', () => {
    cy.openContextMenu();
    cy.get('#ctxDelete').click();

    cy.get('#contextTarget').should('have.text', '');
  });
});
