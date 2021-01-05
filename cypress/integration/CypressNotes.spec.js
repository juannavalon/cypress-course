/// <reference types="Cypress" />

describe('Cypress examples', function () {
    it('Cypress examples', function () {

        //Visit URL
        cy.visit("https://www.amazon.es")

        //Wait element in (ms)
        cy.wait(2000)

        // Get elements
        cy.get('.search-keyword') //by class
        cy.get('.product:visible') //by class but only visible elements
        cy.get('#search-keyword') //by id
        cy.contains('PROCEED TO CHECKOUT') //by text
        cy.get('@productLocator').find('.product') //find an element in a specific parent

        //Save identicals elements as one variable with aliasing
        cy.get('.products').as('productLocator')

        //From multiples elements with same locator select one by specific name
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textProduct = $el.find('h4.product-name').text()
            if (textproduct.includes('Headphone')) {
                cy.wrap($el).find('button').click()
            }
        })

        //Log 
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function () {
            console.log('Hello console!') //<Log in console after this click step
        })

        const logo = cy.get('.brand').then(function (logoElement) {

            cy.log(logoElement.text()) // Log in cypress console after this get step
        })

        //Interactions
        cy.get('.search-keyword').type('hello') //type text
        cy.get('.button').click() //click
        cy.get('#checkBoxOption1').check() //checkbox
        cy.get('input[type="checkbox"]').check(['option2', 'option3']) //checkbox by element value
        cy.get('#checkBoxOption1').uncheck() //uncheckbox
        cy.get('select').select('option2').should('have.value', 'option2') //static dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($elementDropdown, index, $list) => { //dynamic dropdown
            if ($elementDropdown.text() === "India") {
                cy.wrap($elementDropdown).click()
            }
        })
        cy.get('.radioButton[value="radio1"]').check().should('be.checked') //radio buttons
        cy.on('window:alert', String => { //browser window alert
            expect(String).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', String => { //browser window confirm alert
            expect(String).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Assertions 
        cy.get('.product').should('have.length', 5)
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
    })
})