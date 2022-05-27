import { Given } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../pageObjects/automationPracticeStore/storeHome.page'

Given('the browser is at the {string} page', (pageName) => {
    switch (pageName) {
        case "Home":
            cy.visit('http://automationpractice.com/index.php')
            break;
        case pageName:
            cy.visit('http://automationpractice.com/index.php')
            homePage.selectMenuOption(pageName)
            break;
        default:
            console.log(`Invalid Page ${pageName}`);
    }
  });