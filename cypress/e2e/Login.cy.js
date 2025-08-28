import LoginPage from "../../Page Object Model/loginPage.js";

const loginPage = new LoginPage();
// Test suite for the Login Page functionality
 beforeEach(() => {
    loginPage.visit();
  });
describe("Verify the login functionality", () => {
  let loginData;

  // Load login data from fixture before all tests
  before(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });
  });

  // Test: Successful login with valid credentials
  it("Should login successfully with valid credentials", () => {
    loginPage.setusername(loginData.validUser.username);
    loginPage.setpassword(loginData.validUser.password);
    loginPage.clickLogin();
    loginPage.verifyLoginSuccess();
  });
  // Test: Validation error with invalid credentials
  it("Should give validation error with invalid credentials", () => {
    loginPage.setusername(loginData.invalidUser.username);
    loginPage.setpassword(loginData.invalidUser.password);
    loginPage.clickLogin();
    loginPage.verifyLoginError();
  });
  // Test: Validation error for  empty username and password fields
  it("Should give validation error for empty username and password fields", () => {
    loginPage.clickLogin();
    loginPage.verifyLoginError();
  });
  // Test: Validation error for empty password field and valid user name
  it("Should give validation error for the empty password field and valid user name", () => {
    loginPage.setusername("Admin");
    loginPage.clickLogin();
    loginPage.verifyLoginError();
  });
});

// Test suite for verifying UI elements of the Login page
describe("Verify the UI of the Login page ", () => {
  // Test: Logo is visible
  it("Verify that the logo is visible to the user", () => {
    loginPage.logo();
  });

  // Test: Username field is visible and has correct placeholder
  it("Verify that the username is visible to the user and the placeholder in the username field is correct", () => {
    loginPage.username(); 
  });

  // Test: Password field is visible and has correct placeholder
  it('Verify that the Password field is visible to the user and the placeholder in the password field is correct', () => {
      loginPage.password(); 
  });

    // Test: Login button is visible and has correct background
  it('Verify that the Login button is visible to the user and the background off the login button is correct', () => {
    loginPage.loginButton(); 
  });
});
