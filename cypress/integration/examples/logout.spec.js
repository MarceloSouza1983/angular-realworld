describe('Logout', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress');
    })
	it('Logout via Perfil', () => {
        cy.contains('Settings').click();
        cy.url().should('include', '/settings');
        cy.get('.btn-outline-danger').click();
    })
})