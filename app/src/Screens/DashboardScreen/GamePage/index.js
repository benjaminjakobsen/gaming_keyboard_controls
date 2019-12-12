import React, {useEffect, useState} from 'react';
import './index.css';
import background from 'assets/playBackground.png';
import brand from 'assets/brand_icon.png';
import velkoz from 'assets/velkoz_icon.png';
import customFetch from 'services/requests'
import Button from 'Components/CustomButton'

const icons = {
  brand : brand,
  velkoz : velkoz
}

function returnId(){
  var Id = window.location.pathname.replace('/dashboard/play/','') 
  return Id
}

const checkAllKeys = (keyMap, command) => {
  for(let i = 0; i < command.keyCodes.length; i++){
    if(!keyMap[command.keyCodes[i]]) return false;
  }
  return true;
}

const countWrongKeys = (keyMap, commandIndex, commands) => {
  let setOfCommandKeys = {};
  for(let i = 0; i <= commandIndex; i++){
    const command = commands[i];
    for(let j = 0; j < command.keyCodes.length; j++) setOfCommandKeys[command.keyCodes[j]] = true;
  }
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
  const state = props.state;
  const setState = props.setState;
  const commandIndex = state.commandIndex;
  const startTime = state.startTime;
  const endTime = state.endTime;
  const indexTime = state.indexTime;
  const keyMap = state.keyMap;
  const challengeID = state.challengeID;

  const challenge = props.challenges[challengeID];
  const userChallenges = props.userChallenges;
  const icon = icons[challenge.champion];
 
  const command = challenge.commands.length != commandIndex && commandIndex != -1 ? challenge.commands[commandIndex] : null;
  
  const activateTimer ={
    keyCodes : [32]
  }

  useEffect(() => {
    window.onkeydown = (e) => {
      if(keyMap[e.keyCode]) return;
      const newKeyMap = {...keyMap};
      newKeyMap[e.keyCode] = true;
      setState({
        keyMap : newKeyMap
      });
    }
  })
  useEffect(() => {
    window.onkeyup = (e) => {
      const newKeyMap = {...keyMap};
      newKeyMap[e.keyCode] = false;
      setState({
        keyMap : newKeyMap
      });
    }
  })
  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  })

  if(!challenge || !userChallenges){
    return <></>;
  }
  if(challenge.predecessor != null && !userChallenges[challenge.predecessor].done){
    return <div>You found away around our frontend security. However we predicted you :) Please complete all previous challenges before trying this one.</div>
  }
  if(commandIndex == -1 && checkAllKeys(keyMap, activateTimer) && countWrongKeys(keyMap, 0, [activateTimer]) == 0){
    console.log("started game")
    setState({
      commandIndex : 0,
      startTime : (new Date()).toISOString(),
      indexTime : (new Date()).toISOString()
    });
  }
  if(command && checkAllKeys(keyMap, command) && countWrongKeys(keyMap, commandIndex, challenge.commands) == 0){
    setState({
      commandIndex : commandIndex + 1,
      indexTime : (new Date()).toISOString()
    })
    console.log("command done")
  }
  if(commandIndex == challenge.commands.length && !endTime){
    setState({
      endTime : (new Date()).toISOString()
    });
    const totalTime = (new Date()).getTime() - (new Date(startTime)).getTime();
    if(challenge.isPractice || totalTime <= challenge.timeLimitToPass){
      const userCopy = {
        challenges : JSON.parse(JSON.stringify(userChallenges)) // deep copy object
      }
      userCopy.challenges[challengeID].bestTime = Math.min(
        userChallenges[challengeID].done ? userChallenges[challengeID].bestTime : 10000000,
        totalTime
      );
      userCopy.challenges[challengeID].done = true;
      customFetch("/users", userCopy, (res) => {
        props.updateHandler(res.user);
      }, {method : "PATCH"});
    }
    console.log("finished game")
  }
  const totalTime = endTime && startTime ? (new Date(endTime)).getTime() - (new Date(startTime)).getTime() : null;

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
      <Button style={{
        width : "20vw",
        height : "5vh",
        margin : "5vh auto"
      }} onClick={() => {
        setState({
          commandIndex : -1,
          startTime : null,
          endTime : null,
          indexTime : null,
          keyMap : {},
          challengeID : returnId()
        })
      }}>replay</Button>
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
        boxShadow : checkIndexTime > 50 && ((command && countWrongKeys(keyMap, commandIndex, challenge.commands) > 0) || (commandIndex == -1 && countWrongKeys(keyMap, activateTimer) > 0)) ? "0px 0px 10px 2px red" : "0px 0px 10px 2px black",
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
          left : "0", 
          right: "0",
          width : "fit-content",
          borderRadius : "10px",
          textAlign : "center",
          padding : "1vmax"
        }}>
          <div style ={{
              width : "fit-content",
              height : "fit-content",
              fontSize : "2rem",
            }}>
            <div dangerouslySetInnerHTML={{__html: challenge.commands[commandIndex].description}}>
            </div>
          </div>
          
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
