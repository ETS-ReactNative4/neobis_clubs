import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Hero from './Hero/hero';
import Description from './Description/description';
import Courses from './Courses/courses';
import Steps from './Steps/steps';
import Value from './Value/value';
import Register from './Register/register';
import './Java.css';

class Java extends Component {
  render() {
    return (
      <div className="Java">
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

export default withRouter(Java);
