import React from 'react';
import { Router, Link } from '@reach/router';
import Homepage from './pages/homepage/Homepage.Main';
import ContactUs from './pages/contactUs/ContactUs.Main';
// import Card from './components/Card';

const App = () => {
  return (
    // <div
    //   className="container mx-auto mobile:bg-red-500 
    // text-white tablet:bg-green-500 tablet:text-blue-500 
    // laptop:bg-blue-500 laptop:text-pink-500 desktop:bg-yellow-500"
    // >
    //   safsadf sadf
    //   <button
    //     type="button"
    //     className="bg-red-400 text-white font-bold px-5 py-2 rounded"
    //   >
    //     Click Me
    //   </button>
    //   <button type="button" className="jatin">
    //     Jatin class applied
    //   </button>
    //   {/* <Card>Hello, World!</Card> */}
    // </div>

    <Router>
      <Homepage path="/" />
      <ContactUs path="/contactUs" />
    </Router>
  );
};

export default App;
