import { months } from "@/app/utils/data";
import {
  getDatesInMonth,
  getNextDates,
  getPreviousDates,
  getYears,
} from "@/app/utils/func";
import {
  ArrowBack,
  ArrowForward,
  NavigateNext,
  NavigateBefore,
} from "@mui/icons-material";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Calendar() {
  const query = useParams();
  // I am using two declaration for date because I need it in case I want previous or next month without actually selcteting a date yet
  const today = new Date();
  const [date, setDate] = useState(today);
  const [_date, set_Date] = useState(today);
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const [dates, setDates] = useState([
    ...getPreviousDates(_date),
    ...getDatesInMonth(_date),
    ...getNextDates(_date),
  ]);
  const [selectedDate, selectedMonth, selectedYear] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  const years = getYears();

  useEffect(() => {
    setDates([
      ...getPreviousDates(_date),
      ...getDatesInMonth(_date),
      ...getNextDates(_date),
    ]);
  }, [_date]);
  return (
    <div className="z-20 ring-1 ring-zinc-800 sm:ring-0 sm:z-0 w-full h-fit bg-zinc-900  rounded-md flex flex-col mx-4">
      <div className="flex items-center px-4 my-2">
        <button
          className="aspect-square rounded-full -ml-2 p-1 hover:bg-zinc-800 text-xs text-zinc-200"
          onClick={() =>
            set_Date(new Date(_date.getFullYear(), _date.getMonth() - 1, 1))
          }
        >
          <NavigateBefore />
        </button>
        <div className="flex-1 gap-1.5 flex justify-center text-xs font-bold text-zinc-200">
          {/* {months[_date.getMonth()] + " " + _date.getFullYear()} */}
          <select
            onChange={(e) => {
              set_Date(
                new Date(
                  _date.getFullYear(),
                  e.target.selectedIndex,
                  _date.getDate()
                )
              );
            }}
            value={months[_date.getMonth()]}
            className="bg-transparent text-zinc-200"
          >
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => {
              const year = parseInt(e.target.value);
              set_Date(new Date(year, _date.getMonth() - 1, _date.getDate()));
            }}
            value={_date.getFullYear()}
            className="bg-transparent text-zinc-200"
          >
            {years.reverse().map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button
          className="aspect-square rounded-full -mr-2 p-1 hover:bg-zinc-800 text-xs text-zinc-200"
          onClick={() =>
            set_Date(new Date(_date.getFullYear(), _date.getMonth() + 1, 1))
          }
        >
          <NavigateNext />
        </button>
      </div>
      <div className="items-center h-8 bg-zinc-800 px-4 w-full grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day} className="text-xs font-semibold text-zinc-200">
            {day}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-7 gap-1 my-2 px-4">
        {dates.map((thisDateObj) => {
          const [thisDate, thisMonth, thisYear] = [
            thisDateObj.getDate(),
            thisDateObj.getMonth(),
            thisDateObj.getFullYear(),
          ];
          const isToday =
            thisDate === today.getDate() &&
            thisMonth === today.getMonth() &&
            thisYear === today.getFullYear();
          return (
            <Link
              href={{
                query: {
                  ...query,
                  date: `${thisYear}-${thisMonth}-${thisDate}`,
                },
              }}
              key={thisDateObj.toString()}
            >
              <button
                className={
                  (_date.getMonth() === thisMonth
                    ? "text-white font-semibold "
                    : "text-zinc-400 ") +
                  (selectedDate === thisDate &&
                    selectedMonth === thisMonth &&
                    selectedYear === thisYear
                    ? "!text-white font-bold bg-blue-800 "
                    : "hover:bg-zinc-800 ") +
                  "aspect-square text-xs w-full rounded-sm"
                }
                onClick={() => {
                  setDate(thisDateObj);
                  set_Date(thisDateObj);
                }}
              >
                {thisDate}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="flex border-t border-zinc-800 py-2 px-4">
        <button
          onClick={() => {
            setDate(today);
            set_Date(today);
          }}
          className="bg-blue-800 text-white text-xs rounded-md p-2 hover:bg-blue-800/95"
        >
          Today
        </button>
      </div>
    </div>
  );
}
