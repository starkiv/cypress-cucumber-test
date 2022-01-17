Feature: Login and make a purchase on Swag Labs

    Scenario: User navigates saucedemo page and complete purchasing items
        Given I am on Swag Labs login page
        When I am logged as "standard"
        And I sort the items by High to Low
        When I select cheapest and costliest items to basket
        And I open my basket
        When I go to checkout
        Then I enter details and finish the purchase