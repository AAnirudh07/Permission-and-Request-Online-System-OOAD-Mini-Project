import React, { useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./FacultyRequestPage.css";
import { useNavigate } from "react-router-dom";

function FacultyRequestPage() {

    let location = useLocation()
    const { state } = useLocation();
    const { uname, reason } = state;
    const { action, setaction } = useState('');

    const request = () => {
        Axios.post("http://localhost:3001/res1", {
            	uname: uname,
        }).then((response) => {
            console.log(response);
        })
    }
    return (
        <div className="facultyreqpage">
            <h1>Faculty Request Page</h1>
            <h2>Approve or Deny the request</h2>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Request</th>
                        <th>Decision</th>
                    </tr>
                    <tr>
                        <td>{uname}</td>
                        <td>{reason}</td>
                        <td>
                            <input type="radio" id="yes" name="decision" value="yes"></input>
                                <label for="yes">YES</label>
                                <input type="radio" id="no" name="decision" value="no"></input>
                                    <label for="no">NO</label>
                                </td>
                            </tr>
                        </table>
                    </div>

            </div>
            );
}

export default FacultyRequestPage;