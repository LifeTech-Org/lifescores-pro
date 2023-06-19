export function getDatesInMonth(date: Date) {
  const [year, month] = [date.getFullYear(), date.getMonth()];
  const _date = new Date(year, month, 1);
  const _dates = [];
  // const oneDay = 1000 * 60 * 60 * 24;
  // const daysInMonth = Math.floor(
  //   (new Date(year, month + 1, 1).getTime() - _date.getTime()) / oneDay
  // );
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < daysInMonth; i++) {
    _dates.push(getNextDate(_date, i));
  }
  return _dates;
}

function getNextDate(date: Date, index: number) {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + index);
  return _date;
}
