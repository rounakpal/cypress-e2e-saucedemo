class loginPage {
   // Navigates to the Sauce Demo login page
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
// Enters the provided username into the username input field
  setusername(username) {
    cy.get("#user-name").type(username);
  }
  // Enters the provided password into the password input field
  setpassword(password) {
    cy.get("#password").type(password);
  }
 // Clicks the login button to attempt login
    clickLogin() {
        cy.get("#login-button").click();
    }
// Verifies that a login error message is visible
    verifyLoginError() {
        cy.get("[data-test='error']").should("be.visible");
    }

  // Verifies successful login by checking the URL and page title
    verifyLoginSuccess() {
        cy.url().should("include", "/inventory.html");
        cy.get(".title").should("contain", "Products");
    }
}

export default loginPage;
