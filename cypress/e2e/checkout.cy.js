// Page Object Model
import LoginPage from "../../Page Object Model/loginPage";
import Allproducts from "../../Page Object Model/allProducts";
import IndiviualProduct from "../../Page Object Model/indiviualProduct";
import AddToCart from "../../Page Object Model/addToCart";
import Header from "../../Page Object Model/header"
import CheckOut from "../../Page Object Model/checkOut";
import Footer from "../../Page Object Model/footer";

// Instantiate page objects
const loginpage = new LoginPage();
const allProducts = new Allproducts();
const indiviualProduct = new IndiviualProduct(); 
const addToCart = new AddToCart(); 
const header = new Header(); 
const checkOut = new CheckOut(); 
const footer = new Footer(); 


let loginData;  // Will hold login fixture data

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
    addToCart.checkoutPage(); 
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

// Test suite for checkout page UI and functionality
describe('Verify that UI and functionality of the check page', () => {
    let userData;    // Will hold checkout fixture data

     // Load checkout fixture data before all tests in this suite
    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data
        })
    })

    // Verify the page heading is correct
    it('Verify that the page heading is correct', () => {
        checkOut.pageHeading(); 
    });
      // Verify error message when all fields are empty
    it('Verify the error message when all the fields are empty', () => {
        checkOut.errorForEmptyField(); 
    });
     // Verify error message when first name field is empty
    it('Verify the error message when the first name field is empty', () => {
        checkOut.errorForMissingFirstName(userData.checkout_information.last_name,userData.checkout_information.zip_postal_code)
    });
      // Verify error message when last name field is empty
    it('Verify the error message when the last name field is empty', () => {
        checkOut.errorForMissingLastName(userData.checkout_information.first_name,userData.checkout_information.zip_postal_code)
    });
    // Verify error message when postal code field is empty
      it('Verify the error message when the postal code field is empty', () => {
        checkOut.errorForMissingPostalCode(userData.checkout_information.first_name,userData.checkout_information.last_name)
    });
    // Verify user is redirected to product details page when all fields are filled
    it('Verify that the user is redirceted towards the product details page when all the details are filled', () => {
        checkOut.allFieldFilled(userData.checkout_information.first_name,userData.checkout_information.last_name,userData.checkout_information.zip_postal_code)
    });
        // Verify cancel button functionality
    it('Verify that the user clicks the cancel button', () => {
        checkOut.cancelButton(); 
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
