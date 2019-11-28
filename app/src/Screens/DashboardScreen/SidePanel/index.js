import React from 'react';
import './index.css';
import Button from 'Components/CustomButton'

function SidePanel(props){
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
      <div><div className={"SidePanel-centered-item"}>Username: {user.name}</div></div>
      <div><div className={"SidePanel-centered-item"}>Points: {user.points} </div></div>
      <div><div className={"SidePanel-centered-item"}>Global rank: {user.rank}</div></div>
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
        }}> challenge 2</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "#ebed58",
          color : "black"
        }}> challenge 3</Button>
      </div></div>
      <div><div className={"SidePanel-centered-item"}>
        <Button disabled={true} style={{
          width : "16vw",
          fontSize : "1.2rem",
          textOverflow: "ellipsis",
          backgroundColor : "lightgrey",
          color : "grey"
        }}> challenge 4</Button>
      </div></div>
    </div>
  );
}

export default SidePanel;
