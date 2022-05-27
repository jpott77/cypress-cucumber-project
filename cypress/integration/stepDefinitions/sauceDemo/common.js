import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import authPage from '../../pageObjects/sauceDemoStore/authentication.page'

Given('the user is at the Sauce Demo Store', () => {
    cy.visit('https://www.saucedemo.com/')
});

When('a {string} user logs in', (userType) => {
    authPage.login(userType, 'secret_sauce')
});

When('a user logs in without entering a {string}', (missing) => {
    switch (missing) {
        case 'username':
            authPage.login('{backspace}', 'secret_sauce')
            break;
        case 'password':
            authPage.login('testing', '{backspace}')
            break;
        default:
            console.log(`Missing a field`);
    }
});

Then('an error message {string} is shown', (error) => {
    cy.get(authPage.error).should('contain.text', error)
});
