import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker({ callback }) {
  const [startDate, setStartDate] = useState(null);

  const handleColor = (time) => {
    return time.getHours() > 12 && time.getHours() < 14
      ? 'text-red-900'
      : 'text-indigo-900';
  };

  const excludeDates = (value) => {
    const listOfExcludedDates = [];
    Array.from(
      { length: value },
      (x, i) => i && listOfExcludedDates.push(subDays(new Date(), i)),
    );
    return listOfExcludedDates;
  };

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        callback(date);
      }}
      timeClassName={handleColor}
      placeholderText="Select Date"
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 20)}
      excludeDates={excludeDates(30)}
    />
  );
}
