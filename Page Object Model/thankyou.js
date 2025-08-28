// Page Object Model class for handling thank you page actions and verification
class thankyou {
     // Verifies that the page heading is visible and correct
    pageheading() {
        cy.get('.title').should('be.visible').and('have.text','Checkout: Complete!'); 
    }

    // Verifies that the success message is visible
    successMessage() {
         cy.contains('Thank you for your order!').should('be.visible');
    }

    // Verifies that the dispatch message is visible
    dispatchMessage() {
          cy.contains('Your order has been dispatched').should('be.visible');        
    }

    // Verifies that the checkmate icon is visible
    checkmateIcon() {
        cy.get('.pony_express').should('be.visible'); 
    }

    // Verifies that the 'Back Home' button is visible and enabled
    backToHomebutton() {
        cy.get('#back-to-products').should("be.visible").and('be.enabled')
    }

    // Clicks the 'Back Home' button and verifies navigation to the inventory page
    clickBackToHomeButton() {
        cy.contains('Back Home').click();
        cy.url().should('include', '/inventory.html');
    }
}

export default thankyou; 