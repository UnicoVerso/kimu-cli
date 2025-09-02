/**
 * Tests for version command
 */

import { handleVersionCommand } from '../../src/commands/version';
import { Logger } from '../../src/utils/logger';
import { VersionOptions } from '../../src/types/cli-types';

// Mock console methods
const mockLog = jest.fn();
const mockError = jest.fn();

jest.mock('console', () => ({
  log: mockLog,
  error: mockError,
}));

describe('version command', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handleVersionCommand', () => {
    it('should display simple version without verbose flag', async () => {
      const options: VersionOptions = { verbose: false };
      const logger = new Logger(false);

      await handleVersionCommand(options, logger);

      expect(mockLog).toHaveBeenCalledWith('kimu v1.0.0');
    });

    it('should display detailed version with verbose flag', async () => {
      const options: VersionOptions = { verbose: true };
      const logger = new Logger(true);

      await handleVersionCommand(options, logger);

      expect(mockLog).toHaveBeenCalledWith(
        expect.stringContaining('KIMU CLI Version Information')
      );
      expect(mockLog).toHaveBeenCalledWith(
        expect.stringContaining('CLI Name: kimu')
      );
      expect(mockLog).toHaveBeenCalledWith(
        expect.stringContaining('CLI Version: 1.0.0')
      );
    });
  });
});
