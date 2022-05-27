Feature: Checkout

  As a user, I want to be able to checkout with the items in my cart.

  Background:
    Given the user is at the Sauce Demo Store
    And a 'standard_user' user logs in

  Scenario: Checkout with a single item
    When a user adds 'Bike Light' to their cart
    Then the user is able to checkout with the 'Bike Light' item in their cart
