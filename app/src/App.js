import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <SubComponent text={"Welcome to you"}/>
      <SubComponent text={"Welcome to Louie"}/>
    </div>
  );
}

function SubComponent(props){
  return (
    <h1>
      {props.text}
    </h1>
  )
}

export default App;
