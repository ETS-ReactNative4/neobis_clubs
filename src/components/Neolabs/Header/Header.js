import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/header-bg.jpg';
import '../style.css';
import '../preloader.css';

class Header extends React.Component {
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