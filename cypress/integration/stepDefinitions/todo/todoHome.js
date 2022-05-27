import { Given,When,Then } from '@badeball/cypress-cucumber-preprocessor'

import todoHomePage from '../../pageObjects/todoHome/todoHome.page'

Given('a web browser is at the todo home page', () => {
    cy.visit('https://example.cypress.io/todo')
  });

When('the user goes to the todo home page', () => {
cy.visit('https://example.cypress.io/todo')
});

When('the user adds a new todo : {string}', (newItem) => {
  cy.get(todoHomePage.enterTodo).type(`${newItem}{enter}`)
});

Then('there should be {int} default items', (numOfDefaultTodo) => {
    cy.get(todoHomePage.todoList).should('have.length', numOfDefaultTodo)
});

Then('the new {string} is shown in the todo list', (newItem) => {
cy.get(todoHomePage.todoList)
    .last()
    .should('have.text', newItem)
});
  