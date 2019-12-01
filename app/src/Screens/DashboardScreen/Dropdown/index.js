import React, {useState} from 'react';
import './index.css';
import icon from "assets/default_profile_icon.jpg";

function DropDown(props){
  return (
    <div style={{
      cursor : "pointer",
      position : "relative" 
    }}>
      {props.show && <div style={{
          position : "fixed",
          width : "100vw",
          height : "100vh",
          left : "0px",
          top : "0px"
      }} onClick={() => props.outSideClick()}/>}
      <img src={icon} style={{
        height : "3vmax",
        width : "3vmax"
      }}/>
      {props.show && <div style={{
        backgroundColor : "lightgrey",
        height : "50px",
        width : "fit-content",
        position : "absolute",
        right : "-3.5vw",
        height : "fit-content",
        width : "10vmax",
        color : "black",
        boxShadow : "0px 0px 10px 1px grey",
        borderRadius : "10px",
        overflow : "hidden" 
      }}>
        {
          props.items.map((item, idx) => {
            return <div key={idx} onClick={() => item.handler()} className={"DropDown-item"} style={{
              padding : idx != props.items.length - 1 ? "1vmax 1vmax 0.5vmax 1vmax" : "0.5vmax 1vmax 1vmax 1vmax"
            }}>
              {item.content} 
            </div>
          })
        }
      </div>}
    </div>
  );
}

export default DropDown;
