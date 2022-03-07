describe("2 Login", () => {
  it("should login", () => {
    cy.visit("/login");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("bonjourbonjour");
    cy.get('#remember').check();
    cy.get(".btn-primary").click();

    cy.url().should("include", "/home");
    cy.get('.card-body').should('contain', 'Je suis un composant vue')
  });

  it("should fail login", () => {
    cy.visit("/login");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("bonjourbonjourbonjourbonjour");
    cy.get('#remember').check();
    cy.get(".btn-primary").click();

    cy.url().should("include", "/login");
    cy.get('.card-body').should('contain', 'These credentials do not match our records.')
  });
});
