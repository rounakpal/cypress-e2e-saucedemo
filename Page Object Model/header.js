// Page Object Model class for handling header related actions and verification
class header {
   // Verifies that the cart icon is present and visible
    cartIcon() {
      cy.get(".shopping_cart_link").should("exist").and("be.visible");
  }

   // Clicks the cart icon to navigate to the cart page
  clickCartIcon() {
    cy.get(".shopping_cart_link").click(); 
  }

   // Verifies that the application logo is present and visible
  logo() {
    cy.get(".app_logo").should("exist").and("be.visible");
  }

   // Verifies that the menu icon is present and visible
  menuIcon() {
    cy.get("#react-burger-menu-btn").should("exist").and("be.visible");
  }

  // Clicks the menu icon and verifies the menu is visible
   onClickMenuIcon() {
    cy.get("#react-burger-menu-btn").click();
    cy.get(".bm-menu").should("be.visible");
  }

   // Verifies that all menu options are visible and have pointer cursor on hover
   onHoveringMenuOption() {
    cy.get("#react-burger-menu-btn").click();
    const menuOptions = ["All Items", "About", "Logout", "Reset App State"];
    menuOptions.forEach((option) => {
      cy.contains(option).should("have.css", "cursor", "pointer");
    });
  }
}

export default header; 