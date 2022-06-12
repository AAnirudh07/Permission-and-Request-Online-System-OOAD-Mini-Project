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
                    <input type="text" id="name" name="name" placeholder="Your name.." pattern="' '|[a-zA-Z ]*" required />
                    <label for="phoneno">Phone number</label>
                    <input name="contact number" type="number" placeholder="Your mobile no.." pattern="[0-9]{1,10}" required />
                    <label for="email">Mail Id</label>
                    <input type="email" id="email" name="mailid" placeholder="Your mail id.." required />
                    <label for="year">Year</label>
                    <input type="number" id="year" name="year" pattern="[1-4]" placeholder="Enter Year" required /><br /><br />
                    <label for="dept">Department</label>
                    <input type="text" id="dept" name="dept" placeholder="Your Department.." pattern="' '|[a-zA-Z ]*" required /><br /><br />
                    <label>Original Documents Request Form</label>
                    <input type="checkbox" name="type" value="Early Leave Form" checked required />
                    <br /><br /> 
    
                    <label for="request">Documents Name</label>
                    <input type="text" id="request" name="request" placeholder="Documents name here..." />
                    <label for="reason">Type the reason </label>
                    <input type="text" id="reason" name="reason" placeholder="Your Reason here..." required />
                    <br /><br />
                    <br /><br />
                    <input type="submit" value="Submit" onClick={request}/>
                    <input type="reset" />
            </div>
      </div>
    
                        );
}

export default Form4;