import React from "react";
import { useLocation } from "react-router-dom";
import "./FacultyLandingPage.css";

function facultyLandingPage() {
    
    let location = useLocation()
    const { state } = useLocation();
    const { userAppName, profilePhoto } = state;

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

        </div>
    );
}

export default facultyLandingPage;