import React, {useState, useRef} from 'react';
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


// like enumerate types
const pages = {
  CHALLENGES : "challenges",
  STATS : "stats",
  LEADERBOARD : "leaderboard",
  EDITPROFILE : "edit-profile",
}

function DashBoardScreen(props){
  const [showDropDownProfile, setShowDropDownProfile] = useState(false);
  const history = useHistory();
  return (
    <>
      <div style={{
        position : "fixed",
        top : "12vh",
        left : "20vw",
        width : "80vw",
        height : "88vh",
        backgroundColor : "lightgrey"
      }}>
        <Route path={"/dashboard/edit-profile"} component={EditProfile}/>
      </div>
      <div style={{
        backgroundColor : "#344a35",
        color : "white",
        height : "88vh",
        width : "20vw",
        position: "fixed",
        top : "12vh"
      }}>
        <SidePanel/>
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
      <div style={{
        backgroundColor : "black",
        color : "white",
        height : "12vh",
        width : "80vw",
        left : "20vw",
        position: "fixed",
        top : "0"
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
            history.push(key);
          }
        }} className={"DashBoardStyle"}/>
      </div>
    </>
  );
}

export default DashBoardScreen;
