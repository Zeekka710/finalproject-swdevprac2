"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";

export default function ServiceDateBook({
  onDateChange,
  onServiceChange,
}: {
  onDateChange: Function;
  onServiceChange: Function;
}) {
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [serviceMinute, setserviceMinute] = useState("60");

  return (
    <div
      className="bg-slate-100 rounded-lg space-y-4
        w-fit px-10 py-5 flex flex-col justify-center"
    >
    <div className="text-lg font-semibold text-gray-700 mt-4">
        Date of Booking
    </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={bookDate}
          onChange={(value) => {
            setBookDate(value);
            onDateChange(value);
          }}
        />
      </LocalizationProvider>

      <div className="text-lg font-semibold text-gray-700 mt-4">
        Duration of Service (in Minutes)
      </div>

      <Select
        variant="standard"
        name="serviceminutes"
        id="serviceminutes"
        value={serviceMinute}
        onChange={(e) => {
          setserviceMinute(e.target.value);
          onServiceChange(e.target.value);
        }}
        className="h-[2em] w-[200px]"
      >
        <MenuItem value="60">60</MenuItem>
        <MenuItem value="90">90</MenuItem>
        <MenuItem value="120">120</MenuItem>
      </Select>
    </div>
  );
}
