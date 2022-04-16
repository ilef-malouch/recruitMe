import Navbar from "./components/navbar/Navbar";  
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from "./components/jobs/Jobs";
import Tips from "./components/tips/Tips";
import FormR from "./components/Form/FormSignUpRecruter/FormR";
import FormI from "./components/Form/FormSignIn/FormI";
import Form from "./components/Form/FormSignUpClient/Form"

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
                        <Route exact path="/signup" element={<Form />} />
                        <Route exact path="/signuprecruit" element={<FormR />} />
                        <Route exact path="/signin" element={<FormI />} />
                    </Routes>
                </>
            </div>
        </BrowserRouter>
    );
}

export default App;