import React, {useEffect, useState} from 'react';
import './index.css';

const checkAllKeys = (keyMap, command) => {
  for(let i = 0; i < command.keyCodes.length; i++){
    if(!keyMap[command.keyCodes[i]]) return false;
  }
  return true;
}

function GamePage(props){
  const command = {
    keyCodes : [87, 82, 69]
  }
  const [keyMap, setKeyMap] = useState({});
  useEffect(() => {
    window.onkeydown = (e) => {
      if(keyMap[e.keyCode]) return;
      setKeyMap((prevKeyMap) => {
        const newKeyMap = {...prevKeyMap};
        newKeyMap[e.keyCode] = true;
        return newKeyMap;
      })
    }
  })
  useEffect(() => {
    window.onkeyup = (e) => {
      setKeyMap((prevKeyMap) => {
        const newKeyMap = {...prevKeyMap};
        newKeyMap[e.keyCode] = false;
        return newKeyMap;
      })
    }
  })
  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  })

  if(checkAllKeys(keyMap, command)){

  }

  if(checkAllKeys(keyMap, command)){
    console.log("DU KLAREDE DET JUBIIII")
  }

  console.log(keyMap)

  return (
    <>
      
    </>
  );
}

export default GamePage;
