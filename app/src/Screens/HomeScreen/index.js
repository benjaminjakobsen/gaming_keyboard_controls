import React, {useRef} from 'react';
import './index.css';
import image from 'assets/home.jpg';
import Menu from 'Components/Menu/index.js'
import IntroductionPanel from './IntroductionPanel'
import LoginPanel from './LoginPanel'


function HomeScreen(props){
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const loginRef = useRef(null);

  return (
    <div className={"HomeScreen-main-container"}>
      <div ref={homeRef} style={{
        width : "100vw",
        height : "100vh",
        overflow: "hidden",
        position : "relative"
      }}>
        <img src={image} style={{
          height : "100%",
          minWidth :"100%"
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
          introRef.current.scrollIntoView({ 
            behavior: "smooth"
         });
        }}>
          Get Started
        </div>
      </div>
      <div ref={introRef}/>
      <div style={{
        backgroundColor : "black",
        color : "white",
        height : "12vh",
        width : "100%",
        position: "-webkit-sticky",
        position: "sticky",
        top : "0"
      }}>
        <Menu buttonClickHandler={(page) => {
          if(page === "Home"){
            homeRef.current.scrollIntoView({
              behavior: "smooth"
            })
          }
          if(page === "Introduction"){
            introRef.current.scrollIntoView({
              behavior: "smooth"
            })
          }
          if(page === "Login"){
            loginRef.current.scrollIntoView({
              behavior: "smooth"
            })
          }
        }} items={[{
          key : "Home",
          content : "Home"
        }, {
          key : "Introduction",
          content : "Introduction"
        }, {
          key : "Login",
          content : "Login"
        }]} className={"HomeScreenStyle"}/>
      </div>
      <div style={{
        width : "100%",
        background: "rgb(0,0,0)",
        background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0.2%, rgba(30,100,0,1) 100%)"
      }}>
        <IntroductionPanel buttonClickHandler={() => {
          loginRef.current.scrollIntoView({ 
            behavior: "smooth"
        });
        }}/>
        <div ref={loginRef}>
          <LoginPanel />
        </div>
      </div>  
    </div>

  );
}

export default HomeScreen;
