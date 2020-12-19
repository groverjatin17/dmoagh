import React from 'react';
import LaboratoryImage from '../../assets/images/laboratory.jpg';

export default function Laboratory() {
  return (
    <div>
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <img className="xl:w-80% lg:w-1/3 md:w-1/2 w-90% block mx-auto mb-10 object-cover object-center rounded" alt="laboratory" src={LaboratoryImage} />
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Diagnosis</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Right Diagnosis and early recognition of the disease helps not on in Curing the disease before it causes damage but also helps in preventing underlying condition whose symptoms are yet to be visible.
          Our Laboratory provides wide array of testing services
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
