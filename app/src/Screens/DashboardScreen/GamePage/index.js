import React, {useEffect, useState} from 'react';
import './index.css';
import background from 'assets/playBackground.png';
import icon from 'assets/brand_icon.png'

function returnId(props){
  var Id = props.replace('/dashboard/play/','') 
  return Id
}

const checkAllKeys = (keyMap, command) => {
  for(let i = 0; i < command.keyCodes.length; i++){
    if(!keyMap[command.keyCodes[i]]) return false;
  }
  return true;
}

const countWrongKeys = (keyMap, command) => {
  let setOfCommandKeys = {};
  for(let i = 0; i < command.keyCodes.length; i++) setOfCommandKeys[command.keyCodes[i]] = true;
  let count = 0;
  for(const key in keyMap){
    if(keyMap[key] && !setOfCommandKeys[key]) count++;
  }
  return count;
};

/*
* DONE: find challenge to play
* DONE: validate that user has access to challenge
* DONE: wait for space press and set the first command and start time
* DONE: update command when keyCodes are pressed
* when last command is done: stop time and show points gained in an congratulations page and update backend.
* render whether the user pressed any wrong keys using countWrongKeys function. This should be done for both the activateTimer and command.
*/

function GamePage(props){
  const [commandIndex, setCommandIndex] = useState(-1);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [indexTime, setIndexTime] = useState(null);

  const challengeID = returnId(window.location.pathname)
  const challenge = props.challenges[challengeID];
  const user = props.user;

  const command = challenge.commands.length != commandIndex && commandIndex != -1 ? challenge.commands[commandIndex] : null;
  
  const activateTimer ={
    keyCodes : [32]
  }

  const [keyMap, setKeyMap] = useState({});
  useEffect(() => {
    window.onkeydown = (e) => {
      if(keyMap[e.keyCode]) return;
      setKeyMap((prevKeyMap) => {
        const newKeyMap = {...prevKeyMap};
        newKeyMap[e.keyCode] = true;
        return newKeyMap;
      })
    }
  })
  useEffect(() => {
    window.onkeyup = (e) => {
      setKeyMap((prevKeyMap) => {
        const newKeyMap = {...prevKeyMap};
        newKeyMap[e.keyCode] = false;
        return newKeyMap;
      })
    }
  })
  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  })

  if(!challenge || !user){
    return <></>;
  }
  if(challenge.predecessor != null && !user.challenges[challenge.predecessor].done){
    return <div>You found away around our frontend security. However we predicted you :) Please complete all previous challenges before trying this one.</div>
  }
  if(commandIndex == -1 && checkAllKeys(keyMap, activateTimer) && countWrongKeys(keyMap, activateTimer) == 0){
    console.log("started game")
    setCommandIndex(0);
    setStartTime((new Date()).toISOString());
    setIndexTime((new Date()).toISOString())
  }
  if(command) console.log(countWrongKeys(keyMap, command))
  if(command && checkAllKeys(keyMap, command) && countWrongKeys(keyMap, command) == 0){
    setCommandIndex(commandIndex + 1);
    setIndexTime((new Date()).toISOString());
    console.log("command done")
  }
  if(commandIndex == challenge.commands.length && !endTime){
    setEndTime((new Date()).toISOString());
    console.log("finished game")
  }
  const totalTime = endTime && startTime ? (new Date(endTime)).getTime() - (new Date(startTime)).getTime() : null;
  console.log(totalTime)

  const checkIndexTime = indexTime != null ? ((new Date().getTime()) - new Date(indexTime).getTime()) : 51;
  
  if(totalTime){
    return (
      <>
      {((totalTime < challenge.timeLimitToPass) || (challenge.timeLimitToPass == null)) &&
      <div>
        <div style={{textAlign:"center", marginTop : "5vh"}}>
          <h1>You have completed {challenge.title}</h1>
        </div>
        <div style={{textAlign:"center", marginTop : "10vh"}}>
          <h2 style={{margintop : "10vh"}}>You gained {challenge.points} points</h2>
          <h2>Your total time was {totalTime}ms</h2>
        </div>
      </div>}
      
      {((totalTime > challenge.timeLimitToPass) && (challenge.timeLimitToPass != null)) &&
      <div>
        <div style={{textAlign:"center", marginTop : "5vh"}}>
          <h1>You have failed {challenge.title}</h1>
        </div>
        <div style={{textAlign:"center", marginTop : "10vh"}}>
          <h2 style={{margintop : "10vh"}}>You gained 0 points</h2>
          <h2>Time to beat was {challenge.timeLimitToPass}ms</h2>
          <h2>Your total time was {totalTime}ms</h2>
        </div>

      </div>}
      </>

    )
  }
  else{
  return (
    <>
    {challenge.commands.length != commandIndex &&
      <h1 style={{textAlign :"center", height : "10vh", marginTop : "5vh"}}>Welcome to {challenge.title}</h1>
    }
    
      <div style={{
        height : "60vh",
        width : "55vw",
        margin : "auto",
        borderRadius : "20px",
        overflow : "hidden",
        boxShadow : checkIndexTime > 50 && ((command && countWrongKeys(keyMap, command) > 0) || (commandIndex == -1 && countWrongKeys(keyMap, activateTimer) > 0)) ? "0px 0px 10px 2px red" : "0px 0px 10px 2px black",
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
          top : "65%",
          width : "18%"
        }}/>
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
              AA
          </span>
        </div>
        {(commandIndex > -1 && challenge.commands.length != commandIndex) &&     
         <div style = {{
          position : "absolute",
          margin : "auto",
          backgroundColor : "darkgrey",
          top :"25%",
          left : "45%",
          height : "16%",
          width : "10%",
          borderRadius : "10px",
          textAlign : "center",
        }}>
          <span style ={{
            position : "absolute",
            width : "fit-content",
            height : "fit-content",
            top : "30%",
            right : "0",
            left : "0",
            bottom : "40%",
            margin : "auto",
            fontWeight : "700",
            fontSize : "2rem",
          }}>
            {challenge.commands[commandIndex].description}
          </span>
          
        </div>}
        {commandIndex == -1 &&
          <div style = {{
            position : "absolute",
            top : "0",
            right : "0",
            left : "0",
            bottom : "20vh",
            fontWeight : "700",
            fontSize : "2rem",
            margin : "auto",
            width : "fit-content",
            height : "fit-content"
          }}>
            <h2 style={{textAlign :"center", color : "white"}}>Press spacebar to start!</h2>
          </div>
        }
      </div>
    </>)
  }
}

export default GamePage;
