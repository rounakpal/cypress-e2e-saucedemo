import ProductPage from "../../Page Object Model/productpage";
import LoginPage from "../../Page Object Model/loginPage.js";

const loginPage = new LoginPage();
const productPage = new ProductPage();
let loginData;
// Global before hook
before(() => {
  // Load login data from fixture
  cy.fixture("loginData").then((data) => {
    loginData = data;
  });
});
// Global beforeEach hook
beforeEach(() => {
  // Perform login before each test
  loginPage.visit();
  loginPage.setusername(loginData.validUser.username);
  loginPage.setpassword(loginData.validUser.password);
  loginPage.clickLogin();
});

describe("Verify that UI of the product page", () => {
  it("Verify the page loads successfully", () => {
    productPage.pageStatus();
  });

  it("Verify the page tittle of the application after logging", () => {
    productPage.pageTittle();
  });

  it("Verify that the prdouct list in the web application", () => {
    productPage.productList();
  });

  it("Verify that the cart icon in the web application", () => {
    productPage.cartIcon();
  });

  it("Verify that the search icon in the web application", () => {
    productPage.searchIcon();
  });

  it("Verify that the logo is visible in the web application", () => {
    productPage.logo();
  });

  it("Verify that the menu icon is visible in the web application", () => {
    productPage.menuIcon();
  });
});
