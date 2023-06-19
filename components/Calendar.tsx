import { months } from "@/public/utils/data";
import {
  getDatesInMonth,
  getNextDates,
  getPreviousDates,
} from "@/public/utils/func";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Calendar() {
  const router = useRouter();
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
          className="aspect-square rounded-full p-1 hover:bg-zinc-800 text-xs text-zinc-200"
          onClick={() =>
            set_Date(new Date(_date.getFullYear(), _date.getMonth() - 1, 1))
          }
        >
          <ArrowBack />
        </button>
        <div className="flex-1 flex justify-center text-xs font-bold text-zinc-200">
          {months[_date.getMonth()] + " " + _date.getFullYear()}
        </div>
        <button
          className="aspect-square rounded-full p-1 hover:bg-zinc-800 text-xs text-zinc-200"
          onClick={() =>
            set_Date(new Date(_date.getFullYear(), _date.getMonth() + 1, 1))
          }
        >
          <ArrowForward />
        </button>
      </div>
      <div className=" flex items-center h-8 bg-zinc-800 px-4 w-full grid grid-cols-7 gap-1">
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
                  ...router.query,
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
