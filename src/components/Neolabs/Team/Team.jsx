import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/call-to-action-bg.png';


class Team extends React.Component {
render() {
return (
<div>
  <section id="call-to-action">
    <img src={bg} alt="img"/>
    <div class="call-to-overlay">
      <div class="container">
        <div class="call-to-content wow fadeInUp">
          <h2>
            Запрограммируй своё будущее!
            <br/>
            Начни сегодня!
          </h2>
        </div>
      </div>
    </div> 
  </section>
  <section id="team">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="team-area">
            <div class="title-area">
              <h2 class="tittle">Наша команда</h2>
              <span class="tittle-line"></span>
              <p>
                Наши преподаватели - самые амбициозные и креативные ребята, готовые с удовольствием делятся своими знаниями.
                У каждого Вы найдете индивидуальный подход к обучению программирования, где 80% курсов - необходимая практика.
              </p>
            </div>
            <div class="team-content">
              <ul class="team-grid">
                <li>
                  <div class="team-item team-img-1 wow fadeInUp">
                    <div class="team-info">
                      <p> Привет, я являюсь Backend разработчиком в команде Необис. Я люблю программировать и обучать людей</p>
                    </div>
                  </div>
                  <div class="team-address">
                    <p>Филип Шевченко</p>
                    <span>Back-end, Pythone Developer</span>
                  </div>
                </li>
                <li>
                  <div class="team-item team-img-2 wow fadeInUp">
                    <div class="team-info">
                      <p> Я верю, что каждый может программировать, нужна лишь мотивация и дисциплина</p>
                    </div>
                  </div>
                  <div class="team-address">
                    <p>Давран Хасанов</p>
                    <span>Android, Java Разработчик</span>                  
                  </div>
                </li>
                <li>
                  <div class="team-item team-img-3 wow fadeInUp">
                    <div class="team-info">
                      <p> Если практиковаться каждый день, то через 3 месяца вы уже сможете разработать Андроид приложение</p>
                    </div>
                  </div>
                  <div class="team-address">
                    <p>Алиер Акрамов</p>
                    <span>Android, Java Разработчик</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
);
}
}

export default Team;