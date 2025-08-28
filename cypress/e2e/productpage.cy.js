// Import all Page Object Model classes for product page tests
import ProductPage from "../../Page Object Model/productpage";
import LoginPage from "../../Page Object Model/loginPage.js";
import SearchProduct from "../../Page Object Model/searchProduct.js";
import AllProducts from "../../Page Object Model/allProducts.js"
import Footer from "../../Page Object Model/footer.js"
import Header from "../../Page Object Model/header.js";

// Instantiate page objects
const loginPage = new LoginPage();
const productPage = new ProductPage();
const searchProduct = new SearchProduct(); 
const allProducts = new AllProducts(); 
const footer = new Footer(); 
const header = new Header(); 


let loginData; // Will hold login fixture data
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

// Test suite for verifying header functionality
describe('Verify the header of the page', () => {
  // Verify cart icon is visible
   it("Verify that the cart icon in the web application", () => {
    header.cartIcon();
  });
  // Verify logo is visible
    it("Verify that the logo is visible in the web application", () => {
    header.logo();
  });
// Verify menu icon is visible
  it("Verify that the menu icon is visible in the web application", () => {
    header.menuIcon();
  });
  // Verify clicking the menu icon
  it('Verify thatt the user clicks on the menu icon', () => {
    header.onClickMenuIcon(); 
  });
 // Verify hovering over menu options
    it('Verify thatt the user clicks on the hover over the menu option', () => {
    header.onHoveringMenuOption(); 
  });
});

// Test suite for verifying product page UI
describe("Verify that UI of the product page", () => {
  // Verify page loads successfully
  it("Verify the page loads successfully", () => {
    productPage.pageStatus();
  });
    // Verify page title after logging in
  it("Verify the page tittle of the application after logging", () => {
    productPage.pageTittle();
  });
  // Verify product list is visible
  it("Verify that the prdouct list in the web application", () => {
    productPage.productList();
  });
  // Verify search icon is visible
  it("Verify that the search icon in the web application", () => {
    productPage.searchIcon();
  });
});

// Test suite for verifying search field functionality
describe('Verify that functionality of the search field', () => {
    // Verify search dropdown is enabled
  it('Verify that the serach field is enabled', () => {
    searchProduct.enableDropodown(); 
  });

   // Verify default option in search dropdown
  it('Verify the default option of the serach field', () => {
    searchProduct.defaultOption(); 
  });

    // Verify expected options in search dropdown
  it('Verify that the expected option is correct', () => {
    searchProduct.expectedOption(); 
  });
  
   // Verify sorting by name A to Z
  it('Verify that the product is sort by name A to Z ', () => {
    searchProduct.sortBYAscendingOrder(); 
  });

   // Verify sorting by name Z to A
  it('Verify that the product is sort by name Z to A', () => {
    searchProduct.sortByDescendingOrder(); 
  });

 // Verify sorting by price low to high
   it('Verify that the product is sort by Low to High Price ', () => {
    searchProduct.sortByLowPrice(); 
  });

    // Verify sorting by price high to low
  it('Verify that the product is sort by High to Low Price', () => {
    searchProduct.sortByHighPrice();
  });
});

// Test suite for verifying product details and cart functionality
describe('Verify that the products are visible with all detail ', () => {
// Verify all products are visible
  it('Verify that all the products is visible to the user', () => {
    allProducts.allProductsVisibility(); 
  });

  // Verify adding products to cart
  it('Verify that user clicks on the Add to cart button', () => {
    allProducts.addCart(); 
  });

  // Verify clicking on individual product page
  it('Verify that the user clicks on the individual page', () => {
    allProducts.individualProducts(); 
  });
});

// Test suite for verifying footer functionality
describe('Verify the footer of the page', () => {
  // Verify footer is visible
  it('Verify that the footer is visible in the page', () => {
        footer.visible();       
    });

     // Verify social media icons are visible
    it('Verify that the social media icon is visible to the user', () => {
      footer.iconVisible(); 
    });

    // Verify copyright text is visible
    it('Verify that the copy right text is visible to the user', () => {
      footer.copyRightText(); 
    });
});
