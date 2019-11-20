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
      height : "83vh",
      flex : 1,
      paddingTop : "5vh"
    }}>
      <h2 style={{textAlign : "center", color : "white"}}>Not registered - create an account</h2>
      <div className={"LoginPanel-input-container"}>Email*<input type={"email"} required/></div>
      <div className={"LoginPanel-input-container"}>Username*<input required/></div>
      <div className={"LoginPanel-input-container"}>Password*<input type={"password"} required/></div>
      <div className={"LoginPanel-input-container"}>Confirm password*<input type={"password"} required/></div>
      <div style={{margin : "-4vh auto 2vh auto", width : "fit-content", color : "white"}}>* required fields</div>
      <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Create account</button></div>
    </form>
  );
}

function Login(props){
  return (
    <form style={{
      height : "83vh",
      paddingTop : "5vh",
      flex : 1,
    }} onSubmit={(e) => {
      e.preventDefault()
    }}>
      <h2 style={{textAlign : "center", color : "white"}}>Already registered - login below</h2>
      <div className={"LoginPanel-input-container"}>Email<input type={"email"} required/></div>
      <div className={"LoginPanel-input-container"}>Password<input type={"password"} required/></div>
      <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Login</button></div>
    </form>
  );
}

export default LoginPanel;
