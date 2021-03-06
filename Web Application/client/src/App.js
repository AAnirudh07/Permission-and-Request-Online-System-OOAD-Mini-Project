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
import StudentViewReq from "./Pages/StudentViewReq";
import Aform1 from "./Pages/Aform1";
import Aform2 from "./Pages/Aform2";
import Aform3 from "./Pages/Aform3";
import Aform4 from "./Pages/Aform4";
import Aform5 from "./Pages/Aform5";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister />} />
                <Route path="/studentProfile" element={<StudentLandingPage />} />
                <Route path="/studentView" element={<StudentViewReq />} />
                <Route path="/facultyProfile" element={<FacultyLandingPage />} />
                <Route path="/form1" element={<Form1 />}></Route>
                <Route path="/form2" element={<Form2 />}></Route>
                <Route path="/form3" element={<Form3 />}></Route>
                <Route path="/form4" element={<Form4 />}></Route>
                <Route path="/form5" element={<Form5 />}></Route>
                <Route path="/aform1" element={<Aform1 />}></Route>
                <Route path="/aform2" element={<Aform2 />}></Route>
                <Route path="/aform3" element={<Aform3 />}></Route>
                <Route path="/aform4" element={<Aform4 />}></Route>
                <Route path="/aform5" element={<Aform5 />}></Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );

}

export default App;