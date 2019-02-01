import React, { Component } from 'react';
import Hero from './Hero/hero';
import Description from './Description/description';
import Courses from './Courses/courses';
import Steps from './Steps/steps';
import Value from './Value/value';
import Register from './Register/register';

import './App.css';

class Neolabs extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Description/>
        <Courses/>
        <Steps/>
        <Value/>
        <Register/>
      </div>
    );
  }
}

export default Neolabs;
