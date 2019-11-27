import React from 'react';
import './index.css';

function CustomButton(props){
  return (
    <div className={"CustomButton-container"} style={{
      color : "white",
      fontSize : "1.5rem",
      width: "fit-content",
      height : "fit-content",
      fontWeight: "bold",
      backgroundColor : "rgb(0, 80, 0)",
      padding : "10px",
      borderRadius : "10px",
      cursor : "pointer",
      textAlign : "center",
      ...props.style
    }} onClick={() => {
      if(props.onClick) props.onClick()
    }}>
      {props.children}
    </div>
  );
}

export default CustomButton;
