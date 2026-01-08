describe('File Upload', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should upload single file', () => {
    cy.uploadFile(
      '[data-testid="single-file"]',
      'cypress/fixtures/files/Reza Paramarta_Resume.pdf'
    );

    cy.get('[data-testid="single-file"]').should(input => {
      expect(input[0].files[0].name)
        .to.eq('Reza Paramarta_Resume.pdf');
    });
  });

  it('should upload multiple files', () => {
    cy.uploadMultipleFiles('[data-testid="multi-file"]', [
      'cypress/fixtures/files/Reza Paramarta_Resume.pdf',
      'cypress/fixtures/files/REZA_PARAMARTA_TAKE_HOME_TEST_QA.pdf'
    ]);

    cy.get('[data-testid="multi-file"]').should(input => {
      expect(input[0].files).to.have.length(2);
      expect(input[0].files[0].name)
        .to.eq('Reza Paramarta_Resume.pdf');
      expect(input[0].files[1].name)
        .to.eq('REZA_PARAMARTA_TAKE_HOME_TEST_QA.pdf');
    });
  });
});
