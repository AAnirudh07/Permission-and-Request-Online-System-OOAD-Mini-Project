import React, { useState } from "react";
import Axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";

function Form3() {

    let navigate = useNavigate();

    //registration details
    const [name, setname] = useState('');
    const [phno, setphno] = useState('');
    const [emailID, setEmailID] = useState('');
    const [year, setyear] = useState('');
    const [reason, setreason] = useState('');
    const [dep, setdep] = useState('');
    const [tdate, settdate] = useState('');
    const [ftime, setftime] = useState('');
    const [ttime, setttime] = useState('');
    const [reasonletter, setreasonletter] = useState('');



    const request = () => {
        Axios.post("http://localhost:3001/req3", {
            uname: name,
            uphno: phno,
            uemailID: emailID,
            uyear: year,
            ureason: reason,
            udep: dep,
            utdate: tdate,
            uftime: ftime,
            uttime: ttime,
            letter: reasonletter
        }).then((response) => {
            console.log(response);
        });
    };


      return (
        <div>
        <h1>On-Duty Form</h1>
        <br /><br />
            <div className="container">
                    <label for="fname">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." pattern="' '|[a-zA-Z ]*"
                       required />
                    <label for="phoneno">Phone number</label>
                    <input name="contact number" type="number" placeholder="Your mobile no.."
                        pattern="[0-9]{1,10}" required />
                        <label for="email">Mail Id</label>
                        <input type="email" id="email" name="mailid" placeholder="Your mail id.." required />
                    <label for="year">Year</label>
                    <input type="number" id="year" name="year" pattern="[1-4]" placeholder="Enter Year" required /><br /><br />
                    <label for="dept">Department</label>
                    <input type="text" id="dept" name="dept" placeholder="Your Department.." pattern="' '|[a-zA-Z ]*"
                       required /><br /><br />
                       <label>On Duty Request Form</label>
                       <input type="checkbox" name="type" value="Early Leave Form" checked required />
                       <br /><br />
                    <label>Date On Duty:</label><br />
                    <input name="date" id="date" type="date" required /><br />
                    <label for="time">Starting Time</label>
                    <input type="text" id="from" name="from" placeholder="Enter from time.." required />
                    <label for="time">Ending Time</label>
                    <input type="text" id="to" name="to" placeholder="Enter to time.." required />
                    <label for="reason">Type the reason </label>
                    <input type="text" id="reason" name="reason" placeholder="Your Reason here..." required />
                    <label>Proof Document(mandatory):</label>
                    <input type="text" name = "proof" value="Proof letter" required /> 
                    <br /><br />
                    <input type="submit" value="Submit" onClick={request} />
                    <input type="reset" />
            </div>
      </div>
      );
}
export default Form3;