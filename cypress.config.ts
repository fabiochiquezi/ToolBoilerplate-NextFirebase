import admin from 'firebase-admin'
import { defineConfig } from 'cypress'
import { plugin as cypressFirebasePlugin } from 'cypress-firebase'

// You should put here some ID already configured in Firebase Auth,
// to automatizated the process of login in test with the plugin cypress-firebase
// For more information: https://www.npmjs.com/package/cypress-firebase
export const myID = ''

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            cypressFirebasePlugin(on, config, admin)
        },
        supportFile: 'cypress/support/e2e.ts',
        baseUrl: 'http://localhost:3000/',
        viewportHeight: 1080,
        viewportWidth: 1920,
        env: {
            TEST_UID: myID
        }
    }
})
