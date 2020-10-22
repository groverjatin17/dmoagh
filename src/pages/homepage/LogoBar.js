import React from 'react';
import Logo from '../../assets/hospital-logo.svg';
import HospitalName from '../../assets/hospital-name.svg';
import PhoneLogo from '../../assets/call-icon.svg';

export default function LogoBar() {
  return (
    <div className="px-16 flex justify-between">
      <div className="flex">
        <img src={Logo} alt="logo" className="object-contain" />
        <img src={HospitalName} alt="hospital name" />
      </div>
      <div className="flex flex-col justify-center pr-10">
        <div className="flex border-b-2">
          <img src={PhoneLogo} alt="phone-icon" className="h-10 " />
          <p className="text-blue-900 text-xl">9872480059 </p>
        </div>
        <span className="text-gray-600">Speak with us today</span>
      </div>
    </div>
  );
}
