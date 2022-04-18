import Navbar from "./components/navbar/Navbar";  
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from "./components/jobs/Jobs";
import Tips from "./components/tips/Tips";
import FormRecruter from "./components/Form/FormSignUpRecruter/Form";
import FormSignIn from "./components/Form/FormSignIn/Form";
import FormClient from "./components/Form/FormSignUpClient/Form";
import React from "react"

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <Navbar />
                < >
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/jobs" element={<Jobs />} />
                        <Route exact path="/tips" element={<Tips />} />
                        <Route exact path="/signup-client" element={<FormClient />} />
                        <Route exact path="/signup-recruter" element={<FormRecruter />} />
                        <Route exact path="/signin" element={<FormSignIn />} />
                    </Routes>
                </>
            </div>
        </BrowserRouter>
    );
}

export default App;