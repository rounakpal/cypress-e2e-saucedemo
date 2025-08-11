import ProductPage from "../../Page Object Model/productpage";
import LoginPage from "../../Page Object Model/loginPage.js";
import SearchProduct from "../../Page Object Model/searchProduct.js";
import MenuItems from "../../Page Object Model/menu.js"
import AllProducts from "../../Page Object Model/allProducts.js"

const loginPage = new LoginPage();
const productPage = new ProductPage();
const searchProduct = new SearchProduct(); 
const menu = new MenuItems(); 
const allProducts = new AllProducts(); 
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

describe('Verify that functionality of the search field', () => {
  it('Verify that the serach field is enabled', () => {
    searchProduct.enableDropodown(); 
  });

  it('Verify the default option of the serach field', () => {
    searchProduct.defaultOption(); 
  });

  it('Verify that the expected option is correct', () => {
    searchProduct.expectedOption(); 
  });
  
  it('Verify that the product is sort by name A to Z ', () => {
    searchProduct.sortBYAscendingOrder(); 
  });

  it('Verify that the product is sort by name Z to A', () => {
    searchProduct.sortByDescendingOrder(); 
  });

   it('Verify that the product is sort by name A to Z ', () => {
    searchProduct.sortBYAscendingOrder(); 
  });

  it('Verify that the product is sort by name Z to A', () => {
    searchProduct.sortByDescendingOrder(); 
  });

   it('Verify that the product is sort by Low to High Price ', () => {
    searchProduct.sortByLowPrice(); 
  });

  it('Verify that the product is sort by High to Low Price', () => {
    searchProduct.sortByHighPrice();
  });
});

describe('Verify the menu icon functionality', () => {
  it('Verify that on clicking the menu icon the sidebar is visible to the user', () => {
    menu.onClick(); 
  });

  //  it('Verify that all the options are visible in  the side bar and on clicking it the user is redirected towards the page', () => {
  //  menu.optionsClick(); 
  //});

  it('Verify that each option is present in the menu bar', () => {
    menu.clickOption(); 
  });
});

describe.only('Verify that the products are visible with all detail ', () => {
  it('Verify that all the products is visible to the user', () => {
    allProducts.allProductsVisibility(); 
  });

  it('Verify that user clicks on the Add to cart button', () => {
    allProducts.addCart(); 
  });
});
