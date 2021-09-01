/// <reference types="cypress" />

describe('Nav menu', () => {
  it('Should make login and redirect to dashboard', () => {
    cy.visit('/');
    cy.get('#email').type('felip.3lima@hotmail.com');
    cy.get('#password').type('felipevieira');
    cy.get('.chakra-button').click();

    cy.location('pathname').should('equal', '/dashboard');
  });

  it('Should can navigate between dashboard and users page list', () => {
    cy.visit('/dashboard');

    cy.get('[data-cy=users]').click();
    cy.location('pathname').should('equal', '/users');

    cy.get('[data-cy=create-user]').click();

    cy.location('pathname').should('equal', '/users/create');

    cy.get('#name').type('Felipe Vieira');
    cy.get('#email').type('felip.3lima@hotmail.com');
    cy.get('#password').type('felipevieira');
    cy.get('#password_confirmation').type('felipevieira');

    cy.get('[data-cy=cancel]').click();
    cy.location('pathname').should('equal', '/users');
  });
});

export {};
