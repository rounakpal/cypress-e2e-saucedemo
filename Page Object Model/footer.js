// Page Object Model class for handling footer related actions and verifications
class footer {
    // Verifies that the footer section is visible on the page
    visible() {
        cy.get(".footer").should("be.visible");
    }

    // Verifies that all social media icons (Twitter, Facebook, LinkedIn) are visible in the footer
    iconVisible() {
        cy.get('footer').within(() => {
            cy.get('a[href*="twitter"]').should('be.visible');
            cy.get('a[href*="facebook"]').should('be.visible');
            cy.get('a[href*="linkedin"]').should('be.visible');
        });
    }

    // Verifies that the copyright text is visible in the footer
    copyRightText() {
        cy.get('footer').contains('© 2025 Sauce Labs. All Rights Reserved.').should('be.visible');
    }
}

export default footer;