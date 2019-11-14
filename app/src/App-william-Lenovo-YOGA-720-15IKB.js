import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
