import React from 'react';
import './index.css';

function LoginPanel(props){
  return (
    <div className={"LoginPanel-main-container"}>
      <CreateAccount/>
      <Login/>
    </div>
  );
}

function CreateAccount(props){
  return (
    <form style={{
      background : "blue",
      height : "88vh",
      flex : 1
    }}>
      <input></input>
      <button type={"submit"}>Create Account</button>
    </form>
  );
}

function Login(props){
  return (
    <form style={{
      background : "green",
      height : "88vh",
      flex : 1,
    }} onSubmit={(e) => {
      e.preventDefault();

    }}>
      <h2 style={{textAlign : "center", color : "white"}}>Already registered - Login below</h2>
      <div className={"LoginPanel-input-container"}>Email<input type={"email"} required/></div>
      <div className={"LoginPanel-input-container"}>Password<input type={"password"} required/></div>
      <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Login</button></div>
    </form>
  );
}

export default LoginPanel;
