module.exports = {
    checkoutPageOne: 'checkout-step-one.html',
    checkoutPageTwo: 'checkout-step-two.html',
    checkoutComplete: 'checkout-complete.html',
    elements: {
        checkoutButton: '[data-test="checkout"]',
        firstNameField: '[data-test="firstName"]',
        lastNameField: '[data-test="lastName"]',
        postCodeField: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        finishButton: '[data-test="finish"]',
    },

    goToCheckout: function () {
        cy.get(this.elements.checkoutButton).click();
        cy.url().should('include', this.checkoutPageOne);
    },

    checkoutForm: function (firstName, lastName, postCode) {
        cy.get(this.elements.firstNameField).type(firstName);
        cy.get(this.elements.lastNameField).type(lastName);
        cy.get(this.elements.postCodeField).type(postCode);
        cy.get(this.elements.continueButton).click();
        cy.url().should('include', this.checkoutPageTwo);
    },
  
    finishCheckout: function () {
        cy.get(this.elements.finishButton).click();
        cy.url().should('include', this.checkoutComplete);
    },
}
