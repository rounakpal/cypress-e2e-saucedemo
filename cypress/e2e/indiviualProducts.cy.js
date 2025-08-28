// Import all Page Object Model classes for individual product page tests
import AllProducts from "../../Page Object Model/allProducts"
import IndiviualProduct from  "../../Page Object Model/indiviualProduct"
import LoginPage from "../../Page Object Model/loginPage";
import Header from "../../Page Object Model/header";
import Footer from "../../Page Object Model/footer";

// Instantiate page objects for use in tests
const loginPage = new LoginPage(); 
const allProducts = new AllProducts(); 
const indiviualProduct = new IndiviualProduct(); 
const header = new Header(); 
const footer = new Footer(); 

let loginData;  // Will hold login fixture data

// Load login fixture data before all tests
before(() => {
    cy.fixture('loginData').then((data) => {
        loginData = data;
    })
});

// Perform login and navigate to individual product page before each test
beforeEach(() => {
    loginPage.visit();
    loginPage.setusername(loginData.validUser.username); 
    loginPage.setpassword(loginData.validUser.password); 
    loginPage.clickLogin();
    allProducts.individualProducts();
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

// Test suite for verifying individual product page functionality
describe('Verify the functionality of individual page', () => {
       // Verify product image is visible
    it('Verify that the product image is visible to the user', () => {
        indiviualProduct.imageVisiblity(); 
    });

    // Verify product name is visible
    it('Verify that the prdouct name is visible to the user', () => {
        indiviualProduct.productName(); 
    });

     // Verify product description is visible
    it('Verify thatt he product description is visible to the user', () => {
        indiviualProduct.productDescription(); 
    });

    // Verify product price is visible
    it('Verify that the product price is visible to the user', () => {
        indiviualProduct.productPrice(); 
    });

    // Verify back to products link functionality
    it('Verify that user is back to the product on clicking back to product link', () => {
        indiviualProduct.backToProducts(); 
    });

    // Verify add to cart button functionality
    it('Verify that user clicks on the Add to cart button', () => {
        indiviualProduct.addProductToCart(); 
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
