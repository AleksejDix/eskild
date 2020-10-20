import { Machine } from 'xstate'

export const appointmentStates = {
  id: 'appointment',
  initial: 'homepage',
  states: {
    homepage: {
      on: {
        NAVIGATE: 'appointment'
      },
      meta: {
        test: cy => {
          cy.get('main h1').should('contain', 'Podologische Praxis E. Sörensen')
        }
      }
    },
    appointment: {
      initial: 'empty',
      states: {
        empty: {
          on: {
            FILLOUT: 'filledout'
          },
          meta: {
            test: cy => {
              cy.get('[name="name"]').should('have.value', '')
              cy.get('[name="email"]').should('have.value', '')
              cy.get('[name="tel"]').should('have.value', '')
              cy.get('[name="text"]').should('have.value', '')
              cy.get('[name="protection"]').should('not.be.checked')
            }
          }
        },
        filledout: {
          on: {
            SEND: {
              target: '#thanks'
            }
          },
          meta: {
            test: cy => {
              cy.get('[name="name"]').should('have.value', 'Max Muster')
              cy.get('[name="email"]').should('have.value', 'max@muster.com')
              cy.get('[name="tel"]').should('have.value', '1')
              cy.get('[name="text"]').should('have.value', 'Hello, World')
              cy.get('[name="protection"]').should('be.checked')
            }
          }
        }
      },
      meta: {
        test: cy => {
          cy.get('main h1').should('contain', 'Terminwunsch')
        }
      }
    },
    thanks: {
      id: 'thanks',
      type: 'final',
      meta: {
        test: cy => {
          cy.get('main h1').should('contain', 'Danke')
        }
      }
    }
  }
}

export const appointmentMachine = Machine(appointmentStates)
