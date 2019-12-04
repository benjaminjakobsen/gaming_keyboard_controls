import React from 'react';
import './index.css';
import background from 'assets/playBackground.png';
import icon from 'assets/LuxSquare.png'

function returnId(props){
  var Id = props.replace('/dashboard/play/','') 
  return Id
}

function GamePage(props){
  console.log(props.challenges)
  var IdForPage = returnId(window.location.pathname)
  var challengeName = props.challenges[IdForPage].title
  return (
    <>
      <h1 style={{textAlign :"center", height : "10vh"}}>Welcome to {challengeName}</h1>

      <div style={{
        height : "60vh",
        width : "55vw",
        margin : "auto",
        borderRadius : "20px",
        overflow : "hidden",
        boxShadow : "0px 0px 10px 2px black",
        position : "relative"
      }}>
        <img src={background} style={{
          height : "100%",
          width : "100%",
          position : "absolute",
          top : "0",
          left : "0"
        }}/>
        <img src = {icon} style ={{
          position : "absolute",
          left : "50%",
          transform : "translateX(-50%)",
          top : "65%"
        }}></img>

        <div style={{
          position : "absolute",
          top :"65%",
          left : "70%",
          backgroundColor : "red",
          height : "16%",
          width : "10%",
          cursor : "pointer",
          borderRadius : "50px",
          textAlign : "center",
        }}>
          <span style ={{
            position : "absolute", 
            width : "fit-content",
            height :"fit-content",
            top : "0",
            right : "0",
            margin : "auto",
            left : "0",
            bottom : "0",
            fontWeight : "700",
            fontSize : "2rem"

            }}>
              AA</span>
        </div>
      
      
      </div>
    </>
  );
}

export default GamePage;
