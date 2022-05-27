Feature: Authentication

  As a user, I want to be able to log in to the Sauce Demo Store

  Background:
    Given the user is at the Sauce Demo Store

  Scenario: Login with valid credentials
    When a 'standard_user' user logs in
    Then the inventory page is displayed
    And the inventory list is loaded

  Scenario: Login with a locked out user
    When a 'locked_out_user' user logs in
    Then an error message 'Sorry, this user has been locked out' is shown

  Scenario: Login with a missing username
    When a user logs in without entering a 'username'
    Then an error message 'Username is required' is shown

 Scenario: Login with a missing password
    When a user logs in without entering a 'password'
    Then an error message 'Password is required' is shown

 Scenario: Login with an unregistered username
    When a 'unregistered' user logs in
    Then an error message 'Username and password do not match' is shown
