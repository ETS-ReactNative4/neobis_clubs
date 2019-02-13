import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.css';

import {Switch} from "react-router-dom";
import {Route, BrowserRouter} from 'react-router-dom';
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";
import Java from "./components/Neolabs/Java/Java";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
			<Switch>
			<Route path="/"  exact component={MainPage}/>
			<Route path="/neolabs/java" exact component={Java}/>
			<Route path="/neolabs" exact component={Neolabs}/>
			</Switch>
			</BrowserRouter>
			);
		}
	}

	export default App;