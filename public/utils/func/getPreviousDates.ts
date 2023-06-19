export function getPreviousDates(date: Date) {
  const [year, month] = [date.getFullYear(), date.getMonth()];
  // Get the date of the first day of the month
  const _date = new Date(year, month, 1);
  const _dates: Date[] = [];

  // The check if getDay() - 1 === -1 is to check for Sundays which is a bit different logic
  let index = _date.getDay() - 1 === -1 ? 6 : _date.getDay() - 1;
  // Check if the previous day is Sunday, this only happens when the day is Monday i.e when index === 0
  while (index !== 0) {
    _dates.push(getPreviousDate(_date, index));
    index--;
  }
  return _dates;
}

function getPreviousDate(date: Date, index: number) {
  const _date = new Date(date);
  _date.setDate(_date.getDate() - index);
  return _date;
}
