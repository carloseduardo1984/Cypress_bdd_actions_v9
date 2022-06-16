/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given("acesso o site da ultima", () => {
    loginPage.abraGiven();
})

When("acesse um curso", () => {
    loginPage.abraThen();
    cy.log('TESTE then!!!')

})

Then("devo visualizar a pagina do curso", () => {
    loginPage.abraWhen();
    cy.log('TESTE FINALIZADO!!!')
})