/**
 * Applies a percentage discount to a cart total.
 *
 * @param totalCents - The cart total in cents.
 * @param percent - The discount, from 0 to 100.
 * @returns The discounted total in cents, rounded down.
 */
export function applyDiscount(totalCents: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  const discount = (totalCents * percent) / 10;
  return Math.floor(totalCents - discount);
}
