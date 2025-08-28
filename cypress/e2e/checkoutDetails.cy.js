// Page Object Model
import LoginPage from "../../Page Object Model/loginPage";
import Allproducts from "../../Page Object Model/allProducts";
import IndiviualProduct from "../../Page Object Model/indiviualProduct";
import AddToCart from "../../Page Object Model/addToCart";
import Header from "../../Page Object Model/header"
import CheckOut from "../../Page Object Model/checkOut";
import CheckoutDetails from "../../Page Object Model/checkoutDetails";
import Footer from "../../Page Object Model/footer"

// Instantiate page objects
const loginpage = new LoginPage();
const allProducts = new Allproducts();
const indiviualProduct = new IndiviualProduct(); 
const addToCart = new AddToCart(); 
const header = new Header(); 
const checkOut = new CheckOut(); 
const checkoutDetails = new CheckoutDetails(); 
const footer = new Footer(); 

let loginData; // Will hold login fixture data
let userData;  // Will hold checkout fixture data

// Load both fixtures before all tests
before(() => {
  cy.fixture('loginData').then((data) => {
    loginData = data;
  });
  cy.fixture('userData').then((data) => {
    userData = data;
  });
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
    addToCart.checkoutPage(); 
    checkOut.allFieldFilled(userData.checkout_information.first_name,userData.checkout_information.last_name,userData.checkout_information.zip_postal_code)
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

// Test suite for verifying product details in checkout page
describe('Verify the product details in checkout page', () => {
    // Verify page heading
    it('Verify that the page heading is visible to the user', () => {
        checkoutDetails.pageHeading(); 
    });

    // Verify product visibility
    it('Verify that the product is visible to the user', () => {
        checkoutDetails.productVisibility(); 
    });

     // Verify payment and shipment section visibility
    it('Verify that the payment and the shipment section is visible to the user', () => {
        checkoutDetails.paymentAndShippingSectionInfo(); 
    });

    // Verify cancel button functionality
    it('Verify that the user clicks the cancel button', () => {
        checkoutDetails.cancelButton(); 
    });
     // Verify finish button functionality
    it('Verify that the user clicks the finish button', () => {
        checkoutDetails.clickFinishButton(); 
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


