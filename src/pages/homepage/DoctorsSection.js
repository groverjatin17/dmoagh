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
  },
  {
    doctorId: 1,
    name: 'Dr. Natalie Bhateja',
    qualification: 'M.B.B.S',
    position: 'Chief Orthopaedic',
    experience: '5',
    imageURL: Doctor1,
  },
];

function renderDoctorCard(doctorsList) {}

export default function DoctorsSection() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 px-12 my-10">
        <div className="col-span-1 flex items-center shadow-2xl">
          <img src={Doctor1} alt="doctor" />
          <div className="m-4">
            <h1 className="text-2xl uppercase font-serif text-blue-900">
              {' '}
              Dr. Ishaan bhateja
            </h1>
            <div className="">
              <div className="text-xl capitalize font-openSans inline-block text-blue-900">
                Chief Orthopaedic
              </div>
              <div className="text-base uppercase font-openSans text-gray-500 inline-block pl-2">
                (M.B.B.S, M.D Surgery)
              </div>
            </div>
            <p className="font-openSans mt-4">
              Dr. Ishaan is one of the most prominent doctor in the region. He
              has 5 years of experience in dealing with C-Section deliveries,
              trauma(fracture) and joint ache related issue.He expertise has
              helped many get relieved from their ailments and ortho related
              pains.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center shadow-2xl">
          <img
            src={Doctor2}
            alt="doctor"
            style={{ width: '200px', height: '200px' }}
          />
          <div className="m-4">
            <h1 className="text-2xl uppercase font-serif text-blue-900">
              {' '}
              Dr. Ishaan bhateja
            </h1>
            <div className="">
              <div className="text-xl capitalize font-openSans inline-block text-blue-900">
                Chief Orthopaedic
              </div>
              <div className="text-base uppercase font-openSans text-gray-500 inline-block pl-2">
                (M.B.B.S, M.D Surgery)
              </div>
            </div>
            <p className="font-openSans mt-4">
              Dr. Ishaan is one of the most prominent doctor in the region. He
              has 5 years of experience in dealing with C-Section deliveries,
              trauma(fracture) and joint ache related issue.He expertise has
              helped many get relieved from their ailments and ortho related
              pains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
