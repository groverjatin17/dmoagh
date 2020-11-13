import React from 'react';
import { navigate } from '@reach/router';

export default function AppointmentMessage() {
  return (
    <div className="lg:h-24 m-5 bg-blue-800 flex flex-col p-5 lg:p-0 lg:flex-row justify-around items-center rounded-lg">
      <span className="flex text-center items-center text-white font-openSans mb-5 lg:mb-0 text-xl tracking-wider">
        {' '}
        Do you want to visit our Hospital? Book a free appointment?
      </span>
      <button
        type="button"
        className="bg-white text-xl font-semibold text-blue-700 rounded-2xl px-6 py-1 focus:outline-none transform hover:scale-90"
        onClick={() => navigate('/appointment')}
      >
        Book Appointment
      </button>
    </div>
  );
}
