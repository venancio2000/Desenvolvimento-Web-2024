/// <reference types="cypress"/>

describe('Shoud test at a functional level', () => {
  before(() => {
    cy.visit('https://barrigareact.wcaquino.me')
    cy.get('[data-test="email"]').type('jbrunogvenancio@gmail.com')
      cy.get('[data-test="passwd"]').type('Br#91801207', )
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Bem vindo')
  })  
  
  it('should create an account ', () => {
      
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('conta de teste')
    cy.get('.btn').click()
    cy.get('.toast-success > .toast-message').should('contain', 'Conta inserida com sucesso')
      
    })

    it('Should update an account', () => {

      [contains.("., 'conta de teste')]/..//i[@class='far fa-edit']".click()
    })

  })