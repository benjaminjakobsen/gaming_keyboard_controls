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
      <div onClick={() => props.buttonClickHandler("Home")}>
        <MenuItem>Home</MenuItem>
      </div>
      <div onClick={() => props.buttonClickHandler("Introduction")}>
        <MenuItem>Introduction</MenuItem>
      </div>
      <div onClick={() => props.buttonClickHandler("Login")}>
        <MenuItem>Login</MenuItem>
      </div>
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
      fontWeight : "700",
      cursor : "pointer"
    }}>
      {props.children}
    </div>
  </div>
  );
}

export default Menu;
