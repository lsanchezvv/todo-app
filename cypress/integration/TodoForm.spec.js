describe('TodoForm', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:3000')
    cy.focused()
      .should('have.class', 'new-todo')
  })
})
