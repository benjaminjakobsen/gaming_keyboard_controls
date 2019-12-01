import React, {useState, useEffect} from 'react';
import './index.css';
import Menu from 'Components/Menu'
import SidePanel from './SidePanel';
import Dropdown from './Dropdown'
import Logo from 'assets/logo.png'
import {
  useHistory,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import EditProfile from './EditProfile';
import StatsPage from './StatsPage'
import LeaderBoardPage from './LeaderBoardPage'
import ChallengesPage from './ChallengesPage'
import customFetch from 'services/requests'

// like enumerate types
const pages = {
  CHALLENGES : "challenges",
  STATS : "stats",
  LEADERBOARD : "leaderboard",
  EDITPROFILE : "edit-profile",
}

function DashBoardScreen(props){
  const history = useHistory();
  const [showDropDownProfile, setShowDropDownProfile] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    customFetch("/challenges", {}, (res) => {
      const challengesDict = {};
      for(let i = 0; i < res.length; i++){
        challengesDict[res[i].orderingId] = res[i];
      }
      setChallenges(res.challenges)
    })
    customFetch("/user", {}, (res) => {
      setUser(res.user)
    })
  }, []);
  if(!user || !challenges) return <></>;
  console.log(user, challenges)
  return (
    <>
      <div style={{
        position : "fixed",
        top : "12vh",
        left : "20vw",
        width : "80vw",
        height : "88vh",
        backgroundColor : "lightgrey",
      }}>
        <Route exact path={`/dashboard/${pages.EDITPROFILE}`} component={() => <EditProfile updateHandler={(newUser) => {
          setUser(newUser)
        }}/>}/>
        <Route exact path={`/dashboard/${pages.STATS}`} component={() => <StatsPage user={user}/>}/>
        <Route exact path={`/dashboard/${pages.LEADERBOARD}`} component={LeaderBoardPage}/>
        <Route exact path={`/dashboard/${pages.CHALLENGES}`} component={() => <ChallengesPage user={user} challenges={challenges}/>}/>
      </div>
      <div style={{
        backgroundColor : "#344a35",
        color : "white",
        height : "88vh",
        width : "20vw",
        position: "fixed",
        top : "12vh",
        boxShadow: "10px 0px 20px 1px grey"
      }}>
        <SidePanel user={user} challenges={challenges}/>
      </div>
      <div style={{
        backgroundColor : "black",
        color : "white",
        height : "12vh",
        width : "80vw",
        left : "20vw",
        position: "fixed",
        top : "0",
        boxShadow: "0px 10px 20px 1px grey"
      }}>
        <Menu items={[{
          key : pages.CHALLENGES,
          content : "Challenges",
        }, {
          key : pages.STATS,
          content : "Stats",
        }, {
          key : pages.LEADERBOARD,
          content : "Leaderboard"
        }, {
          key : "dropdownProfile",
          content : <Dropdown outSideClick={() => {
            setShowDropDownProfile(false);
          }} show={showDropDownProfile} items={[
            {
              content : "Edit profile",
              handler : () => {
                history.push(`/dashboard/${pages.EDITPROFILE}`)
              }
            },
            {
              content : "Logout",
              handler : () => {
                document.cookie = "session=null;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                history.push("");
              }
            }
          ]}></Dropdown>
          
        }]} buttonClickHandler={(key) => {
          if(key == "dropdownProfile"){
            setShowDropDownProfile(!showDropDownProfile);
          }else{
            history.push("/dashboard/" + key);
          }
        }} className={"DashBoardStyle"}/>
      </div>
      <div style={{
        backgroundColor : "rgb(47, 47, 47)",
        color : "white",
        height : "12vh",
        width : "20vw",
        position: "fixed",
        top : "0vh"
      }}>
        <img src={Logo} style={{
          width : "8vmin",
          position : "absolute",
          top : 0, bottom : 0, right : 0, left : 0,
          margin : "auto",
          cursor : "pointer"
        }} onClick={() => {
          history.push("/")
        }}/>
      </div>
    </>
  );
}

export default DashBoardScreen;
