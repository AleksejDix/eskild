describe('website runs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a logo', () => {
    cy.contains('Podologische Praxis')
  })

  it('main navigation', () => {
    cy.contains('Startseite').click()
    cy.get('main h1').should('contain', 'Podologische Praxis E. Sörensen')

    cy.contains('Dienstleistungen').click()
    cy.get('main h1').should('contain', 'Dienstleistungen')

    cy.contains('Blog').click()
    cy.get('main h1').should('contain', 'Blog')

    cy.contains('Terminwunsch').click()
    cy.get('main h1').should('contain', 'Terminwunsch')

    cy.contains('Standort').click()
    cy.get('main h1').should('contain', 'Standort')

    cy.contains('Zertifikate').click()
    cy.get('main h1').should('contain', 'Zertifikate')

    cy.contains('Workshops').click()
    cy.get('main h1').should('contain', 'Workshops')
  })

  it('footer navigation', () => {
    cy.get('[data-cy="footernav"]')
      .contains('Impressum')
      .click()
    cy.get('main h1').should('contain', 'Impressum')

    cy.get('[data-cy="footernav"]')
      .contains('Datenschutz')
      .click()
    cy.get('main h1').should('contain', 'Datenschutz')
  })

  it('hidden page', () => {
    cy.visit('/thank-you')
    cy.get('main h1').should('contain', 'Danke')
  })
})
