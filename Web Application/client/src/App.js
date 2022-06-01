import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/LoginRegister";
import StudentLandingPage from "./Pages/StudentLandingPage";
import FacultyLandingPage from "./Pages/FacultyLandingPage";
import ErrorPage from "./Pages/ErrorPage";
import form1 from "./Pages/form1";
import form2 from "./Pages/form2";
import form3 from "./Pages/form3";
import form4 from "./Pages/form4";
import form5 from "./Pages/form5";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister />} />
                <Route path="/studentProfile" element={<StudentLandingPage />} />
                <Route path="/facultyProfile" element={<FacultyLandingPage />} />
                <Route path="/form1" element={form1}></Route>
                <Route path="/form2" element={form2}></Route>
                <Route path="/form3" element={form3}></Route>
                <Route path="/form4" element={form4}></Route>
                <Route path="/form5" element={form5}></Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );

}

export default App;