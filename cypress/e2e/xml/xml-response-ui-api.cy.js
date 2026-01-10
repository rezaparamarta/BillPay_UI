describe('XML Response – UI & API Integration', () => {
  beforeEach(() => {
    cy.visit('index.html#/practice');
  });

  it('should request XML response and validate structure correctly', () => {
    // intercept API
    cy.interceptXmlRequest('/v1/files', 'getFilesXml');

    // UI flow
    cy.selectXmlRequest('/v1/files');

    // API assertions (XML)
    cy.assertXmlApiResponse('@getFilesXml', {
      'meta version': 'v1',
      'pagination total': '0',
      'pagination page': '1',
    });

    // UI assertions
    cy.assertXmlRenderedOnUI();
  });
  
  it('should validate JSON response for /v1/files endpoint', () => {
    cy.interceptJsonRequest('/v1/files', 'getFilesJson');

    cy.selectJsonRequest('/v1/files');

    cy.assertJsonApiResponse('@getFilesJson', {
      'success': true,
      'meta.version': 'v1',
      'meta.pagination.page': 1,
    });

    cy.assertJsonRenderedOnUI();
  });
});
