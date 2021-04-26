import React from 'react';
import SurgeryImage from '../../assets/images/surgery.jpg';

export default function Surgery() {
  return (
    <div>
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <img className="xl:w-80% lg:w-1/3 md:w-1/2 w-90% block mx-auto mb-10 object-cover object-center rounded-2xl" alt="surgery" src={SurgeryImage} />
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  </div>
</section>
    </div>
  );
}
