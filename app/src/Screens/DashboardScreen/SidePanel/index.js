import React from 'react';
import './index.css';
import Button from 'Components/CustomButton'
import {
  useHistory
} from 'react-router-dom';

const pages = {
  CHALLENGES : "challenges",
  STATS : "stats",
  LEADERBOARD : "leaderboard",
  EDITPROFILE : "edit-profile",
}


function SidePanel(props){
  const history = useHistory();
  /*const user = { // should be recieved from props
    name : "William",
    points : "100",
    rank : "1",
    challenges : {
      "1" : true,
      "2" : true,
      "3" : false,
      "4" : false
    }
  }*/
  const user = props.user;
  let currentOrderingID = -1;
  for(const orderingID in props.user.challenges){
    if(props.user.challenges[orderingID].done){
      currentOrderingID = orderingID;
      break;
    }
  }
  return (
    <div className={"SidePanel-container"}>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.EDITPROFILE}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Username: {user.username}</div></div>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.STATS}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Points: {user.points} </div></div>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.LEADERBOARD}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Rank: {user.rank ? user.rank : "unset"}</div></div>
      <div style={{
        borderBottom : "2px solid black",
        width : "100%",
        flex : 0
      }}/>
      <div><div className={"SidePanel-centered-item"}>
        <Button disabled={currentOrderingID == -1} style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          height : "5vh"
        }} onClick={() => {
          history.push(`/dashboard/play/${currentOrderingID}`)
          props.resetChallengePage()
        }}> Previous challenge</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button disabled={!props.user.challenges[Number(currentOrderingID + 1)] && true} style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "#ebed58",
          color : "black",
          height : "5vh"
        }} onClick={() => {
          history.push(`/dashboard/play/${Number(currentOrderingID + 1)}`)
          props.resetChallengePage()
        }}>Current challenge</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button disabled={true} style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "lightgrey",
          color : "grey",
          height : "5vh"
        }}> Next challenge</Button>
      </div></div>
    </div>
  );
}

export default SidePanel;
