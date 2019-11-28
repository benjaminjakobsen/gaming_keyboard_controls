import React from 'react';
import './index.css';

function CustomButton(props){
  return (
    <div className={"CustomButton-container " + (props.disabled ? "" : "CustomButton-hover-effect")} style={{
      color : props.disabled ? "black" : "white",
      fontSize : "1.5rem",
      width: "fit-content",
      height : "fit-content",
      fontWeight: "bold",
      backgroundColor : "rgb(0, 80, 0)",
      padding : "10px",
      borderRadius : "10px",
      cursor : props.disabled ? "unset" : "pointer",
      textAlign : "center",
      ...props.style
    }} onClick={() => {
      if(props.onClick && !props.disabled) props.onClick()
    }}>
      {props.children}
    </div>
  );
}

export default CustomButton;
