import checkoutData from './checkout.page';

module.exports = {
    cartUrl: 'cart.html',
    elements: {
        checkoutButton: '[data-test="checkout"]',
    },
  
    /**
     * Click on heckout button and assert 
     * that user is on the first checkout page
     */
    checkout: function () {
        cy.get(this.elements.checkoutButton).click();
        cy.url().should('include', checkoutData.checkoutPageOne);
    },
}
