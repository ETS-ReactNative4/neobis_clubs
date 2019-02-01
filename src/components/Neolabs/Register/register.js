import React, { Component } from 'react';
import clock from './clock.png';
import card from './card.png';
import './register.css';

class Register extends Component {
  render() {
    return (
      <div className='register'>
        <div className='register_form'>
          <h2>Регистрация</h2>
          <input type='text' placeholder='Ваше имя...'/>
          <input type='phone' placeholder='Телефон'/>
          <input type='email' placeholder='Email'/>
        </div>
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