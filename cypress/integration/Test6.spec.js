/// <reference types="Cypress" />

describe('My sixth Test', function () {
    it('My sixth testcase', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Does not work for external domains | Not best practise, from my personal point of view better the href attribute removal.
        cy.get("#opentab").then(function (el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})