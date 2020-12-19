import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomDatePicker from './Datepicker';

export default function Login() {
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
        try {
            //do this cll api
        } catch (error) {
          console.log('Error logging in', error);
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
              required: 'Please Enter your Mobile Number',
            })}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
        <CustomDatePicker callback={(date)=> setSelectedDate(date)} />
        <p> Selected Date is {selectedDate && selectedDate.toDateString()}</p>
      <div>
        <button type="submit" disabled={submitting}>
          Login
        </button>
      </div>
    </form>
  );
}
