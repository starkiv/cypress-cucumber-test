import checkoutData from './checkout.page';

module.exports = {
    cartUrl: 'cart.html',
    elements: {
        checkoutButton: '[data-test="checkout"]',
    },
  
    checkout: function () {
        cy.get(this.elements.checkoutButton).click();
        cy.url().should('include', checkoutData.checkoutPageOne);
    },
}
