import React, { Component } from 'react';
import buffer from './buffer.svg';
import icon from './icon.png';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
      	<div className='hero_left'>
      		<h1 className='main_text'>Онлайн курсы Neobis</h1>
      		<a className='button'>
	      		<div className='button_container'>
	      			<img src={icon}/>
              <p className='button_text'>запишись сейчас</p>
	      		</div>
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