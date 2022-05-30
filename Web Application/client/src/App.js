import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function App() {

  //registration details
  const [emailIDReg, setEmailIDReg]  = useState('');
  const [passwordReg, setPasswordReg]  = useState('');
  const [usernameReg, setUsernameReg]  = useState('');
  const [picReg, setPicReg]  = useState('');
  const [typeReg, setTypeReg] = useState('');

  //login details
  const [emailID, setEmailID]  = useState('');
  const [password, setPassword]  = useState('');

  //login status
  const [loginStatus, setLoginStatus] = useState('');

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
    });
  };

  //pass login data to backend
  const login = () => {
    Axios.post("http://localhost:3001/login",{
      username: emailID,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      }
      else{
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Login to your Account</h1>
        <label>Email-ID: </label>
        <input type="text" placeholder="abcde123@gmail.com" onChange={(e) => {
        setEmailID(e.target.value);
      }}/>
        <br />
        <br />
        <label>Password: </label>
        <input type="text" placeholder="****" onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <br />
        <br />
        <button onClick={login}>Login</button>
      </div>
      

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
    
      <h1>{loginStatus}</h1>

    </div>
  );
}

export default App;
