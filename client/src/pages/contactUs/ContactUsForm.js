import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios');

export default function ContactUsForm() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: 'Jatin Grover',
      email: 'bla@gmail.com',
      query: 'This is my query sirji',
    },
  });

  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(async (formData) => {
        const { name, email, query } = formData;
        setSubmitting(true);
        try {
          //do this cll api
          axios
            .post('http://localhost:8080/api/sendMail', {
              name,
              email,
              message: query,
            })
            .then((response) => console.log(response))
            .then(() => {
              setSubmitting(false);
            })
            .catch((error) => console.error('Error sending mail ', error));
        } catch (error) {
          console.error('Error sending mail', error);
        }
        setSubmitting(false);
      })}
    >
      <div className="">
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
      <div>
        <label htmlFor="query">
          Query
          <input
            type="text"
            name="query"
            id="query"
            ref={register({
              required: 'Please Enter your Query here',
            })}
          />
        </label>
        {errors.query && <p>{errors.query.message}</p>}
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Send Message
        </button>
      </div>
    </form>
  );
}
