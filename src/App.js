import React from 'react';
import { Router } from '@reach/router';
import Homepage from './pages/homepage/Homepage.Main';
import ContactUs from './pages/contactUs/ContactUs.Main';
import BookAppointment from './pages/appointment/BookAppointment.Main';
import Facilities from './pages/facilities/Facilities.Main';
import Conditions from './pages/conditions/Conditions.Main';
import OurGallery from './pages/gallery/OurGallery.Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Homepage path="/" />
        <ContactUs path="/contactUs" />
        <BookAppointment path="/appointment" />
        <Facilities path="/facilities" />
        <Conditions path="/conditions" />
        <OurGallery path="/gallery" />

      </Router>
      <Footer />
    </>
  );
};

export default App;
