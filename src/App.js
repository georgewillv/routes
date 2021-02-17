import React, { Component } from 'react';
import LocationForm from './components/LocationForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <h2>Please Enter a country code from this list: </h2>
      <p> CAN, USA, MEX, BLZ, GTM, SLZ, HND, NIC, CRI, PAN</p>
      <p> Case is irrelevant</p>
      <LocationForm/>
    </div>
  );
}

export default App
