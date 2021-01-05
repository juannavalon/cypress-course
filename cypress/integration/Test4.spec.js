/// <reference types="Cypress" />

describe('My four Test', function () {
    it('My four testcase', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //alerts

        // cy.get('#alertbtn').click()
        // cy.get('[value="Confirm"]').click()

        // cy.on('window:alert', String => {
        //     expect(String).to.equal('Hello , share this practice page and share your knowledge')
        // })

        // cy.on('window:confirm', String => {
        //     expect(String).to.equal('Hello , Are you sure you want to confirm?')
        // })

        // Remove attr to open the link in the actual TAB | Best way for external domains
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')

        cy.go('back')

    })
})