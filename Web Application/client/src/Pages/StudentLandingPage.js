import React from "react";
import { useLocation } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import "./StudentLandingPage.css";

function StudentLandingPage() {
    
    let navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }
    
    const goto1 = () => {
        navigate("/form1",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });        
    }

    const goto2 = () => {
        navigate("/form2",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                
    }

    const goto3 = () => {
        navigate("/form3",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                        
    }
    const goto4 = () => {
        navigate("/form4",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                                
    }
    const goto5 = () => {
        navigate("/form5",{ state: { userAppName: userAppName, profilePhoto: profilePhoto } });                        
    }


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
            <br />
            <br />
            <button onClick={goto1}>Hostel Leave Form [Hostelers]</button>
            <button style={{margin:10}} onClick={goto2}>Early Leave Form [Day Scholars]</button>
            <button style={{margin:10}} onClick={goto3}>On-Duty Form</button>
            <button style={{margin:10}} onClick={goto4}>Documents Request Form</button>
            <button style={{margin:10}} onClick={goto5}>Other Permissions</button>
            <br />
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default StudentLandingPage;