import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/header-bg.jpg';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-top-area">                         
            <div className="footer-social">
              <a className="facebook" href="#"><span className="fa fa-facebook"></span></a>
              <a className="twitter" href="#"><span className="fa fa-instagram"></span></a>
              <address className="single-address">
                <h4>NeoLabs</h4>
                <p>Почта: neobiskg@gmail.com</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
      );
  }
}

export default Footer;