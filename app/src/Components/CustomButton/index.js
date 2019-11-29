import React from 'react';
import './index.css';

function CustomButton(props){
  return (
    <div className={"CustomButton-container " + (props.disabled ? "" : "CustomButton-hover-effect")} style={{
      color : props.disabled ? "lightgrey" : "white",
      fontSize : "1.5rem",
      width: "fit-content",
      height : "fit-content",
      fontWeight: "bold",
      backgroundColor : props.disabled ? "grey" : "rgb(0, 80, 0)",
      padding : "10px",
      borderRadius : "10px",
      cursor : props.disabled ? "unset" : "pointer",
      textAlign : "center",
      position : "relative",
      ...props.style
    }} onClick={() => {
      if(props.onClick && !props.disabled) props.onClick()
    }}>
      <div style={{
        left : "0", right:  "0", bottom : "0", top :"0",
        margin : "auto",
        height : "fit-content",
        width : "fit-content",
        position : "absolute"
      }}>{props.children}</div>
    </div>
  );
}

export default CustomButton;
