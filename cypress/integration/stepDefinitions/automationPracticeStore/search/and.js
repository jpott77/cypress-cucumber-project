import { And } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../pageObjects/automationPracticeStore/storeHome.page'

And('no products are listed', () => {
    cy.get(homePage.productListTitle).should('not.exist')
});