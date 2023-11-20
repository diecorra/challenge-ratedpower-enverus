describe('Favorites Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('http://127.0.0.1:5173/planets');
    cy.get('[data-testid="starUnMarked0"]').should('exist').click();
    cy.get('[data-testid="favorites-link"]').should('exist').click();
    cy.get('[data-testid="card"]').should('exist');
  });
  it('Save/Unsave Favorite', () => {
    cy.get('[data-testid="planets-link"]').click();
    cy.get('[data-testid="starMarked0"]').click();
    cy.get('[data-testid="favorites-link"]').should('exist').click();
    cy.get('[data-testid="noFavContainer"]')
      .should('exist')
      .contains('No favorites');
  });
  it('Modal Check', () => {
    cy.get('[data-testid="openModal"]').should('exist').click();
    cy.get('[data-testid="modal"]').should('exist');
    cy.get('[data-testid="removeModalbtn"]').should('exist').click();
    cy.get('[data-testid="noFavContainer"]')
      .should('exist')
      .contains('No favorites');
  });
});
