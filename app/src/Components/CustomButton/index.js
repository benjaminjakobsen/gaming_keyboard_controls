import React from 'react';
import './index.css';

function CustomButton(props){
  return (
    <div className={"CustomButton-container " + (props.disabled ? "" : "CustomButton-hover-effect")} style={{
      fontSize : "1.5rem",
      width: "fit-content",
      height : "fit-content",
      fontWeight: "bold",
      padding : "10px",
      borderRadius : "10px",
      textAlign : "center",
      position : "relative",
      ...props.style,
      cursor : props.disabled ? "unset" : props.style && props.style.cursor ? props.style.cursor : "pointer",
      backgroundColor : props.disabled ? "grey" : props.style && props.style.backgroundColor ? props.style.backgroundColor : "rgb(0, 80, 0)",
      color : props.disabled ? "lightgrey" : props.style && props.style.color ? props.style.color : "white"
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
