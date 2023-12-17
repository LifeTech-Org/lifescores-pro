export function getYears() {
  const startYear = 2020;
  const endYear = new Date().getFullYear();

  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return years;
}
