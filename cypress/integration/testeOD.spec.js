/// <reference types="cypress"/>

beforeEach(() => { 
    cy.visit('https://remoteadmin-test.certfy.tech/AssistanceQueueXpo_ListView/')  
})

it.only('Acessando o Onb Presencial', ()=>{

//login no Admin OD
cy.get('input[id*="dviUserName_Edit_I"][type="text"]').type('juliao.admin@vsoft.com.br')
cy.get('input[id*="l35_xaf_dviPassword_Edit_I"][type="password"]').type('123456');
cy.get('li[title="Fazer Log In"][id="Logon_PopupActions_Menu_DXI0_"]').click();

//validações
cy.get('li[title="Fazer Log In"]').should('be.visible');

})

it('Acessando menu', ()=>{
cy.get('#name').contains('juliao').should('be.visible');

cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
cy.get(':nth-child(2) > .custom-control-label').click()

//adicionar intens tabela
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


