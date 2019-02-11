import React, { Component } from 'react';
import buffer from './buffer.svg';
import icon from './icon.png';
import './hero.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
      	<div className='hero_left'>
      		<h1 className='main_text'>Онлайн курсы Neobis</h1>
      		<a className='button'>
	      		<Link className='button_container' to="registration" spy={true} smooth={true} duration={500}>
	      			<img src={icon}/>
              <p className='button_text'>запишись сейчас</p>
	      		</Link>
      		</a>
      	</div>
      	<div className='hero_right'>
      		<img src={buffer}/>
      	</div>
      </div>
    );
  }
}

export default Hero;