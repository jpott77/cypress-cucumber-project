Feature: Cart

  As a user, I want to be able to add and remove items from my cart.
  Background:
    Given the user is at the Sauce Demo Store
    And a 'standard_user' user logs in

  Scenario: Add a single item to cart
    When a user adds 'Bike Light' to their cart
    Then the item 'Bike Light' should be added to the cart

  Scenario Outline: Add a single item to cart - <item>
    When a user adds '<item>' to their cart
    Then the item '<item>' should be added to the cart
    Examples:
      | item          |
      | Backpack      |
      | Bolt T-Shirt  |
      | Fleece Jacket |

  Scenario: Remove a item from cart
    When a user adds 'Bike Light' to their cart
    And a user removes 'Bike Light' from their cart
    Then the cart should be empty

  Scenario: Remove all items from cart
    When a user adds 'Bike Light' to their cart
    And a user adds 'Bolt T-Shirt' to their cart
    And a user adds 'Fleece Jacket' to their cart
    And a user removes all items from their cart
    Then the cart should be empty
