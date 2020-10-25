import React from 'react';
import Logo from '../../assets/hospital-logo.svg';
import HospitalName from '../../assets/hospital-name.svg';
import HospitalNameMobile from '../../assets/hospital-name-mobile.svg';
import PhoneLogo from '../../assets/call-icon.svg';

export default function LogoBar() {
  return (
    <div className="laptop:px-16 mobile:flex-col flex justify-between">
      <div className=" laptop:hidden grid grid-cols-3 mt-4">
        <img
          src={Logo}
          alt="logo"
          className="object-contain mobile:w-24 mobile:ml-3 col-span-1"
        />
        <div className="flex flex-col justify-center ml-16 col-span-2">
          <div className="flex border-b-2">
            <img src={PhoneLogo} alt="phone-icon" className="h-10 " />
            <p className="text-blue-900 text-xl">9872480059 </p>
          </div>
          <span className="text-gray-600">Speak with us today</span>
        </div>
      </div>
      <div className="flex mobile:my-3">
        <img src={Logo} alt="logo" className="object-contain mobile:hidden" />
        <img
          src={HospitalName}
          alt="hospital name"
          className="h-28 mobile:hidden w-full"
        />
        <img
          src={HospitalNameMobile}
          alt="hospital name mobile"
          className="laptop:hidden mobile:w-full mobile: mx-2"
        />
      </div>
      <div className="flex flex-col justify-center pr-10 mobile:hidden">
        <div className="flex border-b-2">
          <img src={PhoneLogo} alt="phone-icon" className="h-10 " />
          <p className="text-blue-900 text-xl">9872480059 </p>
        </div>
        <span className="text-gray-600">Speak with us today</span>
      </div>
    </div>
  );
}
