import { Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../pageObjects/automationPracticeStore/storeHome.page'

Then('products related to {string} are shown', (search) => {
    cy.get(homePage.productListTitle)
    .each((product)=>{
        cy
        .wrap(product)
        .should('contain.text',search)
    })
});

Then('an error message is shown', () => {
    cy.get(homePage.alert).should('contain.text','No results')
});