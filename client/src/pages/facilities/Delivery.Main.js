import React from 'react';
import DeliveryImage from '../../assets/images/delivery.jpg';

export default function Delivery() {
  return (
    <div>
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <img className="xl:w-80% lg:w-1/3 md:w-1/2 w-90% block mx-auto mb-10 object-cover object-center rounded-2xl" alt="laboratory" src={DeliveryImage} />
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">OB-GYN Doctor</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Keeping in view that women in general prefer to be treated by an obstetrician-gynecologist (OB-GYN).
          We provide all the necessary services that include delivery, Cesarean surgery and child care services.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
