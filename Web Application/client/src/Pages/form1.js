import React, { useState } from "react";
import Axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Form1() {

    let navigate = useNavigate();
    const { state } = useLocation();
    const { userAppName, profilePhoto } = state;


    //registration details
    const [name, setname] = useState('');
    const [phno, setphno] = useState('');
    const [emailID, setEmailID] = useState('');
    const [year, setyear] = useState('');
    const [reason, setreason] = useState('');
    const [fdate, setfdate] = useState('');
    const [tdate, settdate] = useState('');
    const [reasonletter, setreasonletter] = useState('');
    const [dep, setdep] = useState('');

    const request = () => {
        Axios.post("http://localhost:3001/req1", {
            uname: name,
            uphno: phno,
            uemailID: emailID,
            uyear: year,
            ureason: reason,
            ufdate: fdate,
            utdate: tdate,
            letter: reasonletter,
            udep: dep
        }).then((response) => {
            if(response.data.message == "Success!") {
              window.alert(response.data.message);
              navigate("/studentProfile",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });
            }
            else{
              window.alert(response.data.message);
            }
        });
    };


      return (
        <div>
            <h1>Hostel Leave Form</h1>
            <br />
            <br />
            <div className="container">
              <label>Name *</label>
              <input type="text" id="name" name="name" placeholder="Your name.." pattern="' '|[a-zA-Z ]*" required onChange={(e) => {
                setname(e.target.value);}}/>
              <label>Phone number</label>
              <input name="contact number" type="number" placeholder="Your mobile no.." pattern="[0-9]{1,10}" required onChange={(e) => {
                setphno(e.target.value);}}/>
              <label>Mail Id</label>
              <input type="email" id="email" name="mailid" placeholder="Your mail id.." required onChange={(e) => {
                  setEmailID(e.target.value);}} />
                  <br />
                  <label>Department</label>
                <input type="text" id="dept" name="dept" placeholder="Your Department.." pattern="' '|[a-zA-Z ]*"
                   required onChange={(e) => {setdep(e.target.value);}}/>
                   <br />
              <label>Year</label>
              <input type="number" id="year" name="year" pattern="[1-4]" placeholder="Enter Year" required onChange={(e) => {
                  setyear(e.target.value);}} />
              <br />
              <br />
              <label>Date Leaving:</label><br />
              <input name="from" id="from" type="date" required onChange={(e) => {setfdate(e.target.value);}}/>
              <br />
              <label>Date Returning:</label><br />
              <input name="to" id="to" type="date" required onChange={(e) => {settdate(e.target.value);}}/>
              <br /><br /><br />
              <label>Type the reason </label>
              <input type="text" id="reason" name="reason" placeholder="Your Reason here..." required onChange={(e) => {
                    setreason(e.target.value);}} />
              <label>Request letter:</label>
              <input type="text" name="proof" onChange={(e) => {
                setreasonletter(e.target.value);}}/> 
              <br />
              <br />
              <input type="submit" value="Submit" onClick={request}/>
              <input type="reset" />
            </div>
        </div>
    );
}
export default Form1;