import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import checkoutData from '../../integration/page-objects/checkout.page';
import testData from '../../fixtures/test-data.json';

When('I go to checkout', () => {
    checkoutData.goToCheckout();
});

Then('I enter details and finish the purchase', () => {
    checkoutData.checkoutForm(testData.firstName, testData.lastName, testData.postCode);
    checkoutData.finishCheckout();
});
