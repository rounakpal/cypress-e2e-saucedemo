class productPage {

    visit(){
        cy.visit("https://www.saucedemo.com/inventory.html")
    }

    pagetittle() {
        cy.title().should('eq',"Swag Labs")
    }

    productList(){
        cy.get("#inventory_container .inventory_container").should("exist").and("be visible");  
    }

    carticon(){
        cy.get(".product_sort_container").should("exist").and("be visible")
    }
    
}

export default productPage; 