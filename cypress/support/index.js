// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import "cypress-cucumber-attach-screenshots-to-failed-steps";

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

afterEach(() => {
  const testState = window.testState;
  const stepResult =
    testState.runTests[testState.currentScenario.name][testState.currentStep];
  if (stepResult?.status !== "failed") {
    cy.screenshot(
      `${testState.feature.name} -- ${testState.currentScenario.name} (passed)`
    );
  }
});
