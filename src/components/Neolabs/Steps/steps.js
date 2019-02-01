import React, { Component } from 'react';
import android from './android_phone.svg';
import './steps.css';

class Steps extends Component {
  render() {
    return (
      <div className='steps'>
      	<h2 className='title'>Как проходит обучение?</h2>
   		  <div className='steps_sections' style={{backgroundImage: "url(" + android + ")"}}>
	      	<div className='steps_left'>
            <div className='step_div'>
              <h2 className='step_number'>Шаг 1.</h2>
              <p className='step_text'>План обучения составленный NeoLabs, авторская программа</p>    
            </div>
            <div className='step_div'>
              <h2 className='step_number'>Шаг 3.</h2>
              <p className='step_text'>Выполнение заданий, решение задач по темам и теориям, 80% практики</p>    
            </div>
	      	</div>
	      	<div className='steps_right'>
            <div className='step_div'>
              <h2 className='step_number'>Шаг 2.</h2>
              <p className='step_text'>Видеоуроки и живые трансляции</p>    
            </div>
            <div className='step_div'>
              <h2 className='step_number'>Шаг 4.</h2>
              <p className='step_text'>Проверка знаний при переходе на следующий уровень обучения</p>    
            </div>
	      	</div>
      	</div>
        <div className='step_div_bottom'>
              <h2 className='step_number'>Шаг 5.</h2>
              <p className='step_text'>Сертификат, подтверждающий ваши знания
Бонусы: Стажировка в команде крутых амбициозных разработчиков и программистов Neobis Clubs
Помощь с трудоустройством на рынке ИТ.</p>    
            </div>
      </div>
    );
  }
}

export default Steps;
