import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sanira from '../assets/images/Sanira.jpg';
import begimai from '../assets/images/Begimai.jpg';

import python from '../assets/images/python_933448.png';
import android from '../assets/images/Android.png';
import java from '../assets/images/Java_logo-1.png';

import bgtestim from '../assets/images/testimonial-bg.jpg';

class WhatSays extends React.Component {
render() {
return (
<div>
	<section id="testimonial">
		<img src={bgtestim} alt="img"/>
		<div class="counter-overlay">
			<div class="container">
				<div class="row">
					<div class="col-md-12">

						<div class="testimonial-area">
							<div class="title-area">
								<h2 class="tittle">Что говорят основатели</h2>
								<span class="tittle-line"></span>              
							</div>
							<div class="testimonial-conten">

								<div class="testimonial-slider">

									<div class="single-slide">
										<p>
											Этот курс мега-полезен для выпускников школ, которые не знают на кого учиться, для тех, кто ищет себя,  для тех, кто интересуется ИТ сферой, но не знает с чего начать.
											Друзья, ДЕРЗАЙТЕ!  Кто знает, может программирование - ваше предназначение :)
										</p>
										<div class="single-testimonial">
											<img class="testimonial-thumb" src={sanira} alt="img"/>
											<p>Санира Маджикова</p>
											<span>Основатель, Необис</span>
										</div>
									</div>
									<div class="single-slide">
										<p>
											Хочешь путевку в мир IT?
											Записывайся на наш курс Базового программирования. Вместе с нашими ребятами начни погружаться в мир Программирования и узнай все необходимое и интересное из уст разработчиков.
										</p>
										<div class="single-testimonial">
											<img class="testimonial-thumb" src={begimai} alt="img"/>
											<p>Бегимай Амантаева</p>
											<span>Основатель, Необис</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</section>
	<section id="client">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="client-area">
						<ul class="client-table">
							<li><img src={python} alt="client logo"/></li>
							<li><img src={android} alt="client logo"/></li>
							<li><img src={java} alt="client logo"/></li>            
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
);
}
}

export default WhatSays;
