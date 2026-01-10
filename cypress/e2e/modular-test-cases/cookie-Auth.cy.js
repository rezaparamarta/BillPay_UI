describe('Cookie Authentication', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/v1/auth/me').as('authMe');
    cy.intercept('GET', '**/v1/health').as('health');
    cy.visit('index.html#/practice');
  });


  it('authenticates successfully with valid session cookie', () => {
    cy.setSessionCookie('demo-session-abc123');
    cy.triggerCookieAuth();

    cy.wait(['@authMe', '@health'], { timeout: 8000 })
        .then((interceptions) => {
        const authCall = interceptions.find(i =>
            i.request.url.includes('/auth/me')
        );

        expect(authCall).to.exist;
        expect(authCall.response.statusCode)
            .to.be.oneOf([200, 204]);
        });

    cy.assertCookieResult((res) => {
        expect(res.isJson).to.eq(true);
        expect(res.data.service).to.eq('billpay-api');
    });
});


  it('falls back to health endpoint when cookie is missing', () => {
    cy.interceptHealth('health');

    cy.clearSessionCookie();
    cy.triggerNoCookieAuth();

    cy.wait('@health').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.data.status).to.eq('healthy');
    });

    cy.assertCookieResult((res) => {
        expect(res.isJson).to.eq(true);
        expect(res.data.status).to.eq('healthy');
        });
  });
});