import React, {useRef} from 'react';
import './index.css';
import image from 'assets/home.jpg';
import Menu from 'Components/Menu/index.js'

function HomeScreen(props){
  const menuRef = useRef(null);
  return (
    <div className={"HomeScreen-main-container"}>
      <div style={{
        width : "100vw",
        height : "100vh",
        overflow: "hidden",
        position : "relative"
      }}>
        <img src={image} style={{
          width : "100%"
        }}/>
        <div style={{
          color : "white",
          position : "absolute",
          left: "25%", top : "50%",
          transform: "translate(-50%, -50%)",
          fontSize : "5rem",
          fontWeight : "bolder"
        }}>
          Welcome
        </div>
        <div style={{
          color : "white",
          position : "absolute",
          left: "75%", top : "50%",
          transform: "translate(-50%, -50%)",
          fontSize : "2rem",
          fontWeight : "bolder",
          backgroundColor : "#16569e",
          padding : "1%",
          borderRadius : "10px",
          cursor : "pointer"
        }} onClick={() => {
          menuRef.current.scrollIntoView({ 
            behavior: "smooth"
         });
        }}>
          Get Started
        </div>
      </div>
      <div ref={menuRef} style={{
        backgroundColor : "black",
        color : "white",
        height : "100px",
        width : "100%",
        position: "-webkit-sticky",
        position: "sticky",
        top : "0"
      }}>
        <Menu/>
      </div>
      <div style={{
        height : "10000px"
      }}>
        wdnkwd
        wjdnwjdw
        wjdnjwdnwd
      </div>
    </div>

  );
}

export default HomeScreen;
