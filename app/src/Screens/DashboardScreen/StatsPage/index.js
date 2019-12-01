import React from 'react';
import './index.css';
import {
  useHistory
} from 'react-router-dom';

const pages = {
  CHALLENGES : "challenges",
  STATS : "stats",
  LEADERBOARD : "leaderboard",
  EDITPROFILE : "edit-profile",
}

function StatsPage(props){
  const history = useHistory();
  const user = props.user;
  let challengesCompleted = 0;
  let totalChallenges = 0;
  for(const id in user.challenges){
    totalChallenges++;
    if(user.challenges[id].done) challengesCompleted++;
  }
  return (
    <div className = {"StatsPage-divBox"} style={{
      height : "65vh",
      width : "40%",
      marginLeft : "23vw",
      marginTop : "13vh",
      outline : "1px solid black"
    }}>
      <div style={{
        height : "5vh",
        margin : "auto"}}>
      </div>
      <div onClick={() =>{
        history.push(`/dashboard/${pages.CHALLENGES}`)
      }} style={{
        cursor : "pointer",
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        <p style={{
          margin : "0"
        }} className={"StatsPage-text"}>Challenges completed: {challengesCompleted}/{totalChallenges}</p>
      </div>
      <div style={{
        cursor : "pointer",
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        <p style={{
          margin : "0"
        }} className={"StatsPage-text"}>Points: {user.points}</p>
      </div>
      <div onClick={() =>{
        history.push(`/dashboard/${pages.LEADERBOARD}`)
      }} style={{
        cursor : "pointer",
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        <p style={{
          margin : "0"
        }}className={"StatsPage-text"}>Rating: unset</p>
      </div>
      <div onClick={() =>{
        history.push(`/dashboard/${pages.LEADERBOARD}`)
      }} style={{
        cursor : "pointer",
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        <p style={{
          margin : "0"
        }} className={"StatsPage-text"}>Rank: unset</p>
      </div>
      <div style={{
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        Rank: Master
      </div>
      <div style={{
        width : "70%", 
        height : "10vh",
        margin : "auto",
        fontWeight : "700",
        fontSize : "1.5rem"
      }}>
        Favourite champion: Brand
      </div>
      

    </div>
    
    
  );
}

export default StatsPage;
