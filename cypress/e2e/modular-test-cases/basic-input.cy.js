describe('Basic Input Elements', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should fill basic form inputs correctly', () => {
    cy.fillInput('[data-testid="first-name"]', 'Gajah');
    cy.fillInput('[data-testid="email"]', 'gajahpred@gmail.com');
    cy.fillInput('[data-testid="password"]', 'planetk3pl3r22b');
    cy.fillInput('[data-testid="bio"]', 'I am a QA engineer and I love to test');

    cy.get('#passwordStrength').should('contain', 'Strong');

    cy.get('[data-testid="country"]').select('India')
      .should('have.value', 'in');

    cy.get('[data-testid="frameworks"]').select('Cypress');
    cy.contains('Cypress').should('be.visible');

    cy.get('[data-testid="gender-male"]').check({ force: true });

    cy.get('[data-testid="terms"]').check().should('be.checked');
    cy.get('[data-testid="notifications"]').check().should('be.checked');

    cy.get('[data-testid="btn-primary"]').click();
    cy.get('#btnOutput').should('contain', 'btnPrimary');
  });
});
