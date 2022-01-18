import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import checkoutData from '../../integration/page-objects/checkout.page';
import cartData from '../../integration/page-objects/cart.page'
import testData from '../../fixtures/test-data.json';

When('I go to checkout', () => {
    cartData.checkout();
});

Then('I enter details and finish the purchase', () => {
    checkoutData.checkoutForm(testData.firstName, testData.lastName, testData.postCode);
    checkoutData.finishCheckout();
});
