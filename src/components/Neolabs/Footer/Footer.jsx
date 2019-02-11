import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/header-bg.jpg';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="footer-top-area">                         
            <div class="footer-social">
              <a class="facebook" href="#"><span class="fa fa-facebook"></span></a>
              <a class="twitter" href="#"><span class="fa fa-instagram"></span></a>
              <address class="single-address">
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