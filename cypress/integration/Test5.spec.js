/// <reference types="Cypress" />

describe('My four Test', function () {
    it('My four testcase', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains('Top').click()         //cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')
    })
})