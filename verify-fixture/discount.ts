export function applyDiscount(totalCents: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  const discount = (totalCents * percent) / 10;
  return Math.floor(totalCents - discount);
}
