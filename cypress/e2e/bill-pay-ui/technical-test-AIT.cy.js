const invalidUsers = [
    { username: 'invalidusername001', password: 'Password!123' },
    { username: 'invalidusername002', password: 'Password!123' },
    { username: 'invalidusername003', password: 'Password!123' },
]

describe('Invalid login test', () => {
    it('should reject invalid credentials', () => {
        // Access the login page
        cy.visit('https://desktop-business.oyindonesia.com/login')
        // Input invalid credentials
        cy.get('#iptUsername').type('invalidusername')
        cy.get('#iptPassword').type('Password!123')
        // Click login button
        cy.get('#btnLogin').click()

        // Assertion: check message error:
        cy.contains('Username atau kata sandi Anda salah.');
    })

    invalidUsers.forEach((data) => {
        it(`Data driven test with invalid username: ${data.username}`, () => {
            // Access the login page
            cy.visit('https://desktop-business.oyindonesia.com/login')
            // Input invalid credentials
            cy.get('#iptUsername').type(data.username)
            cy.get('#iptPassword').type(data.password)
            // Click login button
            cy.get('#btnLogin').click()

            // Assertion: check message error:
            cy.contains('Username atau kata sandi Anda salah.');
        });
    });
});