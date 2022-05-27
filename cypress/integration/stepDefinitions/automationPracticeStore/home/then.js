import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('the title of the page should be {string}', (pageTitle) => {
    cy.title().should('eq', pageTitle)
  });