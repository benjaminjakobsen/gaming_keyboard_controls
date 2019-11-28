import React, {useState} from 'react';
import './index.css';
import CheckIcon from 'assets/checkicon.png'
import CloseIcon from 'assets/closeIcon.png'
import Button from 'Components/CustomButton'

function ChallengesPage(props){
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [sidePanelChallengeID, setSidePanelChallengeID] = useState(null);
  const challenges = {1 : {
    title : "challenge 1",
    points : 100,
    _id : 1,
    predecessor : -1,
  }, 2 : {
    title : "challenge 2",
    points : 200,
    _id : 2,
    predecessor : 1
  },3 : {
    title : "challenge 3",
    points : 300,
    _id : 3,
    predecessor : 2
  },4 : {
    title : "challenge 4",
    points : 400,
    _id : 4,
    predecessor : 3
  },5 : {
    title : "challenge 5",
    points : 500,
    _id : 5,
    predecessor : 4
  }};
  const userChallenges = {
    1 : {
      done : true,
      bestTime : 100
    },
    2 : {
      done : true,
      bestTime : 200
    },
    3 : {
      done : true,
      bestTime : 150
    },
    4 : {
      done : false,
      bestTime : null
    },
    5 : {
      done : false,
      bestTime : null
    }
  }
  return (
    <div className={"ChallengesPage-main-container"}>
      <div style={{
        width : "60%",
        margin : showSidePanel ? "0" : "0 20%",
        height : "100%",
        position : "relative",
        transition : "margin 500ms",
        float : showSidePanel ? "left" : "unset",
      }}>
        <div style={{
          width : "70%",
          margin : "auto",
          height : "80%",
          overflowX : "hidden",
          overflowY : "scroll",
          position : "absolute", top : "0", bottom : "0", left : "0", right : "0"
        }}>
          {
            Object.values(challenges).map((challenge, idx) => {
              return <div className={"ChallengePage-challenge"} key={challenge._id + " " + idx} style={{
                backgroundColor : (challenge.points > 400 ? "#de5454" : (challenge.points >= 300 ? "#d5de54" : "#69de54")),
                height : "6vh",
                width : "100%",
                borderRadius : "10px",
                marginTop : "2vh",
                position : "relative",
                cursor : "pointer",
                fontWeight : "600",
                filter : showSidePanel && sidePanelChallengeID !== challenge._id ? "brightness(0.2)" : "unset"
              }} onClick={() => {
                setShowSidePanel(true);
                setSidePanelChallengeID(challenge._id);
              }}>
                <div style={{
                  height : "fit-content",
                  margin : "auto",
                  width : "fit-content",
                  position : "absolute",
                  right : "0", left : "0",
                  top : "0", bottom : "0"
                }}>{challenge.title}</div>
                {userChallenges[challenge._id].done && <div style={{
                  height : "fit-content",
                  width : "fit-content",
                  position : "absolute",
                  right : "1vh",
                  top : "0", bottom : "0",
                  margin : "auto 0"
                }}><img title={"completed"} alt={"completed"} src={CheckIcon} style={{
                  width : "4vh",
                  height : "4vh",
                }}/></div>}
              </div>
            })
          }
        </div>
      </div>
      <div style={{
        width : showSidePanel ? "40%" : "0%",
        float : "right",
        boxShadow: "-10px 0px 20px 1px grey",
        height : "100%",
        transition : "width 500ms",
        position : "relative"
      }}>
        {showSidePanel && <ChallengeInfo closeHandler={() => {
          setShowSidePanel(false)
        }} 
          userChallenge={userChallenges[sidePanelChallengeID]} 
          challenge={challenges[sidePanelChallengeID]}
          canPlay={challenges[sidePanelChallengeID].predecessor == -1 || userChallenges[challenges[sidePanelChallengeID].predecessor].done}
        />}
      </div>
    </div>
  );
}

function ChallengeInfo(props){
  const userChallenge = props.userChallenge;
  const challenge = props.challenge;
  const canPlay = props.canPlay;
  console.log(props.closeHandler)
  return (
    <>
    <div onClick={() => {
        props.closeHandler()
      }} style={{
      position : "absolute",
      top : "1vh",
      left : "1vh",
      height : "3vh",
      width : "3vh",
      zIndex : "2",
      cursor : "pointer"
    }}>
      <img src={CloseIcon} style={{
        width : "100%",
        height : "100%"
      }}/>
    </div>
    <div style={{
      display : "flex",
      fontSize : "1.2rem",
      alignContent : "space-evenly",
      flexDirection : "column",
      height : "100%",
      fontWeight : "600"
    }}>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}>Challenge: {challenge.title}</div>
      </div>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}>Points: {challenge.points}</div>
      </div>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}>Difficulty: {Math.round(challenge.points / 100)}</div>
      </div>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}>Status: {userChallenge.done ? "completed" : "uncompleted"}</div>
      </div>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}>{userChallenge.done ? "Best time: " + userChallenge.bestTime + " seconds": ""}</div>
      </div>
      <div style={{flexGrow : 1, position : "relative"}}>
        <div style={{
          width : "fit-content", height : "fit-content",
          top : "0", right : "0", bottom : "0", left : "0", margin : "auto", position : "absolute"
        }}><Button style={{
          height : "5vh",
          width : "10vmax",
          backgroundColor : !canPlay ? "grey" : "#5dd95d",
        }} disabled={!canPlay}>{userChallenge.done ? "Replay" : "Play"}</Button></div>
      </div>
    </div>
    </>
  );
}

export default ChallengesPage;
