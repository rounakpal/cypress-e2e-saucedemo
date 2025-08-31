# Sauce Demo Cypress E2E Project

This repository contains end-to-end (E2E) tests for the [Sauce Demo](https://www.saucedemo.com/) web application using [Cypress](https://www.cypress.io/). The project follows the Page Object Model (POM) design pattern for maintainable and scalable test automation.

## 📁 Project Structure

```
Sauce Demo/
├── cypress/
│   ├── e2e/                # Cypress test files
│   ├── fixtures/           # Test data (JSON files)
│   └── support/            # Custom commands and utilities
├── Page Object Model/      # Page Object classes for each page/component
├── .github/workflows/      # GitHub Actions CI configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Tests Locally

- **Open Cypress Test Runner:**
  ```bash
  npx cypress open
  ```

- **Run tests in headless mode:**
  ```bash
  npx cypress run
  ```

## 🧩 Page Object Model

All page interactions and verifications are implemented as classes in the `Page Object Model` folder.  
Each class contains methods for interacting with and asserting elements on a specific page.

## 📝 Writing Tests

- Test files are located in `cypress/e2e/`.
- Use fixture files from `cypress/fixtures/` for test data.
- Import and use Page Object classes for clean and maintainable test code.

## ⚙️ Continuous Integration

- This project uses GitHub Actions to run Cypress tests automatically on every push.
- Workflow configuration is in `.github/workflows/build.yml`.

## 📚 Useful Commands

- **Run all tests:** `npx cypress run`
- **Run a specific test file:** `npx cypress run --spec "cypress/e2e/<file>.cy.js"`
- **Open Cypress UI:** `npx cypress open`

## 🛠️ Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes.
4. Push to your branch (`git push origin feature-branch`).
5. Create a Pull Request.

## 📄 License

This project is licensed under the MIT
