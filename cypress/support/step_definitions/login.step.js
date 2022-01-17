import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import loginData from '../../integration/page-objects/login.page';
import testData from '../../fixtures/test-data.json';
import inventoryData from '../../integration/page-objects/inventory.page';

Given('I am on Swag Labs login page', () => {
    loginData.goToLoginPage();
});

When('I am logged as {string}', (userName) => {
    loginData.attemptToLogin(testData.userNames[userName], testData.password);
});
