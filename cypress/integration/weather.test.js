describe('Weather Forecast', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })

  it('display header', () => {
    cy.get("[data-cy=header]").should('contain', 'The Weather App')
  })

  it('default table length', () => {
    cy.get('table tr').should('have.length', 1)
  })

  it('form invalid check', () => {
    cy.get("[data-cy=city]").clear()
    cy.get("[data-cy=form]").click()

    cy.get("[data-cy=form]:invalid").should('exist');
  })

  it('can submit a valid form', () => {
    cy.intercept('GET', '/data/2.5/*').as(
      'searchWeatherForCity'
    ) 
    cy.get("[data-cy=city]").type("London")
    cy.get("[data-cy=form]").submit()

    cy.wait('@searchWeatherForCity')

    cy.get('table tr').should('have.length', 2)
  })
})
