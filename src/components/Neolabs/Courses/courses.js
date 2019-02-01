import React, { Component } from 'react';
import './courses.css';
import java from './java.png';
import android from './android.png';
import oop from './networking.png';

class Courses extends Component {
  render() {
    return (
      <div className='courses'>
      	<div className='courses_title_div'><p className='courses_title'>Courses</p></div>
      	<div className='courses_cards'>
      		<div className='courses_card' id='basics'>
      			<div className='courses_card_title'>
      				<p>Java <br/>Basics</p>
      				<img src={java}/>
      			</div>
      			<h3 className='courses_card_duration'>1 месяц</h3>
      			<p className='courses_card_text'>
      				Базовые и необходимые знания для 
вашего дальнейшнего погружения в увлекательный мир программирования JAVA
      			</p>
      		</div>
      		<div className='courses_card' id='oop'>
      			<div className='courses_card_title'>
      				<p>Java <br/>OOP</p>
      				<img src={oop}/>
      			</div>
      			<h3 className='courses_card_duration'>2 месяца</h3>
      			<p className='courses_card_text'>
      				Базовые и необходимые знания для 
вашего дальнейшнего погружения в увлекательный мир программирования JAVA
      			</p>
      		</div>
      		<div className='courses_card' id='android'>
      			<div className='courses_card_title'>
      				<p>&nbsp;<br/>Android</p>
      				<img src={android}/>
      			</div>
      			<h3 className='courses_card_duration'>3 месяца</h3>
      			<p className='courses_card_text'>
      				Базовые и необходимые знания для 
вашего дальнейшнего погружения в увлекательный мир программирования JAVA
      			</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Courses;