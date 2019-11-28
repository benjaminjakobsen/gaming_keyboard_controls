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
  return (
    <div className = {"StatsPage-divBox"} style={{
      height : "75vh",
      width : "50%",
      marginLeft : "7vw",
      marginTop : "6vh",
      borderRadius : "15px"
    }}>
      <div style={{
        height : "10vh",
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
        }} className={"StatsPage-text"}>Challenges completed: X/X</p>
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
        }} className={"StatsPage-text"}>Points: Y</p>
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
        }}className={"StatsPage-text"}>Rating: Z</p>
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
        }} className={"StatsPage-text"}>Leaderboard Rank: 1</p>
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
