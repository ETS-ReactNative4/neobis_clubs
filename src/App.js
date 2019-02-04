import React, { Component } from 'react';
import MainPage from "./containers/MainPage/MainPage";
import {Route, Switch} from "react-router-dom";
import NewMembersRegistrationPage from "./components/NewMembersRegistrationPage/NewMembersRegistrationPage";
import Neolabs from "./components/Neolabs/Neolabs";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/registration' exact component={NewMembersRegistrationPage}/>
        <Route path='/neolabs' exact component={Neolabs}/>
      </Switch>
    );
  }
}

export default App;