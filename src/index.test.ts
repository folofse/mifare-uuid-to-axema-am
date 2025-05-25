import { describe, expect, it } from 'vitest';
import { deriveAM } from '.';

describe('verify that the code is returning the correct result', () => {
  it('should return the correct result', () => {
    const uuid = 'ab:cd:ef:00';
    const result = deriveAM(uuid);

    expect(result).toBe('abcdef00');
  });
});
