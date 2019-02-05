import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Switch} from "react-router-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";

class App extends React.Component {
	render() {
		const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
			<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => (
				<div className={match ? "active" : ""}>
				{match ? " " : ""}
				</div>
				)}
				/>
				);
			return (
				<Router>
				<Switch>
				<Route path="/"  exact component={MainPage}/>
				<Route path='/registration' exact component={NewMembersRegistrationPage}/>
				<OldSchoolMenuLink to="/neolabs" label="neolabs" />
				<Route path="/neolabs" exact component={Neolabs}/>
				</Switch>
				</Router>
				);
		}
	}

	export default App;