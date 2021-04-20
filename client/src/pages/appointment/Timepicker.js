import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomTimePicker({ callback }) {
  const [startDate, setStartDate] = useState(null);

  const handleColor = (time) => {
    return time.getHours() > 12 && time.getHours() < 14
      ? 'text-red-900'
      : 'text-indigo-900';
  };

  return (
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        callback(date.toLocaleTimeString());
      }}
      timeClassName={handleColor}
      placeholderText="Select Time"
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 20)}
      dateFormat="h:mm aa"
    />
  );
}
