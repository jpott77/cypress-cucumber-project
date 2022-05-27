Feature: Example to-do app

  # Default display
  Scenario: Todo default display
    When the user goes to the todo home page
    Then there should be 2 default items

  Scenario Outline: Adding new todo :<itemToDo>
    Given a web browser is at the todo home page
    When the user adds a new todo : '<itemToDo>'
    Then the new '<itemToDo>' is shown in the todo list

    Examples:
    |itemToDo                 |
    |do 2 loads of laundry    |
    |go to the supermarket    |
    |prep meals for the week  |
    |go to the beach          |
