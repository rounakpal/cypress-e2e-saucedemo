// Page Object Model class for handling individual product page actions and verifications
class indiviualProduct {
    // Verifies that the product image is visible
    imageVisiblity(){
         cy.get('.inventory_details_img').should('be.visible');
    }

    // Verifies that the product name is correct
    productName() {
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Bike Light');
    }

    // Verifies that the product description is visible and not empty
    productDescription() {
        cy.get('.inventory_details_desc').should('be.visible').and('not.be.empty')
    }

    // Verifies that the product price is correct
    productPrice() {
        cy.get('.inventory_details_price').should('have.text', '$9.99');
    }

     // Clicks the 'Back to products' link and verifies navigation to the inventory page
    backToProducts() {
        cy.contains('Back to products').click();
        cy.url().should('include', 'inventory.html');
    }

    // Clicks the 'Add to cart' button and verifies the cart badge count increases
    addProductToCart() {
        cy.get('button').contains('Add to cart').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    }
    
}

export default indiviualProduct; 