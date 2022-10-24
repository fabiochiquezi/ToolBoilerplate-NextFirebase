describe('Structure', () => {
    it('should have all data necessary', () => {
        cy.visit('/')
        cy.url().should('to.equal', 'http://localhost:3000/home')
    })
})
