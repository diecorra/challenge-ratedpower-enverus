describe('Planets Page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/planets');
  });
  it('NoData component', () => {
    cy.request({
      url: '/planets/?page=2s',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.detail).to.eq('Not found');
    });
  });
  it('Table component', () => {
    cy.request('/planets/?page=1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.count).greaterThan(0);
      cy.get('[data-testid="table"]').should('exist');
    });
  });

  it('NotFound component', () => {
    cy.visit('http://127.0.0.1:5173/planetsTEST');
    cy.get('[data-testid="notFound"]').should('exist');
  });

  it('Footer functions', () => {
    cy.get('[data-testid="allPrevBtn"]').should('exist').should('be.disabled');
    cy.get('[data-testid="prevBtn"]').should('exist').should('be.disabled');
    cy.get('[data-testid="nextBtn"]').should('exist').should('not.be.disabled');
    cy.get('[data-testid="allNextBtn"]')
      .should('exist')
      .should('not.be.disabled')
      .click();
    cy.get('[data-testid="allPrevBtn"]')
      .should('exist')
      .should('not.be.disabled');
    cy.get('[data-testid="prevBtn"]').should('exist').should('not.be.disabled');
    cy.get('[data-testid="nextBtn"]').should('exist').should('be.disabled');
    cy.get('[data-testid="allNextBtn"]').should('exist').should('be.disabled');
  });

  it('PlanetDetail component', () => {
    cy.get('[data-testid="row0"]').click();
    cy.get('[data-testid="planetDetail"]').should('exist');
    cy.get('[data-testid="planetDetailTitle"]').should('exist');
    cy.get('[data-testid="planetDetailBody"]').should('exist');
  });

  it('Links', () => {
    cy.get('[data-testid="row0"]').click();
    cy.url().should('match', /http:\/\/127\.0\.0\.1:5173\/planets\/[A-Za-z]+/);
  });
});
