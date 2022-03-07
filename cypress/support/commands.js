// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Preencherformulario', (nome, email) => { 

cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
cy.get('#userName').type(nome);
cy.get('#userEmail').type(email);
cy.get('#currentAddress').type('testanto o cypress');
cy.get('#permanentAddress').type('parec3e que ta dando certo')
cy.get('#submit').click();

 })


 import 'cypress-iframe';


 Cypress.Commands.add('FormularioIframe', (nome, sobrenome, email, endereco, universidade, profissao, genero, idade) => { 

    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id=user_name]').should('be.visible').type(nome)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id=user_lastname]').should('be.visible').type(sobrenome)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_email"]').should('be.visible').type(email)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_address"]').should('be.visible').type(endereco)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_university"]').should('be.visible').type(universidade)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_profile"]').should('be.visible').type(profissao)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_gender"]').should('be.visible').type(genero)
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[id="user_age"]').should('be.visible').type(idade)
   
    
     })