import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/header-bg.jpg';
//import $ from "jquery";

import '../style.css';
import '../preloader.css';

class Header extends React.Component {

/*onLoad() {
    var $ = require("jquery");
       $(window).load(function() { // makes sure the whole site is loaded
       $('.loader').fadeOut(); // will first fade out the loading animation
       $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
       $('#got').delay(100).style({'overflow-x':'visible'});
     })
     }*/

     render() {
       return (
        <div>
        <a className="scrollToTop" href="#"><i className="fa fa-chevron-up"></i></a>
        <header id="header">
        <div className="header-inner">
        <img src={img} alt="img"/>
        <div className="header-overlay">
        <div className="header-content">
        <h2 className="header-slide">NEOLABS
        <span>MOST CREATIVE</span>
        <span>MOST INNOVATIVE</span>
        <span>MOST SOCIAL</span>
        COURSES</h2>
        </div>
        </div>      
        </div>
        </header>
        </div>
        );
      }
    }

    export default Header;