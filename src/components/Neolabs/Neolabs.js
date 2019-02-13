import React, { Component } from 'react';
import './style.css';
import './preloader.css';


import Header from './Header/Header';
import About from './About/About';
import Team from './Team/Team';
import WhatSays from './Whatsays/WhatSays';
import Footer from './Footer/Footer';

class Neolabs extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
		
	}

	render() {

		return (
			<div>
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