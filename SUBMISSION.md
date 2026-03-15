# Submission – QA Automation Challenge

## Repository

https://github.com/MiliRojas/passline-challenge

---

## Stack / Tools

* **Playwright**
* **TypeScript**
* **Node.js**
* **Playwright Test Runner**
* **Page Object Model (POM)**
* **Markdown documentation**

---

## Setup & Execution

1. Install dependencies

```
npm install
```

2. Install Playwright browsers

```
npx playwright install
```

3. Run all tests

```
npx playwright test
```

4. View test report

```
npx playwright show-report
```

---

## Summary of Key Decisions

The automation framework was built using **Playwright with TypeScript** to ensure a modern, reliable, and maintainable testing approach.
I organized the project following the **Page Object Model** to keep locators and test logic separated, improving readability and scalability.
Tests were designed to validate the **main user flows**, focusing on stability and clarity rather than quantity.
Additionally, basic documentation was included to explain the testing approach and allow easy setup for reviewers.

---

## What I Prioritized

* Clear and maintainable test structure
* Readable test cases
* Stable selectors
* Simple and reproducible setup
* Basic smoke coverage for critical flows

---

## What I Would Do With More Time

* Add **CI integration (GitHub Actions)**
* Implement **test data management**
* Increase **end-to-end coverage for more user scenarios**
* Add **API testing and contract validation**
* Include **visual regression testing**

---

## Where to Review Results / Evidence

Test results can be reviewed through the **Playwright HTML report** generated after running the tests.

Run:

```
npx playwright show-report
```

This will open an interactive report with:

* test execution results
* passed / failed tests
* traces and debugging information