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
  const user = { // should be recieved from props
    name : "William",
    points : "100",
    rank : "1",
    challenges : {
      "1" : true,
      "2" : true,
      "3" : false,
      "4" : false
    }
  }
  return (
    <div className={"SidePanel-container"}>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.EDITPROFILE}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Username: {user.name}</div></div>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.STATS}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Points: {user.points} </div></div>
      <div><div onClick={() =>{
        history.push(`/dashboard/${pages.LEADERBOARD}`)
      }} className={"SidePanel-centered-item"} style={{cursor : "pointer"}}>Global rank: {user.rank}</div></div>
      <div style={{
        borderBottom : "2px solid black",
        width : "100%",
        flex : 0
      }}/>
      <div><div className={"SidePanel-centered-item"}>
        <Button style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "#6ee06e",
          color : "black"
        }}> Previous challenge</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "#ebed58",
          color : "black"
        }}> Current challenge</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button disabled={true} style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "lightgrey",
          color : "grey"
        }}> Next challenge</Button>
      </div></div>
    </div>
  );
}

export default SidePanel;
