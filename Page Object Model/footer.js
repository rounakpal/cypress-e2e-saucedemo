class footer {
    visible(){
        cy.get(".footer").should("be.visible");
    }
    iconVisible() {
      cy.get('footer').within(() => {
      cy.get('a[href*="twitter"]').should('be.visible');
      cy.get('a[href*="facebook"]').should('be.visible');
      cy.get('a[href*="linkedin"]').should('be.visible');
    });
    }

    copyRightText() {
        cy.get('footer').contains('© 2025 Sauce Labs. All Rights Reserved.').should('be.visible');
    }
}

export default footer; 