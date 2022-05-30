import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="login">
        <h1>Login to your Account</h1>
        <label>Email-ID: </label>
        <input type="text" placeholder="abcde123@gmail.com"/>
        <br />
        <br />
        <label>Password: </label>
        <input type="text" placeholder="****"/>
        <br />
        <br />
        <button>Login</button>
      </div>

      <div className="registration">
      <h1>Create an Account</h1>
      <label>Email-ID:   </label>
      <input type="text" />
      <br />
      <br />
      <label>Password:   </label>
      <input type="text" />
      <br />
      <br />
      <label>Username: </label>
      <input type="text" />
      <br />
      <br />
      <label>Profile Pic: </label>
      <input type="text" />
      <br />
      <br />
      <button>Register</button>
      </div>
    </div>
  );
}

export default App;
