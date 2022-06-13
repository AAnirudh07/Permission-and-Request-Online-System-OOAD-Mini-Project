import React, { useState } from "react";
import Axios from "axios";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";

function LoginRegister() {

  let navigate = useNavigate();

  //registration details
  const [emailIDReg, setEmailIDReg]  = useState('');
  const [passwordReg, setPasswordReg]  = useState('');
  const [usernameReg, setUsernameReg]  = useState('');
  const [picReg, setPicReg]  = useState('');
  const [typeReg, setTypeReg] = useState('');

  //login details
  const [emailID, setEmailID]  = useState('');
  const [password, setPassword]  = useState('');

  //login and register status
  const [loginStatus, setLoginStatus] = useState('');
  const [regStatus, setRegStatus] = useState('');


  //pass register data to backend
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: emailIDReg,
      password: passwordReg,
      userAppName: usernameReg,
      profilePhoto:  picReg,
      userType: typeReg,
    }).then((response) => {
      console.log(response);
      setRegStatus(response.data.message);
    });
  };

  //pass login data to backend
  const login = () => {
    Axios.post("http://localhost:3001/login",{
      username: emailID,
      password: password,
    }).then((response) => {
      //console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      }
      else{

        if(response.data[0].userType=="Student") {
          navigate("/studentProfile", 
          { state: { userAppName: response.data[0].userAppName, profilePhoto: response.data[0].profilePhoto, username: response.data[0].username } });
        }
        else {
          navigate("/facultyProfile", 
          { state: { userAppName: response.data[0].userAppName, profilePhoto: response.data[0].profilePhoto, username: response.data[0].username } });
        }
      }
    });
  };

  return (
    <div className="LoginRegister">
      <div className="login">
        <h1>Login to your Account</h1>
        <label>Email-ID: </label>
        <input id="uname" type="text" name="email" placeholder="abcde123@gmail.com" onChange={(e) => {
        setEmailID(e.target.value);
      }}/>
        <br />
        <br />
        <label>Password: </label>
        <input type="text" placeholder="****" name="password" onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <br />
        <br />
        <button onClick={login}>Login</button>
      </div>
      <h1 style={{color: "red"}}>{loginStatus}</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="registration">
      <h1>Create an Account</h1>
      <div>
        <label>User Type: </label>
        <br />
        Student<input type="radio" checked={typeReg=="Student"} onChange={() => setTypeReg("Student")} />
        <br />
        Faculty<input type="radio" checked={typeReg=="Faculty"} onChange={() => setTypeReg("Faculty")} />
      </div>
      <br />
      <label>Email-ID:   </label>
      <input type="text" onChange={(e) => {
        setEmailIDReg(e.target.value);
      }}/>
      <br />
      <br />
      <label>Password:   </label>
      <input type="text" onChange={(e) => {
        setPasswordReg(e.target.value);
      }}/>
      <br />
      <br />
      <label>Username: </label>
      <input type="text" onChange={(e) => {
        setUsernameReg(e.target.value);
      }}/>
      <br />
      <br />
      <label>Profile Pic: </label>
      <input type="text" onChange={(e) => {
        setPicReg(e.target.value);
      }}/>
      <br />
      <br />
      <button onClick={register}>Register</button>
      </div>
      <h1>{regStatus}</h1>
    </div>
  );
}

export default LoginRegister;