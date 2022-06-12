import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function StudentViewReq() {
    
    let navigate = useNavigate();
    const { state } = useLocation();
    const { userAppName, profilePhoto, username } = state;

    const [form1Status,setForm1Status] = useState('');
    const [form2Status,setForm2Status] = useState('');
    const [form3Status,setForm3Status] = useState('');
    const [form4Status,setForm4Status] = useState('');
    const [form5Status,setForm5Status] = useState('');

    const ans1 = () => {
        Axios.post("http://localhost:3001/get1", {
            username: userAppName
        }).then((response) => {
            console.log(response);
            setForm1Status(response.data.message);
        });
    };

    const ans2 = () => {
        Axios.post("http://localhost:3001/get2", {
            username: userAppName
        }).then((response) => {
            setForm2Status(response.data.message);
        });
    };

    const ans3 = () => {
        Axios.post("http://localhost:3001/get3", {
            username: userAppName
        }).then((response) => {
            setForm3Status(response.data.message);
        });
    };
        const ans4 = () => {
        Axios.post("http://localhost:3001/get4", {
            username: userAppName
        }).then((response) => {
            setForm4Status(response.data.message);
        });
    };

    const ans5 = () => {
        Axios.post("http://localhost:3001/get5", {
            username: userAppName
        }).then((response) => {
            setForm5Status(response.data.message);
        });
    
    };
    return (
        <div>
            <h1>View Pending Requests</h1>
            <div>
                <button onClick={ans1}>Hostel Leave Form:</button> 
                <span>  {form1Status}</span>
            </div>
            <br />
            <div>
                <button onClick={ans2}>Early Leave Form:</button> 
                <span>  {form2Status}</span>
            </div>
            <br />
            <div>
                <button onClick={ans3}>On Duty Form:</button> 
                <span>  {form3Status}</span>
            </div>
            <br />
            <div>
                <button onClick={ans4}>Original Document Form:</button> 
                <span>  {form4Status}</span>
            </div>
            <br />
            <div>
                <button onClick={ans5}>Other Permission Requests Form:</button> 
                <span>  {form5Status}</span>
            </div>
        </div>
    );
}
export default StudentViewReq;