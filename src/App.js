import React from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import Homepage from './pages/homepage/Homepage.Main';
import ContactUs from './pages/contactUs/ContactUs.Main';
// import Card from './components/Card';

const App = () => {

  return (
    <Router>
      <Homepage path="/" />
      <ContactUs path="/contactUs" />
    </Router>
  );
};

export default App;