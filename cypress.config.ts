import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://swapi.dev/api',
    env: {
      requestMode: true,
    },
  },
});
