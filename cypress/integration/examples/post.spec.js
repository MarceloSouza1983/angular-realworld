describe('Conduit Post', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress');
    })
	it('Novo', () => {
        const title = 'Vai Corinthians!!!';
        cy.contains('New Article').click();
        cy.location('pathname').should('equal', '/editor');
        cy.get('[formcontrolname=title]').type(title);
        cy.get('[formcontrolname=description]').type('Corinthians bicampeão mundial');
        cy.get('[formcontrolname=body]').type('O Corinthians é o único clube brasileiro bicampeão mundial pela FIFA. Os títulos foram conquistados nos anos de 2000 e 2012.\nO time campeão em 2000 contava com jogadores consagrados e com passagem pela Seleção Brasileira como Luizão, Edílson, Vampeta, Marcelinho Carioca e o goleiro Dida.\nO time que conquistou o bicampeonato mundial tinha uma defesa extremamente sólida contando com jogadores experientes como Cássio, Alessandro, Chicão e Paulo André. No meio campo era comandado pelo Paulinho e o ataque contava com Guerrero atacante da seleção peruana, que marcou o gol do segundo título mundial do Corinthians.');
        cy.contains('Publish Article').click();
        cy.get('h1').contains(title);
    })

    it('Editar', () => {
        const body = 'O Corinthians é o único clube brasileiro bicampeão mundial pela FIFA. Os títulos foram conquistados nos anos de 2000 e 2012.\n\nO time campeão em 2000 contava com jogadores consagrados e com passagem pela Seleção Brasileira como Luizão, Edílson, Vampeta, Marcelinho Carioca e o goleiro Dida.\n\nO time que conquistou o bicampeonato mundial tinha uma defesa extremamente sólida contando com jogadores experientes como Cássio, Alessandro, Chicão e Paulo André. No meio campo era comandado pelo Paulinho e o ataque contava com Guerrero atacante da seleção peruana, que marcou o gol do segundo título mundial do Corinthians.\n\nVai Corinthians!!!';
        cy.contains('testecypress').click();
        cy.location('pathname').should('contains', '/profile');
        cy.get('.article-preview').get('h1').first().click();
        cy.contains('Edit Article').click();
        cy.get('[formcontrolname=body]').clear();
        cy.get('[formcontrolname=body]').type(body);
        cy.contains('Publish Article').click();
    })

})