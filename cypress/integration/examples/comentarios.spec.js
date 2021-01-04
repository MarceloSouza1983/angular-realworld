describe('Conduit Comentários', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress');
    })
	it('Escrever Comentário', () => {
        const texto = 'Esse é o melhor time do Brasil!';
        cy.contains('Global Feed').click();
        cy.get('.preview-link').first().click();
        cy.get('.form-control').type(texto);
        cy.get('.btn-primary').click();
        cy.contains(texto);
    })

})