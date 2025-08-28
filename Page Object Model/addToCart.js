// Page Object Model class for handling cart related actions and verifications
class addToCart {
   // Verifies the cart page heading is visible and correct
  cartPageheading() {
    cy.get(".title").should("be.visible").and("have.text", "Your Cart");
  }
  // Verifies details of each product added to the cart
  addedProductDetails() {
    cy.get(".cart_item").each((el) => {
      cy.wrap(el).within(() => {
        cy.get(".inventory_item_name").should("be.visible");    // Check product name
        cy.get(".inventory_item_desc").should("be.visible");    // Check product description
        cy.get(".inventory_item_price").should("be.visible");   // Check product price
        cy.get(".cart_quantity").should("have.text", "1");      // Check quantity is 1
      });
    });
  }

  // Removes a product from the cart and verifies the cart item count decreases
  removeProductFromCart() {
    cy.get('.cart_item').its('length').then((intialCount) => {
        cy.contains('Remove').first().click();
        cy.get('.cart_item').should('have.length',intialCount-1); 
    })
  }

  // Clicks the 'Continue Shopping' button and verifies navigation to the product page
  backToProductPage() {
    cy.contains('Continue Shopping').click();
    cy.url().should('include','inventory.html'); 
  }

   // Clicks the 'Checkout' button and verifies navigation to the checkout page
  checkoutPage(){
    cy.contains('Checkout').click(); 
    cy.url().should('include','checkout-step-one.html')
  }

}

export default addToCart;
