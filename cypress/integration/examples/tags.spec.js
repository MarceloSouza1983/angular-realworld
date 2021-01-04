describe('Conduit Post', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress');
    })
	it('Adicionar Tags', () => {
        cy.contains('testecypress').click();
        cy.location('pathname').should('contains', '/profile');
        cy.get('.article-preview').get('h1').first().click();
        cy.contains('Edit Article').click();
        cy.get('[placeholder="Enter tags"]').type('corinthians{enter}');
        cy.get('[placeholder="Enter tags"]').type('brasil{enter}');
        cy.contains('Publish Article').click();
        cy.get('.tag-list').contains('corinthians');
    })

})