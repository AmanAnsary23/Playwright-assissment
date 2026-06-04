const { test: base } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  }
});

module.exports = { test };