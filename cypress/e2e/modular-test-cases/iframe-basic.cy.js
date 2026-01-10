describe('Iframe input', () => {
  it('should fill card iframe inputs', () => {
    cy.visit('index.html#/practice');

    cy.getIframeInput('#cardIframe', 'iframe-card')
      .clear()
      .type('3333 3333 3333 3333');

    cy.getIframeInput('#cardIframe', 'iframe-name')
      .clear()
      .type('Gajah Demo');
  });
});
