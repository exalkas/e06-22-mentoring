it("This is a hello world test", () => {
  cy.visit("http://localhost:3000");

  cy.get('[type="email"]').type("002");
  cy.get(":nth-child(2) > .w-full").type("123");

  cy.get(".mb-12 > .py-4").click();

  cy.contains("002");
});
