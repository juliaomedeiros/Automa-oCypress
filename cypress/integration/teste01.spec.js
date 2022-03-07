/// <reference types="cypress"/>

//const { it } = require("mocha");

require('cypress-iframe');


it('Acessando a aplicação e validando forms', ()=>{

//beforeEach(() => { //antes de executar o que ta em baixo faça isso
cy.visit('https://demoqa.com/broken');  
//})

cy.Preencherformulario('juliao1', 'juliao@yahoo.com');


//validações
cy.get('.border').should('be.visible');
cy.get('#name').contains('juliao1').should('be.visible');
cy.get('#email').contains('juliao@yahoo.com').should('be.visible');


cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
cy.get(':nth-child(2) > .custom-control-label').click()

})
// inserindo e excluindo uma linha da tabela
it('inserir e excluir dados de tabela', ()=> {


    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    cy.get('#addNewRecordButton').click()
    
    cy.get('#firstName').type('juliao');
    cy.get('#lastName').type('Medeiros');
    cy.get('#userEmail').type('juliao@gmail.com');
    cy.get('#age').type('30');
    cy.get('#salary').type('2000')
    cy.get('#department').type('QA')
    cy.get('#submit').click()
    
    //validações
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('be.visible');
    
    //excluir intens tabela
    cy.get('#delete-record-4 > svg > path').click()
    
    //conferir se nao ta mais visivel
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('be.visible');

})

it('fazendo login', () => {

    cy.visit('https://demoqa.com/register')
   //preencher dados
    cy.get('#firstname').type('juliao')
    cy.get('#lastname').type('medeiros')
    cy.get('#userName').type('juliao')
    cy.get('#password').type('123456')

    // icone captcha
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    // o captcha é um iframe e precisa de uma extensao do cypress para pegar essa informaçao
    cy.frameLoaded('[title="reCAPTCHA"][src*="google.com"]')

//ver 27:27 do video
    //cy.get('#register').click()
});



