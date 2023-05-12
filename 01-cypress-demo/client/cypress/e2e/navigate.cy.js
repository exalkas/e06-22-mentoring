describe("Testing navigation", () => {
  it("should visit the profile page", () => {
    cy.login();

    cy.get('[data-cy="profileIcon"]').click();

    cy.location("pathname").should("eq", "/profile");
  });
});
