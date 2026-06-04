# Playwright Assessment - Aman Ansary

## Framework Setup
- **Tool:** Playwright with JavaScript
- **Language:** JavaScript (Node.js)
- **Test Runner:** Playwright Test
- **Reporter:** HTML (built-in)

## Project Structure
assessment/
  pages/
    LoginPage.js      - Login page locators and actions
    CartPage.js       - Cart page locators and actions
  tests/
    ui.spec.js        - UI automation tests
    api.spec.js       - API automation tests
  fixtures/
    fixtures.js       - Test fixtures for setup/teardown
  README.md           - Project summary

## Test Cases
### UI Tests
- Login with valid credentials
- Add product to cart
- Verify cart badge count
- Navigate to cart page

### API Tests
- Login API - POST request (201)
- Get Products API - GET request (200)

## How to Run
# Install dependencies
npm install
npx playwright install

# Run all tests
npx playwright test

# Run with headed browser
npx playwright test --headed

# View HTML report
npx playwright show-report

## Test Results
- Total Tests: 3
- Passed: 3
- Failed: 0
- 
<img width="953" height="971" alt="Screenshot 2026-06-04 123945" src="https://github.com/user-attachments/assets/b8ff7539-6800-45e6-8a6a-642a4cfa65c7" />

- 
