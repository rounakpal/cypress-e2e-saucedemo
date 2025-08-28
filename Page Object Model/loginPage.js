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

    // Verifies that the login page logo is visible
    logo(){
      cy.get(".login_logo").should("exist").and ("be.visible");
    }

    // Verifies that the username field is visible and has correct placeholder
    username(){
      cy.get('#user-name').should('be.visible').and('have.attr', 'placeholder', 'Username')
    }

    // Verifies that the password field is visible, has correct placeholder, and is of type password
    password(){
      cy.get("#password").should('be.visible').and('have.attr', 'placeholder', 'Password')
      cy.get('[data-test="password"]').invoke('attr', 'type').should('eq', 'password')
    }

     // Verifies that the login button is visible, contains correct text, and has correct background color
    loginButton(){
      cy.get('#login-button').should('be.visible').and('contain', 'Login')
      cy.get('#login-button').should('have.css', 'background-color', 'rgb(61, 220, 145)')
    }
}

export default loginPage;
