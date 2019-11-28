import React from 'react';
import './index.css';

const players = ["Bob", "Eric", "David", "William", "Benjamin", "Jesus", "Stone", "Poul", "Victor", "Daniel"]
function LeaderBoardPage(props){
  return (
    <>
    <table style={{
      width : "40%",
      border : "1px solid black",
      margin : "auto",
      textAlign : "left",
      borderSpacing : "2vmax",
      marginTop : "10vh"

    }}>
      <caption style={{
        fontWeight : "700",
        fontSize : "1.5rem",
        marginBottom : "2vh"
      }}>Global leaderboard</caption>
      <tr>
        <th>Rank</th>
        <th>Username</th>
      </tr>
      {
        players.map((player, idx) => {
          return (
            <tr>
              <td>{idx+1}</td>
              <td>{player}</td>
            </tr>
          );
        })
      }
    </table>

    </>
  );
}

export default LeaderBoardPage;
