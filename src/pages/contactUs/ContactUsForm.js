import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
        console.log("query", query);
        console.log("email", email);
        console.log("name", name);
        setSubmitting(true);
        try {
            //do this cll api
        } catch (error) {
          console.log('Error sending mail', error);
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
        <label htmlFor="email">
          Query
          <input
            type="text"
            name="email"
            id="email"
            ref={register({
              required: 'Please Enter your Query here',
            })}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Send Message
        </button>
      </div>
    </form>
  );
}
