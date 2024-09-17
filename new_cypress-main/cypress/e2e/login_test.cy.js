describe('Кейс авторизации', function () {

    it('Позитивный кейс', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
     it('Забыли пароль кейс', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('krutoyqa@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
    it('Неправильный пароль кейс', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
 }) 
 it('Неправильный логин кейс', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
}) 
it('Логин без @ кейс', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
}) 
it('Приведение к строчным буквам кейс', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.com');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешн');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
}) 
})
