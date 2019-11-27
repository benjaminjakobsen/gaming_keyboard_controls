import React, {useState} from 'react';
import './index.css';
import icon from "assets/default_profile_icon.jpg";

function __Component__(props){
  const  [showContent, setShowContent] = useState(false);
  return (
    <div style={{cursor : "pointer", poistion : "relative"}}>
      <img src={icon} onClick={() => {
      setShowContent(!showContent)
    }} height = "42" width = "42"/>

      {showContent && <div style={{
        backgroundColor : "white",
        height : "50px",
        width : "fit-content",
        position : "absolute"
        
      }}>
        <font color = "black">Hello <br></br> Hello Again</font>
        
        
      </div>}
      
    </div>

    
  );
}

export default __Component__;
