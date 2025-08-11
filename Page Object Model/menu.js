class menu {
  onClick() {
    cy.get("#react-burger-menu-btn").click();
    cy.get(".bm-menu").should("be.visible");
  }

 // optionsClick() { 
 //   const menuOptions = [
 //     { label: "All Items", url: "/inventory.html" },
 //     { label: "About", url: "https://saucelabs.com/" },
 //     { label: "Logout", url: "/" },
 //     { label: "Reset App State", url: "/inventory.html" }
 //   ];
//
 //   menuOptions.forEach((option) => {
 //     cy.get("#react-burger-menu-btn").click({ force: true }); // Use force here
 //     cy.contains(option.label).should("be.visible");
 //     if (option.label === "All Items" || option.label === "About") {
 //       cy.contains(option.label).click();
 //       cy.url().should("include", option.url);
 //       cy.go("back");
 //     }
 //   });
 // }

  clickOption() {
    cy.get("#react-burger-menu-btn").click();
    const menuOptions = ["All Items", "About", "Logout", "Reset App State"];
    menuOptions.forEach((option) => {
      cy.contains(option).should("have.css", "cursor", "pointer");
    });
  }
}

export default menu; 
