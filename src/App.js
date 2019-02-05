import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Switch} from "react-router-dom";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";

class App extends React.Component {
	render() {
		return (
			<Switch>
			<Route exact path="/"  component={MainPage}/>
			<Route path='/registration' exact component={NewMembersRegistrationPage}/>
			<Route path='/neolabs' exact component={Neolabs}/>
			</Switch>
			);
		}
	}

	export default App;