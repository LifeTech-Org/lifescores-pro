import { getDatesInMonth } from "./getDatesInMonth";

export function getNextDates(date: Date) {
  const [year, month] = [date.getFullYear(), date.getMonth()];
  // Get the last date of the month
  const _date = new Date(year, month, getDatesInMonth(date).length);
  const _dates: Date[] = [];

  // Check if the next date is Monday, this happens when the date is Sunday, If it isnt the add date to array
  let index = 1;
  while (getNextDate(_date, index).getDay() !== 1) {
    _dates.push(getNextDate(_date, index));
    index++;
  }
  return _dates;
}

function getNextDate(date: Date, index: number) {
  const _date = new Date(date);
  _date.setDate(_date.getDate() + index);
  return _date;
}
