import React from 'react';
import { Router } from '@reach/router';
import Homepage from './pages/homepage/Homepage.Main';
import ContactUs from './pages/contactUs/ContactUs.Main';
import BookAppointment from './pages/appointment/BookAppointment.Main';
import Facilities from './pages/facilities/Facilities.Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// import Card from './components/Card';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Homepage path="/" />
        <ContactUs path="/contactUs" />
        <BookAppointment path="/appointment" />
        <Facilities path="/facilities" />
      </Router>
      <Footer />
    </>
  );
};

export default App;
