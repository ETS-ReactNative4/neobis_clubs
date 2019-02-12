import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.css';

import {Switch} from "react-router-dom";
import {Route} from 'react-router-dom';
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";
import Java from "./components/Neolabs/Java/Java";

class App extends React.Component {
	render() {
		return (
			<Switch>
			<Route path="/"  exact component={MainPage}/>
			<Route path="/java" exact component={Java}/>
			<Route path="/neolabs" exact component={Neolabs}/>
			</Switch>
			);
		}
	}

	export default App;