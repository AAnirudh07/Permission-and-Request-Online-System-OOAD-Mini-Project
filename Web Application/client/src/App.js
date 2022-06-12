import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/LoginRegister";
import StudentLandingPage from "./Pages/StudentLandingPage";
import FacultyLandingPage from "./Pages/FacultyLandingPage";
import ErrorPage from "./Pages/ErrorPage";
import Form1 from "./Pages/Form1";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form1 />} />
                <Route path="/studentProfile" element={<StudentLandingPage />} />
                <Route path="/facultyProfile" element={<FacultyLandingPage />} />
                <Route path="/form1" element={<Form1 />}></Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );

}

export default App;