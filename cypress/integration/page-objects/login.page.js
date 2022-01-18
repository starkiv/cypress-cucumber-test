import inventoryData from './inventory.page';

module.exports = {
    loginPageTitle: 'Swag Labs',
    elements: {
        userNameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
    },

    /**
     * Visit login page and assert that tittle is correct
     */
    goToLoginPage: function () {
        cy.visit('/');
        cy.title().should('eq', this.loginPageTitle);
    },

    /**
     * Attempt to loging by using params:
     * @param userName 
     * @param password 
     * and assert that user is on the inventory page 
     */
    attemptToLogin: function (userName, password) {
        cy.get(this.elements.userNameField).type(userName);
        cy.get(this.elements.passwordField).type(password);
        cy.get(this.elements.loginButton).click();
        cy.url().should('include', inventoryData.inventoryUrl);
    },
}
