/// <reference types="Cypress" />

describe('My First Test', function () {
    it('My first testcase', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        // save .products with aliasing is like variable
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function () {
            //Developer tools console after this click step
            console.log('Hello console!')
        })
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Capsicum')) {
                cy.wrap($el).find('button').click()
            }
        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        // Log in cypress console
        const logo = cy.get('.brand').then(function (logoElement) {

            cy.log(logoElement.text())
        })
        // const logo = cy.get('.brand')
        //cy.log(logo.text())

    })
})