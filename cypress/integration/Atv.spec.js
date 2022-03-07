/// <reference types="cypress"/>


beforeEach(() => { 
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')  
})

it('criar usuario de iframe', () => {

    cy.get('a[class="collapsible-header waves-teal"]').should('be.visible').eq(1).click();
    cy.get('a[href*="/mudancadefoco/iframe"]').should('be.visible').click();   
    
    //iframe
    cy.frameLoaded('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]')
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('a[class="collapsible-header "]').should('be.visible').click()
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').contains('Criar Usuários').should('be.visible').click({force:true})
    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('a[class="collapsible-header "]').should('be.visible').click({force:true})

    //Form Iframe
    cy.FormularioIframe('juliao', 'medeiros', 'juliao@gmail.com', 'rua sem saida', 'univsoft', 'QA', 'masculino', '30');

    cy.iframe('[id="id_do_iframe"][src*="https://automacaocombatista.herokuapp.com/"]').find('input[name="commit"][type="submit"]').should('be.visible').click()
    
    

    

});