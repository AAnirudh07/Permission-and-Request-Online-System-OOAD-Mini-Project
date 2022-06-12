import React, { useState } from "react";
import Axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";

function Form4() {

    let navigate = useNavigate();

    //registration details
    const [name, setname] = useState('');
    const [phno, setphno] = useState('');
    const [emailID, setEmailID] = useState('');
    const [year, setyear] = useState('');
    const [reason, setreason] = useState('');
    const [dep, setdep] = useState('');
    const [tdate, settdate] = useState('');
    const [time, settime] = useState('');
    const [documents, setdocuments] = useState('');



    const request = () => {
        Axios.post("http://localhost:3001/req4", {
            uname: name,
            uphno: phno,
            uemailID: emailID,
            uyear: year,
            ureason: reason,
            udep: dep,
            utdate: tdate,
            utime: time,
            udocuments: documents
        }).then((response) => {
            console.log(response);
        });
    };


      return (
        <div>
        <h1>Original Documents Request Form</h1>
        <br /><br />
            <div className="container">
                    <label for="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." pattern="' '|[a-zA-Z ]*" required onChange={(e) => {setname(e.target.value);}}/>
                    <label for="phoneno">Phone number</label>
                    <input name="contact number" type="number" placeholder="Your mobile no.." pattern="[0-9]{1,10}" required onChange={(e) => {setphno(e.target.value);}}/>
                    <label for="email">Mail Id</label>
                    <input type="email" id="email" name="mailid" placeholder="Your mail id.." required onChange={(e) => {setEmailID(e.target.value);}}/>
                    <label for="year">Year</label>
                    <input type="number" id="year" name="year" pattern="[1-4]" placeholder="Enter Year" required onChange={(e) => {setyear(e.target.value);}}/><br /><br />
                    <label for="dept">Department</label>
                    <input type="text" id="dept" name="dept" placeholder="Your Department.." pattern="' '|[a-zA-Z ]*" required onChange={(e) => {setdep(e.target.value);}}/><br /><br />
                    <label>Original Documents Request Form</label>
                    <input type="checkbox" name="type" value="Early Leave Form" checked required />
                    <br /><br /> 
                    <label>Date</label><br />
                    <input name="from" id="from" type="date" required onChange={(e) => {settdate(e.target.value);}}/><br />
                    <label for="time">Time</label>
                    <input type="text" id="time" name="time" placeholder="Enter time.." required onChange={(e) => {settime(e.target.value);}}/>    
                    <label for="request">Documents Name</label>
                    <input type="text" id="request" name="request" placeholder="Documents name here..." onChange={(e) => {setdocuments(e.target.value);}}/>
                    <label for="reason">Type the reason </label>
                    <input type="text" id="reason" name="reason" placeholder="Your Reason here..." required onChange={(e) => {setreason(e.target.value);}}/>
                    <br /><br />
                    <br /><br />
                    <input type="submit" value="Submit" onClick={request}/>
                    <input type="reset" />
            </div>
      </div>
    
                        );
}

export default Form4;