import React, {useRef} from 'react';
import './index.css';
import {
  useHistory
} from 'react-router-dom'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function EditProfile(props){
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const history = useHistory();
  return (
    <>
      <form style={{
        flex : 1,
        paddingTop : "5vh"
      }} onSubmit={(e) => {
        e.preventDefault();
        const body = {
          data : {},
          auth : {
            userId : window.readCookie("userID"),
            sessionCookie : window.readCookie("session")
          }
        };
        if(emailRef.current.value != "") body.data.email = emailRef.current.value;
        if(usernameRef.current.value != "") body.data.username = usernameRef.current.value;
        if(passwordRef.current.value != "") body.data.password = passwordRef.current.value;
        alert("Updated: " + (() => {
          let res = [];
          for(const key in body.data){
            res.push(key);
          }
          return res.join(", ");
        })());
        fetch(BACKEND_URL + `/users`, {
          method : "PATCH",
          body : JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          },
        }).then((res) => {
          if(res.ok){
            return res.json();
          }
        }).then((res) => {
          history.push("/dashboard");
        }).catch((err) => {
          console.error(err)
        })
      }}>
        <h2 style={{textAlign : "center", color : "black"}}>Update account information</h2>
        <div className={"LoginPanel-input-container"}>Email<input ref={emailRef} type={"email"}/></div>
        <div className={"LoginPanel-input-container"}>Username<input ref={usernameRef}/></div>
        <div className={"LoginPanel-input-container"}>Password<input ref={passwordRef} type={"password"} onInput={(e) => {
          if(e.currentTarget.value != confirmPasswordRef.current.value){
            confirmPasswordRef.current.setCustomValidity("Passwords must match")
          }else{
            confirmPasswordRef.current.setCustomValidity("")
          }
        }}/></div>
        <div className={"LoginPanel-input-container"}>Confirm password<input ref={confirmPasswordRef} type={"password"} onInput={(e) => {
          if(e.currentTarget.value != passwordRef.current.value){
            e.currentTarget.setCustomValidity("Passwords must match")
          }else{
            e.currentTarget.setCustomValidity("")
          }
        }}/></div>
        <div style={{margin : "auto", width : "fit-content"}}><button className={"LoginPanel-button"} type={"submit"}>Save</button></div>
      </form>
    </>
  );
}

export default EditProfile;
