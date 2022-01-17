import cartData from './cart.page';

module.exports = {
    highToLowOption: 'Price (high to low)',
    inventoryUrl: 'inventory.html',
    elements: {
        sortDropdown: '[data-test="product_sort_container"]',
        addToCartButton: '[data-test*="add-to-cart"]',
        cartBadge: '.shopping_cart_container',
    },

    sortByHighToLow: function () {
        cy.get(this.elements.sortDropdown).select(this.highToLowOption);
    },

    addToCartCheapestAndCostliest: function () {
        cy.get(this.elements.addToCartButton).first().click();
        cy.get(this.elements.addToCartButton).last().click();
        //cy.scrollTo('top');
    },

    openBasket: function () {
        cy.get(this.elements.cartBadge).click();
        cy.url().should('include', cartData.cartUrl);
    },
}
