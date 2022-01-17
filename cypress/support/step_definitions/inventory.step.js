import { When } from 'cypress-cucumber-preprocessor/steps';
import inventoryData from '../../integration/page-objects/inventory.page';

When('I sort the items by High to Low', () => {
    inventoryData.sortByHighToLow();
});
  
When('I select cheapest and costliest items to basket', () => {
    inventoryData.addToCartCheapestAndCostliest();
});
  
When('I open my basket', () => {
    inventoryData.openBasket();
});
