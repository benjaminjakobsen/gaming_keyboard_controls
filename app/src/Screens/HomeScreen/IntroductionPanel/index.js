import React from 'react';
import './index.css';

function __Component__(props){
  return (
    <div style={{
      width: "100%",
      padding: "20vh 0"
    }}>
      <div style={{
        height: "50vh",
        width: "50%",
        borderRadius: "20px",
        margin: "auto",
        overflow : "hidden"
      }}>
      <div style={{
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "white"
      }}>
        <h2>Introduction</h2>
        On this page you will put through a number of tests to improve your abilities to use a keyboard. Enjoy!
      </div>

      <div style={{
          color : "white",
          fontSize : "1.5rem",
          width: "fit-content",
          margin: "6vh auto",
          fontWeight: "bold",
          backgroundColor : "rgb(0, 80, 0)",
          padding : "1%",
          borderRadius : "10px",
          
          cursor : "pointer"
        }} onClick={() => props.buttonClickHandler()}>
          Go to login
        </div>

      </div>

      
    </div>
    
  );
}

export default __Component__;
