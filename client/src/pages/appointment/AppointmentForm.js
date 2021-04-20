import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomDatePicker from './Datepicker';
import CustomTimePicker from './Timepicker';
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

export default function AppointmentForm() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: 'Jatin Grover',
      email: 'bla@gmail.com',
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        const { name, email } = formData;
        setSubmitting(true);
        if (selectedDate) {
          const weekday = format(selectedDate, 'EEEE');
          const date = format(selectedDate, 'do');
          const month = format(selectedDate, 'MMMM');
          const time = format(selectedDate, 'hh:mm a');
          const dateString = `${time} on ${date} ${month} (${weekday})`;
          try {
            //call api
            toast.promise(
              axios
                .post('http://localhost:8080/api/sendMail', {
                  name,
                  email,
                  message: dateString,
                })
                .then((response) => console.log(response))
                .then(() => {
                  setSubmitting(false);
                })
                .catch((error) => {
                  console.error('Error sending mail ', error);
                }),
              {
                loading: 'Checking for slot...',
                success: 'Appointment Confirmed 😇',
                error: 'No Slot, Try helpline!!!',
              },
            );
          } catch (error) {
            console.log('Error logging in', error);
          }
        }
        setSubmitting(false);
      })}
    >
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="name">
          Name:
          <input
            className="ml-2"
            type="text"
            name="name"
            id="name"
            ref={register({
              required: 'Please enter your Name',
            })}
          />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="email">
          Email:
          <input
            className="ml-2"
            type="text"
            name="email"
            id="email"
            ref={register({
              required: 'Please Enter your Email Address',
            })}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <span>Date: </span>
        <CustomDatePicker callback={(date) => setSelectedDate(date)} />
      </div>
      <div>
        <span>Time: </span>
        <CustomTimePicker callback={(date) => setSelectedTime(date)} />
      </div>
      {selectedDate && selectedTime && (
        <p>
          {' '}
          Confirm appointment on {selectedDate.toDateString()} at {selectedTime}
        </p>
      )}
      <div>
        <button
          className="text-xl font-semibold text-blue-700 rounded-2xl border-2 border-blue-600
          px-4 py-1 focus:outline-none transform hover:scale-90"
          type="submit"
          disabled={submitting}
        >
          Book It!
        </button>
      </div>
    </form>
  );
}
