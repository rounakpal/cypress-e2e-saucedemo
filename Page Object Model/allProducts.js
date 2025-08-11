class products {
  allProductsVisibility() {
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("exist").within(() => {
      cy.get(".inventory_item").should("have.length.at.least", 1).each(($el) => {
        cy.wrap($el).within(() => {
          cy.get(".inventory_item_name").should("be.visible");
          cy.get(".inventory_item_img").should("be.visible");
          cy.get(".inventory_item_desc").should("be.visible");
          cy.get(".inventory_item_price").should("be.visible");
        });
      });
    });
  }

  addCart() {
    cy.get('.inventory_item').each(($el, index, $list) => {
    cy.wrap($el).within(() => {
      cy.contains('Add to cart').click();
    });
  });

  cy.get('.shopping_cart_badge').should('have.text', Cypress._.toString(Cypress.$('.inventory_item').length)); 
 }
}
export default products;