import inventoryData from './inventory.page';

module.exports = {
    loginPageTitle: 'Swag Labs',
    elements: {
        userNameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
    },

    goToLoginPage: function () {
        cy.visit('/');
        cy.title().should('eq', this.loginPageTitle);
    },

    attemptToLogin: function (userName, password) {
        cy.get(this.elements.userNameField).type(userName);
        cy.get(this.elements.passwordField).type(password);
        cy.get(this.elements.loginButton).click();
        cy.url().should('include', inventoryData.inventoryUrl);
    },
}
