// Page Object Model class for handling all products related actions on the inventory page
class allproducts {
  // Verifies that all products and their details are visible on the inventory page
  allProductsVisibility() {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("exist").within(() => {
      cy.get(".inventory_item").should("have.length.at.least", 1).each(($el) => {
        cy.wrap($el).within(() => {
          cy.get(".inventory_item_name").should("be.visible");      // Check product name
          cy.get(".inventory_item_img").should("be.visible");       // Check product image
          cy.get(".inventory_item_desc").should("be.visible");      // Check product description
          cy.get(".inventory_item_price").should("be.visible");     // Check product price
        });
      });
    });
  }

  // Adds all products to the cart and verifies the cart badge count
  addCart() {
    cy.get('.inventory_item').each(($el, index, $list) => {
      cy.wrap($el).within(() => {
        cy.contains('Add to cart').click(); // Click 'Add to cart' for each product
      });
    });

    // Verify the cart badge count matches the number of products
    cy.get('.shopping_cart_badge').should('have.text', Cypress._.toString(Cypress.$('.inventory_item').length)); 
  }

  // Clicks on a specific product by name to view its details
  individualProducts() {
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').click();
  }
}

export default allproducts;