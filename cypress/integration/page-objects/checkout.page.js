module.exports = {
    checkoutPageOne: 'checkout-step-one.html',
    checkoutPageTwo: 'checkout-step-two.html',
    checkoutComplete: 'checkout-complete.html',
    elements: {
        firstNameField: '[data-test="firstName"]',
        lastNameField: '[data-test="lastName"]',
        postCodeField: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        finishButton: '[data-test="finish"]',
    },

    /**
     * Filling checkout form on the first checkout page 
     * by using params
     * @param firstName - user's first name
     * @param lastName - user's last name
     * @param postCode - user home's postal code
     * And assert that user on the second checkout page
     */
    checkoutForm: function (firstName, lastName, postCode) {
        cy.get(this.elements.firstNameField).type(firstName);
        cy.get(this.elements.lastNameField).type(lastName);
        cy.get(this.elements.postCodeField).type(postCode);
        cy.get(this.elements.continueButton).click();
        cy.url().should('include', this.checkoutPageTwo);
    },
  
    /**
     * Click on the finish button and assert 
     * that user is on the complete page
     */
    finishCheckout: function () {
        cy.get(this.elements.finishButton).click();
        cy.url().should('include', this.checkoutComplete);
    },
}
