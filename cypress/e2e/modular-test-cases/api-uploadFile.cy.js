describe('File Upload - UI & API Integration', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should upload single file with description successfully', () => {
    cy.intercept('POST', '/v1/files/upload').as('uploadFile');

    cy.get('[data-testid="single-file-input"]')
      .selectFile('cypress/fixtures/files/Papitestreza1.jpg', { force: true });

    cy.get('[data-testid="file-description"]')
      .type('QA Cypress Upload Test');

    cy.get('[data-testid="upload-single-btn"]')
      .click();

    cy.wait('@uploadFile').then(({ response }) => {
      expect(response.statusCode).to.eq(201);
      expect(response.body.success).to.be.true;

      const file = response.body.data.file;

      expect(file.originalName).to.eq('Papitestreza1.jpg');
      expect(file.metadata.description).to.eq('QA Cypress Upload Test');
      expect(file.filename).to.include('Papitestreza1.jpg');
    });

    cy.get('#uploadResult')
      .should('not.contain.text', 'Please select a file first');
  });
});
