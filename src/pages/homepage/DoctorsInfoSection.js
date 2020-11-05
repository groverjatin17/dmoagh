import React from 'react';
import Doctor1 from '../../assets/doctor1.jpg';
import Doctor2 from '../../assets/doctor2.jpg';

const doctorsList = [
  {
    doctorId: 0,
    name: 'Dr. Ishan Bhateja',
    qualification: 'M.B.B.S, M.S(General Surgery)',
    position: 'Chief Orthopaedic',
    experience: '5',
    imageURL: Doctor1,
    description:
      'Dr. Ishaan is one of the most prominent doctor in the region. He has 5 years of experience in dealing with C-Section deliveries, trauma(fracture) and joint ache related issue.He expertise has helped many get relieved from their ailments and ortho related pains.',
  },
  {
    doctorId: 1,
    name: 'Dr. Natalie Bhateja',
    qualification: 'M.B.B.S',
    position: 'Chief Orthopaedic',
    experience: '5',
    imageURL: Doctor1,
    description:
      'Dr. Natalie is one of the most prominent doctor in the region. He has 5 years of experience in dealing with C-Section deliveries, trauma(fracture) and joint ache related issue.He expertise has helped many get relieved from their ailments and ortho related pains.',
  },
];

export default function DoctorsInfoSection() {
  return (
    <div>
      {doctorsList.map((doctor) => (
        <section key={doctor.doctorId} className="text-gray-700 body-font">
          <div className="container px-5 mx-auto">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-2xl">
                      {doctor.name}
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                    <div className="text-xl capitalize font-openSans text-blue-900">
                      {doctor.position}
                    </div>
                    <div className="text-base uppercase font-openSans text-gray-500 ">
                      {doctor.qualification}
                    </div>
                    <p className="text-base text-gray-600">5+ Years</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    {doctor.description}
                  </p>
                  <a
                    className="text-indigo-500 inline-flex items-center"
                    href="#bleh"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
