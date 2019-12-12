import React from 'react';
import './index.css';
import Button from 'Components/CustomButton'

function IntroductionPanel(props){
  return (
    <div style={{
      width: "100%",
      padding: "20vh 0"
    }}>
      <div style={{
        height: "50vh",
        width: "50%",
        borderRadius: "20px",
        margin: "auto",
        overflow : "hidden"
      }}>
        <div style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "white"
        }}>
          <h2>Introduction</h2>
          On this page you will put through a number of tests to improve your abilities to use a keyboard in League of legends. Enjoy!
        </div>

        <div style={{
            width: "fit-content",
            height : "fit-content",
            margin: "6vh auto",
          }}>
            <Button style={{
              width : "10vmax",
              height : "3vmax",
            }} onClick={() => props.buttonClickHandler()}>Go to login</Button>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPanel;
