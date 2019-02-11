import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import java from '../assets/images/about-img.jpg';
import basic from '../assets/images/about-img2.jpg';

class About extends React.Component {
  render() {
    return (
      <section id="about">
      <div className="container">
      <div className="row">
      <div className="col-md-12">

      <div className="welcome-area">
      <div className="title-area">
      <h2 className="tittle">Курсы программирования <span>Neolabs</span></h2>
      <span className="tittle-line"></span>
      <p>
      Кыргызстанцы, пора двигаться в ногу со временем!!! Мы хотим, чтобы каждый человек в Кыргызстане имел понятие о том, что из себя представляет мир информационных технологий и программирования. Для этого мы развиваем крутой проект NeoLabs - образовательные курсы программирования для всех Кыргыстанцев с нуля.

      </p>
      </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <div className="about-area">
      <div className="row">
      <div className="col-md-5 col-sm-6 col-xs-12">
      <div className="about-left wow fadeInLeft">
      <img src={java} alt="img"/>

      </div>
      </div>
      <div className="col-md-7 col-sm-6 col-xs-12">
      <div className="about-right wow fadeInRight">
      <div className="title-area">
      <h2 className="tittle">Онлайн <span> Java </span> курсы по программированию <span>для регионов</span></h2>
      <span className="tittle-line"></span>
      <p>
      Кыргызстанцы, пора двигаться в ногу со временем! Neobis стремится развивать сферу информационных технологий по всему Кыргызстану, особенно в регионах! Мы уверены, что из нашей молодежи вырастут отличные программисты, передовые специалисты и знатоки своего дела! Зная что в регионах не хватает возможности для развития в этом направлении, мы запустили специальные онлайн курсы программирования JAVA и Android разработки на русском и кыргызском языке.  Для этого вам нет необходимости приезжать и посещать занятия. Вы, именно вы, можете развиваться, даже не выходя из дома. Для этого вам достаточно лишь иметь хороший интернет, ноутбук и большое желание добиться успехов в будущем!
      </p>
      <div className="about-btn-area">
      <Link to="/java" className="button button-default" data-text="ПОДРОБНЕЕ"><span>ПОДРОБНЕЕ</span></Link>
      </div>                    
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <div className="about-area">
      <div className="row">
      <div className="col-md-7 col-sm-6 col-xs-12">
      <div className="about-right wow fadeInLeft">
      <div className="title-area">
      <h2 className="tittle">Базовые курсы программирования<span> с нуля </span></h2>
      <span className="tittle-line"></span>
      <p>
      Кыргызстанцы, пора двигаться в ногу со временем!!! Мы хотим, чтобы каждый человек в Кыргызстане имел понятие о том, что из себя представляет мир информационных технологий и программирования. Для этого мы открыли специальный профориентабельный одномесячный курс 💥. Мы вас не только научим основам программирования, но и покажем мастер класс по таким топовым специальностям как: 
      - Мобильная разработка под Android
      - Мобильная разработка под iOS (iPhone)
      - Разработка Сайтов
      - Разработка Игр
      - Разработка баз данных и серверной части
      - UX/UI дизайн мобильных приложений и сайтов
      - Управление IT проектами 
      </p>
      <div className="about-btn-area">
      <a href="#" className="button button-default" data-text="ПОДРОБНЕЕ"><span>ПОДРОБНЕЕ</span></a>
      </div>                    
      </div>
      </div>
      </div>
      <div className="col-md-5 col-sm-6 col-xs-12">
      <div className="about-left wow fadeInRight">
      <img src={basic} alt="img"/>

      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section> 
      )
  }
}

export default About;