import React from 'react'
import Athlete from '../../assets/athlete.png';

export default function Hero() {
    return (
        <div className="w-screen h-full inline-block bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400">
        <div className="inline-block laptop:h-365px max-w-lg absolute mt-24 mb-24 laptop:ml-40">
          <h1 className="font-serif leading-tight laptop:text-6xl mobile:text-4xl mobile:w-48 mobile:pl-40 text-blue-800 text-opacity-90 mb-6">
            Practical Solutions For your Problems
          </h1>
          <h1 className="font-serif text-xl text-blue-900  mobile:float-right mobile: w-3/4">
            High quality orthopaedic sports injury & joint reconstruction clinic
          </h1>
        </div>
        <img src={Athlete} alt="athlete" className="max-w-xl float-right mr-32 laptop:mb-24" />
      </div>
    )
}
