describe('register new user', () => {
    it('should register new user', () => {
        cy.visit('/register');
        cy.get('#name').type("test");
        cy.get('#email').type("test@test.com");
        cy.get('#password').type('bonjourbonjour')
        cy.get('#password-confirm').type('bonjourbonjour')
        cy.contains('Create Account').click()

        cy.url().should('include', '/home')
        cy.get('.card-body').should('contain', 'Je suis un composant vue')
    })

    it('should fail unique email validations', () => {
        cy.visit('/register');
        cy.get('#name').type("test");
        cy.get('#email').type("test@test.com");
        cy.get('#password').type('bonjourbonjour')
        cy.get('#password-confirm').type('bonjourbonjour')
        cy.contains('Create Account').click()

        cy.url().should('include', '/register')
        cy.get('.card-body').should('contain', 'The email has already been taken.')
        cy.get('#name').should('have.value', 'test')
        cy.get('#email').should('contain', '')
    })

    it('should faild password confirmation validation', () => {
        cy.visit('/register');
        cy.get('#name').type("test");
        cy.get('#email').type("test1@test.com");
        cy.get('#password').type('undeuxtrois')
        cy.get('#password-confirm').type('undeuxtroisquatre')
        cy.contains('Create Account').click()

        cy.url().should('include', '/register')
        cy.get('.card-body').should('contain', 'The password confirmation does not match.')

    })
})

