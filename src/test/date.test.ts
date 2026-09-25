import { describe, it, expect } from 'vitest';
import { getFullYearsSince } from '@/lib/date';

describe('getFullYearsSince', () => {
  it('returns 0 for the same day the start date occurred', () => {
    const start = new Date(2020, 0, 1);
    const now = new Date(2020, 0, 1);

    expect(getFullYearsSince(start, now)).toBe(0);
  });

  it('returns full elapsed years once the anniversary month and day are reached', () => {
    const start = new Date(2009, 10, 1);
    const now = new Date(2024, 10, 1);

    expect(getFullYearsSince(start, now)).toBe(15);
  });

  it('does not count the current year until the anniversary day is reached', () => {
    const start = new Date(2009, 10, 15);
    const now = new Date(2024, 10, 10);

    expect(getFullYearsSince(start, now)).toBe(14);
  });

  it('counts the current year once the anniversary day has passed', () => {
    const start = new Date(2009, 10, 15);
    const now = new Date(2024, 10, 20);

    expect(getFullYearsSince(start, now)).toBe(15);
  });

  it('does not count the current year before the anniversary month arrives', () => {
    const start = new Date(2019, 4, 1);
    const now = new Date(2024, 2, 1);

    expect(getFullYearsSince(start, now)).toBe(4);
  });

  it('defaults to the current date when now is not provided', () => {
    const start = new Date(2000, 0, 1);

    expect(getFullYearsSince(start)).toBeGreaterThan(20);
  });
});
