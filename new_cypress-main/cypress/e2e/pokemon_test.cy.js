describe('Кейс покупки аватара', function () {

    it('Позитивный кейс', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('www.pavel2000@yandex.ru');
         cy.get('#password').type('Pok1204pok**');
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); 
         cy.get('.available > button').first().click({ force: true });   
         cy.get('.credit').type('4620869113632996');                     
         cy.get('.k_input_ccv').type('125');                            
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('NAME');                          
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');     

})
})