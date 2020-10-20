const { Machine } = require('xstate')
const { createModel } = require('@xstate/test')
const { appointmentMachine } = require('../../useflow/appointment.js')

const testModel = createModel(appointmentMachine).withEvents({
  NAVIGATE: cy => {
    cy.contains('Terminwunsch').click()
  },
  FILLOUT: cy => {
    cy.get('[name="name"]').type('Max Muster')
    cy.get('[name="email"]').type('max@muster.com')
    cy.get('[name="tel"]').type('1')
    cy.get('[name="text"]').type('Hello, World')
    cy.get('[name="protection"]').check()
  },
  SEND: cy => {
    cy.get('[type="submit"]').click()
  }
})

describe('appointment app', () => {
  const testPlans = testModel.getShortestPathPlans()

  testPlans.forEach((plan, i) => {
    describe(plan.description, () => {
      plan.paths.forEach((path, i) => {
        it(path.description, () => {
          return cy.visit('/').then(() => {
            return path.test(cy)
          })
        })
      })
    })
  })

  describe('coverage', () => {
    it('should pass', () => {
      testModel.testCoverage()
    })
  })
})
