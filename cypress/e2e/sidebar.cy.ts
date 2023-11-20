import { BLACK_LIGHT, WHITE } from 'src/styles/theme';

describe('Sidebar Navigation', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });
  it('Existing components', () => {
    cy.get('[data-testid="sidebar"]').should('exist');
    cy.get('[data-testid="sidebar-title"]')
      .should('exist')
      .contains('PlanetsApp');
    cy.get('[data-testid="planets-link"]').should('exist').contains('Planets');
    cy.get('[data-testid="favorites-link"]')
      .should('exist')
      .contains('Favorites');
    cy.get('[data-testid="changetheme-button"]')
      .should('exist')
      .contains('LIGHT' || 'DARK');
  });
  it('Links', () => {
    cy.get('[data-testid="planets-link"]').click();
    cy.url().should('eq', 'http://127.0.0.1:5173/planets');
    cy.get('[data-testid="favorites-link"]').click();
    cy.url().should('eq', 'http://127.0.0.1:5173/favorites');
  });
  it('Theme', () => {
    cy.clearLocalStorage();
    const themeType = localStorage.getItem('theme');
    expect(themeType).contain('light');
    cy.get('[data-testid="planetsPage"]')
      .should('have.css', 'background-color')
      .and('eq', WHITE);
    cy.get('[data-testid="changetheme-button"]').click();
    cy.get('[data-testid="planetsPage"]')
      .should('have.css', 'background-color')
      .and('eq', BLACK_LIGHT);
  });
});
