import React, { Component } from 'react';
import clock from './clock.png';
import card from './card.png';
import './register.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Register extends Component {
  render() {
    return (
      <div className='register'>
        <Element id="registration">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSettdyCKW7BifSYqPkRSkgf9pAmPuCNX3sDPzFuhOKvg2j9Vw/viewform?embedded=true" width="640" height="2468" frameborder="0" marginheight="0" marginwidth="0">Загрузка...</iframe>
        </Element>
        <div className='register_description'>
          <div className='register_description_div'>
            <img src={clock}/>
            <div className='register_description_title'>
              <h2>Расписание</h2>
              <p>Среда 18:30-21:00</p>
              <p>Суббота 18:30-21:00</p>
            </div>
            
          </div>
          <div className='register_description_div'>
            <img src={card}/>
            <div className='register_description_title'>
              <h2>Стоимость обучения</h2>
              <p>Java Basics - 3500 сом</p>
              <p>Java OOP - 7000 сом</p>
              <p>Android - 10500 сом</p>
              <p>18 000 сомов за полный курс (6 месяцев)</p>
              <p></p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Register;