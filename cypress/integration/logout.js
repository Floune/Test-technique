describe("2 Login", () => {
  it("should login and logout", () => {
    cy.visit("/login");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("bonjourbonjour");
    cy.get('#remember').check();
    cy.get(".btn-primary").click();

    cy.url().should("include", "/home");
    cy.get('.card-body').should('contain', 'Je suis un composant vue')

    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();
    cy.get('body').should('contain', 'Register')
    cy.get('body').should('contain', 'Log in')
  });


});
