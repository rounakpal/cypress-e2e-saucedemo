// Page Object Model class for handling checkout details page actions and verification
class checkoutDetails {
    // Verifies the page heading is correct for the checkout overview
    pageHeading() {
        cy.get(".title").should("have.text","Checkout: Overview")
    }
    // Verifies that products and their details are visible in the checkout overview
    productVisibility(){
        cy.get('.cart_item').should('have.length.at.least', 1);  // ensures products are present
        cy.get('.cart_quantity').should('be.visible');           // Check product quantity
        cy.get('.inventory_item_name').should('be.visible');     // Check product name
        cy.get('.inventory_item_price').should('be.visible');    // Check product price
    }

    // Verifies that payment and shipping information sections are visible
    paymentAndShippingSectionInfo() {
        cy.get('.summary_info_label').contains('Payment Information').should('be.visible');
        cy.get('.summary_info_label').contains('Shipping Information').should('be.visible');
    }

     // Clicks the Finish button to complete checkout
    clickFinishButton() {
        cy.get('#finish').should("be.visible").click(); 
    }

     // Verifies that the Cancel button is visible
    cancelButton() {
        cy.get('#cancel').should("be.visible")
    }
}

export default checkoutDetails; 