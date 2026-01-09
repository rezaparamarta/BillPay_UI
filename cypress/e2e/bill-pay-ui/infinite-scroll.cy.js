describe('Infinite scroll', () => {
  it('should load more items', () => {
    cy.visit('index.html#/practice');

    cy.scrollDownTimes('#infiniteList', 30);

    cy.get('#scrollCount')
      .should('contain.text', '30');
  });
});
