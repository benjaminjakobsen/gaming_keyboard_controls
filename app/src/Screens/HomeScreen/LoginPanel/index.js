import React, {useRef} from 'react';
import './index.css';
import { useHistory } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function LoginPanel(props){
  return (
    <div className={"LoginPanel-main-container"}>
      <CreateAccount />
      <Login/>
    </div>
  );
}

function CreateAccount(props){
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const history = useHistory();
  return (
    <form style={{
      height : "83vh",
      flex : 1,
      paddingTop : "5vh"
    }} onSubmit={(e) => {
      e.preventDefault();
      const body = {
        email : emailRef.current.value,
        username : usernameRef.current.value,
        password : passwordRef.current.value
      };
      fetch(BACKEND_URL + '/users', {
        method : "POST",
        body : JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if(res.ok){
          return res.json();
        }
      }).then((res) => {
        setSessionCookieAndUserID(res.sessionCookie, res.userID);
        history.push("/dashboard");
      }).catch((err) => {
        console.error(err)
      })
    }}>
      <h2 style={{textAlign : "center", color : "white"}}>Not registered - create an account</h2>
      <div className={"LoginPanel-input-container"}>Email*<input ref={emailRef} type={"email"} required/></div>
      <div className={"LoginPanel-input-container"}>Username*<input ref={usernameRef} required/></div>
      <div className={"LoginPanel-input-container"}>Password*<input ref={passwordRef} type={"password"} required onInput={(e) => {
        if(e.currentTarget.value != confirmPasswordRef.current.value){
          confirmPasswordRef.current.setCustomValidity("Passwords must match")
        }else{
          confirmPasswordRef.current.setCustomValidity("")
        }
      }}/></div>
      <div className={"LoginPanel-input-container"}>Confirm password*<input ref={confirmPasswordRef} type={"password"} required onInput={(e) => {
        if(e.currentTarget.value != passwordRef.current.value){
          e.currentTarget.setCustomValidity("Passwords must match")
        }else{
          e.currentTarget.setCustomValidity("")
        }
      }}/></div>
      <div style={{margin : "-4vh auto 2vh auto", width : "fit-content", color : "white"}}>* required fields</div>
      <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Create account</button></div>
    </form>
  );
}

function Login(props){
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  
  const history = useHistory();
  return (
    <form style={{
      height : "83vh",
      paddingTop : "5vh",
      flex : 1,
    }} onSubmit={(e) => {
      e.preventDefault();
      const body = {
        email : emailRef.current.value,
        password : passwordRef.current.value
      };
      fetch(BACKEND_URL + '/login', {
        method : "POST",
        body : JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if(res.ok){
          return res.json()
        }
      }).then((res) => {
        setSessionCookieAndUserID(res.sessionCookie, res.userID);
        history.push("/dashboard");
      }).catch((err) => {
        console.error(err)
      })
    }}>
      <h2 style={{textAlign : "center", color : "white"}}>Already registered - login below</h2>
      <div className={"LoginPanel-input-container"}>Email<input type={"email"} ref={emailRef} required/></div>
      <div className={"LoginPanel-input-container"}>Password<input type={"password"} ref={passwordRef} required/></div>
      <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Login</button></div>
    </form>
  );
}

const setSessionCookieAndUserID = (cookie, userID) => {
  const date =new Date();
  date.setSeconds(date.getSeconds() + 600);
  document.cookie = `session=${cookie}; expires=${date}`;
  document.cookie = `userID=${userID}; expires=${date}`;
}

export default LoginPanel;
