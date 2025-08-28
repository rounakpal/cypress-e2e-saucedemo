// Import all Page Object Model classes for cart page tests
import LoginPage from "../../Page Object Model/loginPage";
import Allproducts from "../../Page Object Model/allProducts";
import IndiviualProduct from "../../Page Object Model/indiviualProduct";
import AddToCart from "../../Page Object Model/addToCart";
import Header from "../../Page Object Model/header";
import Footer from "../../Page Object Model/footer";

// Instantiate page objects
const loginpage = new LoginPage();
const allProducts = new Allproducts();
const indiviualProduct = new IndiviualProduct(); 
const addToCart = new AddToCart(); 
const header = new Header(); 
const footer = new Footer(); 

let loginData; // Will hold login fixture data

// Load login fixture data before all tests
before(() => {
    cy.fixture('loginData').then((data) => {
        loginData = data;
    })
});

// Perform login and add product to cart before each test
beforeEach(() => {
    loginpage.visit(); 
    loginpage.setusername(loginData.validUser.username); 
    loginpage.setpassword(loginData.validUser.password); 
    loginpage.clickLogin();
    allProducts.individualProducts();
    indiviualProduct.addProductToCart(); 
    header.clickCartIcon(); 

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

// Test suite for verifying cart page functionality
describe('Verify the functionality of the cart page', () => {
     // Verify cart page heading
    it('Verify that the page heading is visible to the user', () => {
        addToCart.cartPageheading(); 
    });

    // Verify details of the added product
    it('Verify the deatils of the added product', () => {
        addToCart.addedProductDetails(); 
    });

     // Verify product removal from cart
    it('Verify that product gets remove on clicking the remove button', () => {
        addToCart.removeProductFromCart(); 
    });

    // Verify redirect to product page on clicking back
    it('Verify that the user is redirected towrsd the product page on clicking the back to product', () => {
        addToCart.backToProductPage(); 
    });

    // Verify redirect to checkout page
    it('Verify that the user is redirected towards the checkout page', () => {
        addToCart.checkoutPage(); 
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

