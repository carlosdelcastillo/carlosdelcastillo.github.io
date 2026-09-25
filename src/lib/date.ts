export function getFullYearsSince(start: Date, now: Date = new Date()): number {
  let years = now.getFullYear() - start.getFullYear();
  const isBeforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

  if (isBeforeAnniversary) {
    years -= 1;
  }

  return years;
}
