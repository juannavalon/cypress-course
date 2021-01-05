/// <reference types="Cypress" />

describe('My third Test', function () {
    it('My third testcase', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($elementDropdown, index, $list) => {
            if ($elementDropdown.text() === "India") {
                cy.wrap($elementDropdown).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

        cy.get('.radioButton[value="radio1"]').check().should('be.checked')
        cy.get('.radioButton[value="radio3"]').check().should('be.checked')
    })
})