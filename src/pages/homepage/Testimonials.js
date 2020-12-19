import React from 'react';
import TestimonialsConstants from './consts';

export default function Testimonials() {
  const renderTestimonial = (test) => {
    const {name, image, description, position } = test;

    return (
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={image}
        />
        <p className="leading-relaxed">
          {description}
        </p>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          {name}
        </h2>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  
    )
  }
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {TestimonialsConstants.map(item => renderTestimonial(item))}
          </div>
        </div>
      </section>
      ;
    </div>
  );
}