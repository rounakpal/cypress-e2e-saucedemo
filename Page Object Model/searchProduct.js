// Page Object Model class for handling search/sort functionality on the product page
class searchProduct {
   // Verifies that the product sort dropdown is enabled
  enableDropodown() {
    cy.get(".product_sort_container").should("not.be.disabled");
  }

  // Verifies that the default option in the sort dropdown is 'Name (A to Z)'
  defaultOption() {
    cy.get(".product_sort_container").should("have.value", "az");
  }

  // Verifies that all expected options are present in the sort dropdown
  expectedOption() {
    const expectedOption = [
      "Name (A to Z)",
      "Name (Z to A)",
      "Price (low to high)",
      "Price (high to low)",
    ];
    const actualOption = [];

    cy.get(".product_sort_container")
      .find("option")
      .each(($el) => {
        actualOption.push($el.text().trim());
      })
      .then(() => {
        expect(expectedOption.every((opt) => actualOption.includes(opt))).to.be
          .true;
      });
  }
// Verifies that products are sorted by name in ascending order (A to Z)
  sortBYAscendingOrder() {
    cy.get(".product_sort_container").select("Name (A to Z)");
    cy.get(".inventory_item_name").then(($names) => {
      const nameTexts = [...$names].map((n) =>
        n.innerText.trim().toLowerCase()
      );
      const sorted = [...nameTexts].sort();

      expect(nameTexts).to.deep.equal(sorted);
    });
  }

// Verifies that products are sorted by name in descending order (Z to A)
  sortByDescendingOrder() {
    cy.get(".product_sort_container").select("Name (Z to A)");
    cy.get(".inventory_item_name").then(($names) => {
      const nameTexts = [...$names].map((n) =>
        n.innerText.trim().toLowerCase()
      );
      const sorted = [...nameTexts].sort().reverse();

      expect(nameTexts).to.deep.equal(sorted);
    });
  }
  // Verifies that products are sorted by price from low to high
  sortByLowPrice() {
    cy.get(".product_sort_container").select("Price (low to high)");

    cy.get(".inventory_item_price").then(($prices) => {
      const priceValues = [...$prices].map((p) =>
        parseFloat(p.innerText.replace("$", ""))
      );
      const sorted = [...priceValues].sort((a, b) => a - b);

      expect(priceValues).to.deep.equal(sorted);
    });
  }
  // Verifies that products are sorted by price from high to low
  sortByHighPrice() {
    cy.get(".product_sort_container").select("Price (high to low)");

    cy.get(".inventory_item_price").then(($prices) => {
      const priceValues = [...$prices].map((p) =>
        parseFloat(p.innerText.replace("$", ""))
      );
      const sorted = [...priceValues].sort((a, b) => b - a); // Descending order

      expect(priceValues).to.deep.equal(sorted);
    });
  }
}

export default searchProduct;
