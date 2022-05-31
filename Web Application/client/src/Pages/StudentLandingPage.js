import React from "react";
import { useLocation } from "react-router-dom"; 
import "./StudentLandingPage.css";

function StudentLandingPage() {
    
    let location = useLocation()
    const { state } = useLocation();
    const { userAppName, profilePhoto } = state;

    return (
        <div className="StudentLandingPage">
            <h1>Student Landing Page</h1>            
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

export default StudentLandingPage;