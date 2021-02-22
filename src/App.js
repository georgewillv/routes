import React, { Component } from 'react';
import LocationForm from './components/LocationForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <title> Customs Documentation Finder </title>
      <div className= "Greeting">
        <h1> Welcome to C.H. Robinson's Custom Documentation Finder </h1>
        <p> This application will generate the countries a truck driver carrier will need customs documenation <br></br>
        when delivering a shipment in North America
        </p>
      </div>
      <div className= "AppHeader">
        <h2>Please Select a country code from the menu </h2>
      </div>
      <div className="Spacer">
        <h1></h1>
        <LocationForm/>
      </div>
    </div>
  );
}

export default App
