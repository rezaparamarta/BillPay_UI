describe('Slider, Date & Time Inputs', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should set sliders and date inputs correctly', () => {
    cy.setSlider('[data-testid="volume-slider"]', 80);
    cy.get('#volume').should('have.value', 80);

    cy.setSlider('[data-testid="price-slider"]', 350);
    cy.get('#price').should('have.value', 350);

    cy.setDate('[data-testid="date-input"]', '2026-01-08');
    cy.get('[data-testid="date-input"]').should('have.value', '2026-01-08');

    cy.setDate('[data-testid="time-input"]', '18:24');
    cy.setDate('[data-testid="datetime-input"]', '2026-01-08 18:24');
  });
});
