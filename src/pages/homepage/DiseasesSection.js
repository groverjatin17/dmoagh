import React from 'react';
import Spine from '../../assets/spine-back.jpg';
import Disease1 from '../../assets/disease01.jpg';
import Disease2 from '../../assets/disease02.jpg';
import Disease3 from '../../assets/disease03.jpg';
import Disease4 from '../../assets/disease04.jpg';

const diseasesData = [
  {
    diseaseType: 'injuries',
    diseases: [
      {
        itemId: 0,
        itemValue: 'sportsInjury',
      },
      {
        itemId: 1,
        itemValue: 'jointPain',
      },
      {
        itemId: 2,
        itemValue: 'trauma',
      },
      {
        itemId: 3,
        itemValue: 'disorders',
      },
    ],
  },
  {
    diseaseType: 'bodyParts',
    diseases: [
      {
        itemId: 4,
        itemValue: 'osteoporosis',
      },
      {
        itemId: 5,
        itemValue: 'hip_knee',
      },
      {
        itemId: 6,
        itemValue: 'limbs',
      },
      {
        itemId: 7,
        itemValue: 'foot_ankle',
      },
    ],
  },
];
export default function DiseasesSection() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div
          className="col-span-1 bg- bg-no-repeat relative"
          style={{ backgroundImage: `url(${Spine}` }}
        >
          <div className="py-20 pl-48 pr-10 mr-5">
            <h1 className="text-4xl text-white font-serif mb-6">Conditions</h1>
            <p className="text-#b2d7ff text-base font-openSans leading-loose mb-6">
              Dr Alan Cheung specialises in all areas of Sports Injuries and
              Adult Reconstruction. He also performs Robotic Surgery, and
              manages General Adult and Paediatric Trauma, and Musculoskeletal
              Tumours.
            </p>
            <div className="grid grid-cols-2 mb-6">
              <div className="col-span-1">
                <ul className="text-#b2d7ff list-disc list-inside pl-10">
                  {diseasesData.map((item) => {
                    if (item.diseaseType === 'injuries') {
                      return item.diseases.map((disease) => (
                        <li key={disease.itemId} className="mb-2">
                          {disease.itemValue}
                        </li>
                      ));
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="text-#b2d7ff list-disc list-inside pl-10">
                  {diseasesData.map((item) => {
                    if (item.diseaseType === 'bodyParts') {
                      return item.diseases.map((disease) => (
                        <li key={disease.itemId} className="mb-2">
                          {disease.itemValue}
                        </li>
                      ));
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="border-solid border-2 rounded-3xl py-2 px-10 text-white text-lg border-blue-700 focus:outline-none transform hover:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2">
            <div
              className=" p-9.7rem bg-100% bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease1}` }}
            >
              <p className="absolute bottom-20px right-20px">
                Shoulder and Upper Limb
              </p>
            </div>
            <div
              className=" p-9.7rem bg-100% bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease2}` }}
            >
              <p className="absolute bottom-20px right-20px">Bones</p>
            </div>
            <div
              className=" p-9.7rem bg-100% bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease3}` }}
            >
              <p className="absolute bottom-20px right-20px">Sports Injury</p>
            </div>
            <div
              className=" p-9.7rem bg-100% bg-no-repeat relative"
              style={{ backgroundImage: `url(${Disease4}` }}
            >
              <p className="absolute bottom-20px right-20px">Joint Pain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
