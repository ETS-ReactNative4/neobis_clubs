import React, { Component } from 'react';
import './style.css';
import './preloader.css';
import $ from 'jquery';
import Header from './Header/Header';
import About from './About/About';
import Team from './Team/Team';
import WhatSays from './Whatsays/WhatSays';
import Footer from './Footer/Footer';

class Neolabs extends React.Component {
	render() {
		return (
			<div id="got">
			<Header />
			<About />
			<Team />
			<WhatSays />
			<Footer />
			</div>
			);
		}
	}
	export default Neolabs;