import React from 'react';
import './index.css';

function Menu(props){
  return (
    <div style={{
      width : "100%",
      height : "100%",
      display : "flex",
      justifyContent: "space-around",
    }}>
      {
        props.items.map((item, idx) => {
          return <MenuItem key={item.key} onClick={() => props.buttonClickHandler(item.key)} className={props.className}>{item.content}</MenuItem>
        })
      }
    </div>
  );
}

function MenuItem(props){
  return (
  <div onClick={() => props.onClick()} className={props.className}>
    <div>
      {props.children}
    </div>
  </div>
  );
}

export default Menu;
