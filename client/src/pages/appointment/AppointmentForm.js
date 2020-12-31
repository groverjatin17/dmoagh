import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomDatePicker from './Datepicker';
import axios from 'axios';
import toast from 'react-hot-toast';
import { getDay, getDate, getMonth, getTime, format } from 'date-fns';

export default function AppointmentForm() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: 'Jatin Grover',
      email: 'bla@gmail.com',
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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
          Name
          <input
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
      <div>
        <label htmlFor="email">
          Email Address
          <input
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
      <CustomDatePicker callback={(date) => setSelectedDate(date)} />
      <p> Selected Date is {selectedDate && selectedDate.toDateString()}</p>
      <div>
        <button type="submit" disabled={submitting}>
          Book Appointment
        </button>
      </div>
    </form>
  );
}
