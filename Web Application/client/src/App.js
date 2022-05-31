import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/LoginRegister";
import StudentLandingPage from "./Pages/StudentLandingPage";
import FacultyLandingPage from "./Pages/FacultyLandingPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister />} />
                <Route path="/studentProfile" element={<StudentLandingPage />} />
                <Route path="/facultyProfile" element={<FacultyLandingPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );

}

export default App;