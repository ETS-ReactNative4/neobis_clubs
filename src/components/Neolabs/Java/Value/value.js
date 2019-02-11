import React, { Component } from 'react';
import achievement from './icons/achievement.png';
import deadline from './icons/deadline.png';
import document from './icons/document.png';
import id from './icons/id.png';
import meeting from './icons/meeting.png';
import monitoring from './icons/monitoring.png';
import './value.css';

class Value extends Component {
  render() {
    return (
      <div className='value'>
      	<h2 className='value_title'>Что дают онлайн курсы?</h2>
        <div className='value_divs'>
          <div className='value_div'>
            <img className='value_icon' src={monitoring}/>
            <p className='value_text'>Интерактивные уроки в режиме реального времени</p>
          </div>
          <div className='value_div'>
            <img className='value_icon' src={document}/>
            <p className='value_text'>Доступ к стримам, видеоурокам, презентациям и учебным материалам</p>
          </div>
          <div className='value_div'>
            <img className='value_icon' src={meeting}/>
            <p className='value_text'>Изучение программирования на кыргызском языке</p>
          </div>
          <div className='value_div'>
            <img className='value_icon' src={deadline}/>
            <p className='value_text'>1 000+ часов практического опыта</p>
          </div>
          <div className='value_div'>
            <img className='value_icon' src={achievement}/>
            <p className='value_text'>Лучшие из слушателей будут отобраны для прохождения стажировки в команду  амбициозных и развивающихся программистов в Neobis</p>
          </div>
          <div className='value_div'>
            <img className='value_icon' src={id}/>
            <p className='value_text'>Помощь в трудоустройстве</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Value;