describe('Multiple File Upload - UI & API Integration', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should upload multiple files successfully', () => {
    cy.intercept('POST', '/v1/files/upload-multiple').as('uploadMultiple');

    cy.get('[data-testid="multi-file-input"]').selectFile([
    'cypress/fixtures/files/Papitestreza1.jpg',
    'cypress/fixtures/files/Papitestreza2.jpg',
    ], { force: true });

    cy.get('[data-testid="upload-multi-btn"]').click();

    cy.wait('@uploadMultiple').then(({ response }) => {
    expect(response.statusCode).to.eq(201);
    expect(response.body.success).to.be.true;

    const { uploaded, summary, failed } = response.body.data;

    expect(summary.successful).to.eq(2);
    expect(failed).to.be.empty;

    const names = uploaded.map(u => u.file.originalName);
    expect(names).to.have.members([
        'Papitestreza1.jpg',
        'Papitestreza2.jpg',
    ]);
      // optional: basic schema check
      uploaded.forEach(item => {
        expect(item).to.have.keys(['file', 'url']);
        expect(item.file).to.have.keys([
          'id',
          'filename',
          'originalName',
          'mimeType',
          'size',
          'uploadedAt',
          'userId',
        ]);
      });
    });

    // UI assertion
    cy.get('#uploadResult')
      .should('not.contain.text', 'error')
      .and('contain.text', 'success');
  });
});
