class productPage {
  url() {
    cy.url().should("inclue", "/inventory.html");
  }

pageStatus() {
  cy.url().should("include", "/inventory.html");
  cy.get("body").should("be.visible"); // or check for a specific element unique to the inventory page
}

  pageTittle() {
    cy.title().should("eq", "Swag Labs");
  }

  productList() {
    cy.get("#inventory_container .inventory_container")
      .should("exist")
      .and("be.visible");
  }

  searchIcon() {
    cy.get(".product_sort_container").should("exist").and("be.visible");
  }

  cartIcon() {
    cy.get(".shopping_cart_link").should("exist").and("be.visible");
  }

  logo() {
    cy.get(".app_logo").should("exist").and("be.visible");
  }

  menuIcon() {
    cy.get("#react-burger-menu-btn").should("exist").and("be.visible");
  }
}

export default productPage;
