import React from 'react';
import Logo1 from '../../assets/home-icon-img-01.png';
import Logo2 from '../../assets/home-icon-img-02.png';
import Logo3 from '../../assets/home-icon-img-03.png';
import Logo4 from '../../assets/home-icon-img-04.png';

const cardData = [
  {
    cardId: '0',
    cardLogoLink: Logo1,
    cardLogoAlt: 'family',
    value: 'understandExpats',
  },
  {
    cardId: '0',
    cardLogoLink: Logo2,
    cardLogoAlt: 'patient',
    value: 'fullTreatment',
  },
  {
    cardId: '0',
    cardLogoLink: Logo3,
    cardLogoAlt: 'doctor',
    value: 'dedicatedDoctor',
  },
  {
    cardId: '0',
    cardLogoLink: Logo4,
    cardLogoAlt: 'services',
    value: 'personalService',
  },
];

export default function Introduction() {
  return (
    <div>
      <div className="laptop:relative laptop:h-32">
        <div className="flex justify-center items-center w-full laptop:absolute laptop:bottom-50px">
          <div className="laptop:w-3/4 mobile:min-w-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900">
            <div className="grid grid-cols-4 mobile:grid-cols-1">
              {cardData.map((item) => (
                <div
                  key={item.cardId}
                  className="col-span-1 laptop:border-r-2 p-12"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img src={item.cardLogoLink} alt={item.cardLogoAlt} />
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center mb-20">
        <div className="laptop:w-3/4">
          <h1 className="text-4xl text-indigo-900 font-serif mb-4">
            International Orthopaedic Clinic
          </h1>
          <p className="font-openSans leading-normal mb-5">
            The International Orthopaedic Clinic was established to provide
            expertise in Orthopaedic surgery to the local and expatriate
            community in Singapore and the Asia-Pacific Region. From his
            experiences training and working in England, Australia and
            Singapore, Dr Cheung believes that communication and empathy is
            vital for patients no matter what their background. Dr Cheung enjoys
            understanding the patient’s needs, providing realistic expectations
            and practical solutions for their problems.
          </p>
          <a href="#blah" className="text-lg font-bold">READ MORE ></a>
        </div>
      </div>
    </div>
  );
}
