import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import DashBoardScreen from './Screens/DashboardScreen';

function App() {
  document.getElementsByTagName("html")[0].style.fontSize = window.screen.availWidth * 0.01 + "px";
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path="/">
          <HomeScreen/>
        </Route>
        <Route exact path="/dashboard">
          <DashBoardScreen/>
        </Route>
        <Route path="/*">
          <h1>The URL does not exist</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
