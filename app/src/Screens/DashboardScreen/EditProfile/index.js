import React, {useRef} from 'react';
import './index.css';
import {
  useHistory
} from 'react-router-dom'
import customFetch from 'services/requests'

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
        const body = {};
        if(emailRef.current.value != "") body.email = emailRef.current.value;
        if(usernameRef.current.value != "") body.username = usernameRef.current.value;
        if(passwordRef.current.value != "") body.password = passwordRef.current.value;
        customFetch("/users", body, (res) => {
          alert("Updated: " + (() => {
            let res = [];
            for(const key in body){
              res.push(key);
            }
            return res.join(", ");
          })());
          sessionStorage.setItem("user", JSON.stringify(res.user));
          history.push("/dashboard");
        }, {
          method : "PATCH"
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
