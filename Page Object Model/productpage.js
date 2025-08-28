// Page Object Model class for handling product page actions and verifications
class productPage {
  // Verifies the current URL includes '/inventory.html'
  url() {
    cy.url().should("inclue", "/inventory.html");
  }

// Verifies the inventory page is loaded and visible
pageStatus() {
  cy.url().should("include", "/inventory.html");
  cy.get("body").should("be.visible"); // or check for a specific element unique to the inventory page
}

  // Verifies the page title is 'Swag Labs'
  pageTittle() {
    cy.title().should("eq", "Swag Labs");
  }
   // Verifies the product list container is present and visible
  productList() {
    cy.get("#inventory_container .inventory_container")
      .should("exist")
      .and("be.visible");
  }

  // Verifies the search/sort icon is present and visible
  searchIcon() {
    cy.get(".product_sort_container").should("exist").and("be.visible");
  }
}

export default productPage;
