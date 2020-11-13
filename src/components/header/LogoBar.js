import React from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/icons/hospital-logo.svg';
import HospitalName from '../../assets/icons/hospital-name.svg';
import HospitalNamesm from '../../assets/icons/hospital-name-mobile.svg';
import PhoneLogo from '../../assets/icons/call-icon.svg';

export default function LogoBar() {
  return (
    <div className="lg:px-16 flex-col lg:flex-row flex justify-between">
      <div className=" lg:hidden grid grid-cols-3 mt-4">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="object-contain sm:w-24 sm:ml-3 col-span-1 ml-3"
          />
        </Link>
        <div className="flex flex-col justify-center ml-16 col-span-2">
          <div className="flex border-b-2">
            <img src={PhoneLogo} alt="phone-icon" className="h-10 " />
            <p className="text-blue-900 text-xl">9872480059 </p>
          </div>
          <span className="text-gray-600">Speak with us today</span>
        </div>
      </div>
      <div className="flex my-3">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="object-contain hidden lg:inline-block pt-5"
          />
        </Link>
        <img
          src={HospitalName}
          alt="hospital name"
          className="h-28 hidden lg:inline-block w-full"
        />
        <img
          src={HospitalNamesm}
          alt="hospital name sm"
          className="lg:hidden w-full mx-2"
        />
      </div>
      <div className="lg:flex hidden flex-col justify-center pr-10">
        <div className="flex border-b-2">
          <img src={PhoneLogo} alt="phone-icon" className="h-10 " />
          <p className="text-blue-900 text-xl">9872480059 </p>
        </div>
        <span className="text-gray-600">Speak with us today</span>
      </div>
    </div>
  );
}
