import { When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../pageObjects/automationPracticeStore/storeHome.page'

When('the user searches for {string}', (search) => {
    cy.get(homePage.searchBox).type(search)
    cy.get(homePage.searchBoxButton).click()
  });