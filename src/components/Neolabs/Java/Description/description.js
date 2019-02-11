import React, { Component } from 'react';
import coding from './coding.jpg';
import './description.css';

class Description extends Component {
  render() {
    return (
      <div className='description'>
      	<div className='description_left'><img className='description_img' src={coding}/></div>
        <div className='description_right'>
          <h2 className='description_title'>Стань мастером Java и развивай ИТ в регионах вместе с нами!</h2>
          <p className='description_subtitle'>Почему Java?</p>
          <p className='description_text'>
            Java - является самым популярным языком программирования в мире. Пройдя 6-месячный онлайн курс вы сможете
            освоить профессию Android-разработчика и стать одним из самых востребованных программистов на рынке IT, а мы поможем вам трудоустроиться.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;