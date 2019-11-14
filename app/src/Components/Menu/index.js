import React from 'react';
import './index.css';

function Menu(props){
  return (
    <div style={{
      width : "100%",
      height : "100%",
      display : "flex",
      justifyContent: "space-around"
    }}>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Login</MenuItem>
    </div>
  );
}

function MenuItem(props){
  return (
  <div style={{
    position : "relative",
    width : "100%",
    height : "100%"
  }}>
    <div style={{
      position : "absolute",
      top : "50%", left : "50%",
      transform: "translate(-50%, -50%)",
    }}>
      {props.children}
    </div>
  </div>
  );
}

export default Menu;
