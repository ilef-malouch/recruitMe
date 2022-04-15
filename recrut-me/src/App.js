import Navbar from "./components/navbar/Navbar";  
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from "./components/jobs/Jobs";
import Tips from "./components/tips/Tips";
import FormSignupRecruter from "./components/Form/FormSignUpRecruter/FormSignupRecruter";
import FormSignin from "./components/Form/FormSignIn/FormSignin";
import FormSignup from "./components/Form/FormSignUpClient/FormSignup";
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
                        <Route exact path="/signuprecruit" element={<FormSignupRecruter />} />
                        <Route exact path="/signin" element={<FormSignin />} />
                    </Routes>
                </>
            </div>
        </BrowserRouter>
    );
}

export default App;