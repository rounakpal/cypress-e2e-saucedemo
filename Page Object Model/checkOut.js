// Page Object Model class for handling checkout page actions and verifications
class checkOut {
     // Verifies the page heading is correct and visible
    pageHeading() {
        cy.get(".title").should("have.text","Checkout: Your Information").and("be.visible")
    }

     // Verifies all checkout form fields and buttons are visible
    textfieldVisibility() {
        cy.get('[data-test="firstName"]').should('be.visible');
        cy.get('[data-test="lastName"]').should('be.visible');
        cy.get('[data-test="postalCode"]').should('be.visible');
        cy.get('[data-test="continue"]').should('be.visible');
        cy.get('[data-test="cancel"]').should('be.visible');
    }

    // Verifies error message when all fields are empty
    errorForEmptyField() {
         cy.get('[data-test="continue"]').click();
         cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
    }

    // Verifies error message when first name is missing
    errorForMissingFirstName(lastName,postalCode) {
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('contain', 'First Name is required');
    }
    
    // Verifies error message when last name is missing
    errorForMissingLastName(firstName,postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="postalCode"]').type(postalCode);;
         cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('contain', 'Last Name is required');
    }

    // Verifies error message when postal code is missing
    errorForMissingPostalCode(firstName,lastName) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
         cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required');
    }

     // Fills all fields and verifies navigation to the next checkout step
    allFieldFilled(firstName,lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
        cy.url().should('include', '/checkout-step-two.html');
    }

    // Clicks the cancel button and verifies navigation back to the cart page
    cancelButton() {
    cy.get('[data-test="cancel"]').click();
    cy.url().should('include', '/cart.html');
  };


}

export default checkOut; 