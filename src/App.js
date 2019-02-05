import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";

class App extends React.Component {
	render() {
		return (
			<Router>
			<div>
			<Route exact path="/"  component={MainPage}/>
			<Route exact path="/neolabs"  component={Neolabs}/>
			//<Route path='/registration' exact component={NewMembersRegistrationPage}/>
			</div>
			</Router>
			);
		}
	}

	export default App;