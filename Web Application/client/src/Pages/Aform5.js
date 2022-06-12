import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

function Aform5() {


    let resString = "<table border=\"2px solid\"><tr><th>Name</th><th>Request</th><th>Accept/Reject</th></tr>";

    const [test,setTest] = useState('');

    let navigate = useNavigate();
    const { state } = useLocation();
    const { userAppName, profilePhoto, username } = state;
    
    const getForm5 = () => {
        Axios.post("http://localhost:3001/res3").then((response) => {
            console.log(response);
            for(let i=0;i<response.data.length;i++) { 
                resString += "<tr><td>" + response.data[i].name + "</td><td>" + response.data[i].reason + 
                "</td><td>" + "Accept<input type=\"radio\" name=\"decision" + i +"\" id=\"yes\"/>   Reject<input type=\"radio\" name=\"decision" + i +"\" id=\"no\" />"
                + "</td></tr>";
            }
            resString += "</table>"
            console.log(resString);
            document.getElementById("disp").style.display = "block";
            document.getElementById("disp1").style.display = "block";
            document.getElementById("disp").innerHTML = resString;
        });
    };

    const clearForm5 = () => {
        Axios.post("http://localhost:3001/clean3").then((response) =>{
            console.log("Cleaned!");
            window.alert("Notification sent to students!");
            navigate("/facultyProfile", { state: {userAppName: userAppName, profilePhoto: profilePhoto, username: username}});
        })
    };

    return (
        <div>
            <h1>On Duty Form Responses</h1>
            <button onClick={getForm5}>Get Responses</button>
            <br />
            <br />
            <div align="center">
            <div style={{display: "None", margin: "10px", fontSize: "16px"}} id="disp"></div>  
            <br />
            <button style={{display: "None"} } id="disp1" onClick={clearForm5}>Submit Responses</button>          
            </div>
        </div>
    );
}
export default Aform5;