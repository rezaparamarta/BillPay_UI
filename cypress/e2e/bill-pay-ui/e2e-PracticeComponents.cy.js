describe('Bill Pay UI Practice Components', () => {
    // Accessing URL Bill Pay UI
    beforeEach(() => {
        cy.visit('https://gauravkhurana.in/practise-api/ui/index.html#/practice');
    });

    // Input forms of profile
    it('Input Basic Elements', () => {
        cy.get('[data-testid="first-name"]').type('Gajah');
        cy.get('[data-testid="email"]').type('gajahpred@gmail.com');
        cy.get('[data-testid="password"]').type('planetk3pl3r22b');
        cy.get('[data-testid="bio"]').type('I am a QA engineer and I love to test');
        // Assertion of the input was filled
        cy.get('#passwordStrength').should('contain', 'Strong');
        cy.get('#passwordStrength').click();
        // Choose any option from the dropdown
        cy.get('[data-testid="country"]').select('India');

        // Assertion of the dropdown was filled
        cy.get('[data-testid="country"]').should('have.value', 'in');

        // Choose any options from multiple option dropdown
        cy.get('[data-testid="frameworks"]').select('Cypress');

        // Assertion of the multiple dropdown was filled
        cy.contains('Cypress').should('be.visible');
        
        // Choose any radio button option
        cy.get('[data-testid="gender-male"]').click();

        // choose any checkbox option
        cy.get('[data-testid="terms"]').click();
        cy.get('[data-testid="terms"]').should('be.checked');

        // Choose any checkbox option
        cy.get('[data-testid="notifications"]').click();
        cy.get('[data-testid="notifications"]').should('be.checked');
        // Click button
        cy.get('[data-testid="btn-primary"]').click();

        // Assertion for checking Buttons (Various States) was clicked
        cy.get('#btnOutput').should('contain', 'btnPrimary');
        // Slide value volume into 80%
        cy.get('[data-testid="volume-slider"]')
          .invoke('val', 80)
          .trigger('input')
          .trigger('change');

        // Assertion for checking Slider was filled
        cy.get('[data-testid="volume-slider"]').should('have.value', 80);
        cy.get('#volume').should('have.value', 80);

        // Slide value price into 350$
        cy.get('[data-testid="price-slider"]')
          .invoke('val', 350)
          .trigger('input')
          .trigger('change');

        // Assertion for checking Slider was filled
        cy.get('[data-testid="price-slider"]').should('have.value', 350);
        cy.get('#price').should('have.value', 350);

        // Click date picker
        cy.get('[data-testid="date-input"]')
          .invoke('val', '2026-01-08')
          .trigger('input')
          .trigger('change');
          
        // Assertion for checking Date Picker was filled
        cy.get('[data-testid="date-input"]').should('have.value', '2026-01-08');

        // Choose Time
        cy.get('[data-testid="time-input"]')
          .invoke('val', '18:24')
          .trigger('input')
          .trigger('change');

        // Choose date and time
        cy.get('[data-testid="datetime-input"]')
          .invoke('val', '2026-01-08 18:24')
          .trigger('input')
          .trigger('change');

        // pick and choose file
        cy.get('[data-testid="single-file"]').selectFile('cypress/fixtures/files/Reza Paramarta_Resume.pdf');
        // Assertion for single file upload
        cy.get('[data-testid="single-file"]').should(input => {
            expect(input[0].files[0].name).to.eq('Reza Paramarta_Resume.pdf');
        });

        // pick and choose multiple files
        cy.get('[data-testid="multi-file"]').selectFile(['cypress/fixtures/files/Reza Paramarta_Resume.pdf', 'cypress/fixtures/files/REZA_PARAMARTA_TAKE_HOME_TEST_QA.pdf']);
        // Assertion for multiple file upload
        cy.get('[data-testid="multi-file"]').should(input => {
            expect(input[0].files[0].name).to.eq('Reza Paramarta_Resume.pdf');
            expect(input[0].files[1].name).to.eq('REZA_PARAMARTA_TAKE_HOME_TEST_QA.pdf');
        });

        // Choose auto complete
        cy.get('[data-testid="autocomplete"]')
          .invoke('val', 'cypress')
          .trigger('input')
          .trigger('change');

        // Assertion for auto complete
        cy.get('[data-testid="autocomplete"]').should('have.value', 'cypress');

        // Click button Start Progress
        cy.get('#startProgress').click();

        // Hover option
        cy.get('[data-testid="hover-box-1"]').trigger('mouseover');
        cy.get('[data-testid="hover-box-1"]').click();
        cy.get('#hoverOutput').should('contain', 'Box 1');

        // Drag and drop
        cy.get('[data-item="1"]')
          .drag('[data-testid="drop-target"]')

        // Assertion for drag and drop
        cy.get('[data-testid="drop-target"]').should('contain', '1');
    });
});