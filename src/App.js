import React, { Component } from 'react';
import LocationForm from './components/LocationForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "AppHeader">
        <h2>Please Enter a country code from this list: </h2>
        <p> CAN, USA, MEX, BLZ, GTM, SLZ, HND, NIC, CRI, PAN </p>
        <p> Case is irrelevant </p>
      </div>
      <div classname="Spacer">
        <h1></h1>
        <LocationForm/>
      </div>
    </div>
  );
}

export default App
