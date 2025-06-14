import Login from "../Page Object Model/Login";
// Test suite for the Login Page functionality
describe("Test Scenario for the Login Page", () => {
  let loginData;

  // Load login data from fixture before all tests
  before(() => {
    cy.fixture("loginData").then((data) => {
      loginData = data;
    });
  });
  // Visit the login page before each test
  beforeEach(() => {
    Login.visit();
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
    loginPage.setusername("");
    loginPage.setpassword("");
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
