describe('Nested iframe', () => {
  it('should fill nested iframe input', () => {
    cy.visit('index.html#/practice');

    cy.getNestedIframeInput('#nestedIframe', 'nested-input')
      .clear()
      .type('Gajah nested iframe');
  });
});
