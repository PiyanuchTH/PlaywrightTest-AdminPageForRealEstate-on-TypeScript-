# Playwright Test Automation — Real Estate Admin Page

## 📌 Overview

This project is a **Web UI Test Automation** project for a Real Estate Admin application.

The test suite is built with **Playwright and TypeScript** to automate functional and end-to-end test scenarios for important admin features such as:

* User Login
* Real Estate Project / Condominium Management
* Owner Management
* Asset / Property Management
* Form Validation
* Image Upload
* Navigation and Page Flow
* Required Field Validation

The project focuses on applying QA and test automation practices such as **Page Object Model (POM)**, reusable test components, test data management, and automated test execution.

---

## 🧰 Tech Stack

| Technology                  | Purpose                          |
| --------------------------- | -------------------------------- |
| **Playwright**              | Web UI Test Automation           |
| **TypeScript**              | Programming Language             |
| **Node.js / npm**           | Project & Dependency Management  |
| **Page Object Model (POM)** | Test Structure & Maintainability |
| **JSON**                    | Test Data Management             |
| **Git / GitHub**            | Version Control                  |

---

## 🧪 Testing Scope

The automation covers several key areas of the Real Estate Admin application.

### 🔐 Login

* Valid login
* Invalid username
* Invalid password
* Invalid username and password
* Authentication flow

### 🏢 Project / Condominium

* Navigate to project management
* Create a new project
* Fill project information
* Select location information
* Validate required fields
* Submit project information

### 👤 Owner

* Navigate to Owner management
* Add owner information
* Validate required fields
* Submit owner information

### 🏠 Asset / Property

* Navigate to Asset management
* Add new property
* Fill property information
* Select project
* Upload property images
* Validate required fields
* Submit property information

---

## 🏗️ Test Automation Structure

This project follows the **Page Object Model (POM)** pattern to separate page locators and actions from test cases.

```text
PlaywrightTest-AdminPageForRealEstate-on-TypeScript
│
├── .github/
│   └── workflows/
│
├── ImageForTest/
│   └── Test images used for upload scenarios
│
├── pageobjects/
│   ├── InsertNewAsset.ts
│   ├── InsertOwner.ts
│   ├── InsertProjectCondo.ts
│   ├── LoginPage.ts
│   └── POManager.ts
│
├── tests/
│   ├── InsertProjectPage.spec.ts
│   ├── RealEstatePage.spec.ts
│   └── example.spec.ts
│
├── utils/
│   └── placeorderTestData.json
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧩 Page Object Model

Each major page/functionality has its own Page Object class.

For example:

```text
LoginPage
    ↓
InsertProjectCondo
    ↓
InsertOwner
    ↓
InsertNewAsset
```

The `POManager` is used to manage and provide access to the different Page Objects.

This approach helps:

* Reduce duplicated locators
* Reuse common actions
* Keep test cases clean
* Improve maintainability
* Make test scripts easier to understand

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PiyanuchTH/PlaywrightTest-AdminPageForRealEstate-on-TypeScript.git
```

### 2. Navigate to the project

```bash
cd PlaywrightTest-AdminPageForRealEstate-on-TypeScript
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/RealEstatePage.spec.ts
```

### Run tests using Chromium

```bash
npx playwright test --project=chromium
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test by name

```bash
npx playwright test -g "test name"
```

---

## 📊 Test Report

The project uses Playwright's **HTML Reporter**.

After running the tests:

```bash
npx playwright show-report
```

The HTML report provides information such as:

* Passed tests
* Failed tests
* Test duration
* Error details
* Execution trace

---

## 📸 Test Data

Test images used for upload scenarios are stored in:

```text
ImageForTest/
```

Example:

```typescript
await this.uploadImage.setInputFiles(
    path.join(__dirname, '../ImageForTest/D-Condo-Bliss.png')
);
```

This allows image upload scenarios to be automated consistently without manually selecting files during test execution.

---

## 🎯 QA / Automation Concepts Demonstrated

This project demonstrates practical experience with:

* Manual Test Case → Automated Test Conversion
* Functional Testing
* End-to-End Testing
* UI Automation
* Form Validation
* Test Data Management
* Page Object Model (POM)
* Assertion
* Wait Handling
* File Upload Automation
* Authentication Handling
* Cross-Browser Testing
* HTML Test Reporting

---

## 🚀 Future Improvements

Potential improvements for this project include:

* [ ] Add more negative test scenarios
* [ ] Increase test coverage
* [ ] Improve test data management
* [ ] Add API testing
* [ ] Add environment configuration
* [ ] Improve authentication/session management
* [ ] Add CI/CD pipeline with GitHub Actions
* [ ] Add screenshots and videos for failed tests
* [ ] Add test result reporting

GitHub:
https://github.com/PiyanuchTH
