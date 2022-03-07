describe("Login and use form", () => {
  it("should login, fill and reset form", () => {
    //Login
    cy.visit("/login");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("bonjourbonjour");
    cy.get(".btn-primary").click();

    //Interact with form
    cy.get("#email").type("lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!");
    cy.get("#priority").select("Urgente");
    cy.get('#created_at')
        .type('2009-12-12')
    cy.get("#satisfaction").type(1);
    cy.get('input[type=range]')
        .invoke('val', 100)
        .trigger('change')

    //Assertions
    cy.contains('La valeur de l\'input hidden').should('not.exist')
    cy.get("#satisfaction").should("have.value", 101);
    cy.get("#created_at").should("have.value", "2009-12-12");
    cy.get('.mt-3').click(); //reset form
    cy.get("#email").should("have.value", "");
    cy.get("#priority").should("have.value", "Normale");
    cy.get("#satisfaction").should("have.value", 0);
    cy.get('#interest').should('have.value', 0)

  });
});
