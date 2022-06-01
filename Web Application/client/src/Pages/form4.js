import React, { useState } from "react";
import Axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";

function form4() {

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
            <h1 style="font-size: 50px;color: rgb(2, 51, 51);">Hostel Leave Form</h1>
            <br /><br />
            <h2 style="font-family:'Lucida Sans';">
                <div class="container">
                    <label for="fname">Name *</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." pattern="' '|[a-zA-Z ]*"
                        oninvalid="alert('Please enter valid data');" required onChange={(e) => {
                            setname(e.target.value);}}/>
                    <label for="phoneno">Phone number</label>
                    <input name="contact number" type="number" placeholder="Your mobile no.."
                       pattern="[0-9]{1,10}" required onChange={(e) => {
                        setphno(e.target.value);
                      }}/>
                    <label for="email">Mail Id</label>
                    <input type="email" id="email" name="mailid" placeholder="Your mail id.." required onChange={(e) => {
                        setEmailID(e.target.value);
                    }} />
                    <label for="year">Year</label>
                    <input type="number" id="year" name="year" pattern="[1-4]" 
                    placeholder="Enter Year" required onChange={(e) => {
                        setyear(e.target.value);
                      }} /><br /><br />
                    <label>Department:</label><br />
                    <input name="from" id="from" type="date" required onChange={(e) => {
        setdep(e.target.value);
      }}/><br />
                   
        <label>Documents needed: <input type="text" name="documents" value="Documents" 
                         onChange={(e) => {
                            setdocuments(e.target.value);
                          }}/> </label>
                        <label for="reason">Type the reason </label>
                        <textarea id="reason" name="reason" placeholder="Your Reason here..."
                            style="height: 100px;" required onChange={(e) => {
                                setreason(e.target.value);
                              }}></textarea>
                        
                        <br><br>
                            <input type="submit" value="Submit" />
                            <input type="reset" />
                        </div>
                        </h2>
                    </div>

                        );
}

                        export default form4;