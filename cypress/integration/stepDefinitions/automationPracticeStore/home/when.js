import { When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../pageObjects/automationPracticeStore/storeHome.page'

When('the user clicks on the {string} menu option', (menu) => {
    homePage.selectMenuOption(menu)
  });