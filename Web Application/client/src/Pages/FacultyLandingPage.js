import React from "react";
import { useLocation } from "react-router-dom";
import "./FacultyLandingPage.css";
import { useNavigate } from "react-router-dom";

function facultyLandingPage() {
    
    let location = useLocation()
    const { state } = useLocation();
    const { userAppName, profilePhoto } = state;
    let navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }
    
    const goto1 = () => {
        navigate("/aform1",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });        
    }

    const goto2 = () => {
        navigate("/aform2",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                
    }

    const goto3 = () => {
        navigate("/aform3",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                        
    }
    const goto4 = () => {
        navigate("/aform4",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                                
    }
    const goto5 = () => {
        navigate("/aform5",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                        
    }

    return (
        <div className="FacultyLandingPage">
            <h1>Faculty Landing Page</h1>            
            <h2>You are logged in</h2>
            <div>
                <p>
                    <h3>{userAppName}</h3>
                    <img src={profilePhoto} alt="user profile photo" />
                </p>
            </div>
            <button onClick={goto1}>View Hostel Leave Requests</button>
            <button style={{margin:10}} onClick={goto2}>View Early Leave Requests</button>
            <button style={{margin:10}} onClick={goto3}>View On-Duty Requests</button>
            <button style={{margin:10}} onClick={goto4}>View Document Requests</button>
            <button style={{margin:10}} onClick={goto5}>View Other General Requests</button>
            <br />
            <br />
            <button onClick={logout}>Logout</button>

        </div>
    );
}

export default facultyLandingPage;