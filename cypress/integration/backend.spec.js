///<reference types="cypress" />

//Cenários de Teste
// 1º Inserir Conta
// 2º Alterar Conta
// 3º Inserir Conta Repetida
// 4º Inserir Movimentação de Receita
// 5º Inserir Movimentação de Despesa
// 6º Inserir Movimentação para ser removida
// 7º Cálculo de Saldo
// 8º Remover Movimentação

describe('Automation of Test Rest API (Automação de Teste Rest API', () => {
  before(() => {
    cy.login('this.data.login', 'this.data.senha')

  })

  beforeEach(() => {

  })

  it('Should insert account (Deve inserir uma conta)', () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body: {
        email: "tiagogomes",
        redirecionar: false,
        senha: "czz2212"
      }
    }).its('body.token').should('not.be.empty')

    //.then(res => console.log(res)) Usei para analisar a resposta
  })

  it('Should edit account (Deve editar uma conta)', () => {

  })

  it('Should create an account with same name (Deve criar uma conta com o mesmo nome)', () => {

  })

  it('Should create a transaction (Deve criar uma transação)', () => {

  })

  it('Should create a expence transaction  (Deve criar outra transação de depesa)', () => {

  })

  it('Transaction to be deleted  (Transação para ser deletada)', () => {

  })

  it('Should get balance (Deve pegar o saldo)', () => {

  })

  it('Should remove a transaction (Deve remover uma transação)', () => {

  })

})