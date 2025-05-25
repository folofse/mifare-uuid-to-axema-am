import { describe, expect, it } from 'vitest';
import { deriveAMFromHex, padAM } from '.';

describe('verify that the code is returning the correct result', () => {
  it('should return the correct result', () => {
    const uuid = 'ab:cd:ef:00';
    const amResult = deriveAMFromHex(uuid);
    const paddedResult = padAM(amResult);

    expect(amResult).toBe('2882400000');
    expect(paddedResult).toBe('00000002882400000');
  });
});
