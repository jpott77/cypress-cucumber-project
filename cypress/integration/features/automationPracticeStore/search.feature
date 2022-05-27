Feature: Dress Search

  As a user, I want to be able to search for dresses by type so that I can purchase one

  Background:
    Given the browser is at the "Home" page

  Scenario: Search for a type that does not exist
    When the user searches for 'floral'
    Then an error message is shown
    And no products are listed

  Scenario: Search for a type that exists
    When the user searches for 'Printed'
    Then products related to 'Printed' are shown