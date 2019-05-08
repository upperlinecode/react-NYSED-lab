import React from 'react';
import Navbar from './components/Navbar.js'
import SchoolCard from './components/SchoolCard.js'
import data from './nycSchoolEnrollmentData.js'
import './App.css';

const App = () => {
  const component = new React.Component()
  
  component.render = () => {
    return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    </div>
  )}
  
  return component
}

export default App;
