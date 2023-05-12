describe("Testing add post", () => {
  it("should add a post", () => {
    cy.login();

    cy.get("#addPost").click();

    cy.contains("Add Post");

    cy.get("#modalTextarea").type("This is a new post for e06");

    cy.get("#modalSave").click();

    cy.contains("Add Post").should("not.be");
    cy.contains("This is a new post for e06");
  });
});
