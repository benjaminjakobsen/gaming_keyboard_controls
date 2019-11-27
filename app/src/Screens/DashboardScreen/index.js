import React, {useState} from 'react';
import './index.css';
import Menu from 'Components/Menu'
import SidePanel from './SidePanel';
import Dropdown from './Dropdown'

// like enumerate types
const pages = {
  CHALLENGES : "challenges",
  STATS : "stats",
  LEADERBOARD : "leaderboard",
  EDITPROFILE : "editprofile",
}


function DashBoardScreen(props){
  const [currentPage, setCurrentPage] = useState(pages.CHALLENGES);
  const [showDropDownProfile, setShowDropDownProfile] = useState(false);
  return (
    <>
      <div style={{
        backgroundColor : "blue",
        color : "white",
        height : "88vh",
        width : "20vw",
        position: "fixed",
        top : "12vh"
      }}>
        <SidePanel/>
      </div>
      <div style={{
        backgroundColor : "black",
        color : "white",
        height : "12vh",
        width : "100%",
        position: "-webkit-sticky",
        position: "sticky",
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
                setCurrentPage(pages.EDITPROFILE)
              }
            },
            {
              content : "Logout",
              handler : () => {
                // do something
              }
            }
          ]}></Dropdown>
          
        }]} buttonClickHandler={(key) => {
          if(key == "dropdownProfile"){
            setShowDropDownProfile(!showDropDownProfile);
          }
        }} className={"DashBoardStyle"}/>
      </div>
    </>
  );
}

export default DashBoardScreen;
