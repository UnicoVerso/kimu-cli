/**
 * Test setup file for Jest
 */

// Global test setup
beforeEach(() => {
  // Reset console mocks
  jest.clearAllMocks();
});

// Mock console for testing
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  table: jest.fn(),
};
