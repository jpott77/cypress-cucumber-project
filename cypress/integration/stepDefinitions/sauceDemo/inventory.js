import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import inventoryPage from '../../pageObjects/sauceDemoStore/inventory.page'

Given('the inventory list is loaded', () => {
    cy.get(inventoryPage.inventoryList).should('exist')
});

Then('the inventory page is displayed', () => {
    cy.url().should('include', 'inventory')
});
