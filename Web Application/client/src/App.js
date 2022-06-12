import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/LoginRegister";
import StudentLandingPage from "./Pages/StudentLandingPage";
import FacultyLandingPage from "./Pages/FacultyLandingPage";
import ErrorPage from "./Pages/ErrorPage";
import Form1 from "./Pages/Form1";
import Form2 from "./Pages/Form2";
import Form3 from "./Pages/Form3";
import Form4 from "./Pages/Form4";
import Form5 from "./Pages/Form5";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form5 />} />
                <Route path="/studentProfile" element={<StudentLandingPage />} />
                <Route path="/facultyProfile" element={<FacultyLandingPage />} />
                <Route path="/form1" element={<Form1 />}></Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );

}

export default App;