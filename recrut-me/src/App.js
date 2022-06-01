import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./components/jobs/Jobs";
import Tips from "./components/pages/Tips/Tips";
import FormRecruter from "./components/Form/FormSignUpRecruter/Form";
import FormSignInClient from "./components/Form/FormSignInClient/Form";
import FormSignInRecruter from "./components/Form/FormSignInRecruter/Form";
import FormClient from "./components/Form/FormSignUpClient/Form";
import React from "react";
import NavbarComp from "./components/navbar/NavbarComp";
import ClientProfile from "./components/profile/ClientProfile";
import RecruterProfile from "./components/profile/RecruterProfile";
import  Footer  from "./components/footer/Footer";
import AddJobOffer from "./components/jobs/AddJobOffer";
import JobDetails from './components/jobs/jobDetails'
import Quizes from "./components/pages/quizes/Quizes";
import ReactQuiz from "./components/pages/quizes/ReactQuiz";
import AngularQuiz from "./components/pages/quizes/AngularQuiz";
import SpringbootQuiz from "./components/pages/quizes/SpringbootQuiz" ;
import PythonQuiz from "./components/pages/quizes/PythonQuiz";
import Fail from "./components/pages/quizes/Fail";
import SuccessReact from "./components/pages/quizes/SuccessReact";
import SuccessAngular from "./components/pages/quizes/SuccessAngular";
import SuccessSpringboot from "./components/pages/quizes/SuccessSpringboot";
import SuccessPython from "./components/pages/quizes/SuccessPython";
import Candidatures from "./components/profile/Candidatures";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarComp />
                <>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/jobs" element={<Jobs />} />
                        <Route exact path="/signup-client" element={<FormClient />} />
                        <Route exact path="/signup-recruter" element={<FormRecruter />} />
                        <Route exact path="/signin-client" element={<FormSignInClient />} />
                        <Route exact path="/addoffer" element={<AddJobOffer />} />
                        <Route exact path="/job/:id" element={<JobDetails />} />
                        <Route
                            exact
                            path="/signin-recruter"
                            element={<FormSignInRecruter />}
                        />
                        <Route exact path="/tips" element={<Tips />} />
                        <Route exact path="/client-profile" element={<ClientProfile />} />
                        <Route
                            exact
                            path="/recruter-profile"
                            element={<RecruterProfile />}
                        />
                        <Route exact path="/quizes" element={<Quizes />} />
                        <Route exact path="/quizes/React" element={<ReactQuiz />} />
                        <Route exact path="/quizes/React/success" element={<SuccessReact />} />
                        <Route exact path="/quizes/React/fail" element={< Fail />} />
                        <Route exact path="/quizes/Angular" element={<AngularQuiz />} />
                        <Route exact path="/quizes/Angular/success" element={<SuccessAngular />} />
                        <Route exact path="/quizes/Angular/fail" element={< Fail />} />
                        <Route exact path="/quizes/SpringBoot" element={<SpringbootQuiz />} />
                        <Route exact path="/quizes/Springboot/success" element={<SuccessSpringboot />} />
                        <Route exact path="/quizes/Springboot/fail" element={< Fail />} />
                        <Route exact path="/quizes/Python" element={<PythonQuiz />} />
                        <Route exact path="/quizes/Python/success" element={<SuccessPython />} />
                        <Route exact path="/quizes/Python/fail" element={< Fail />} />
                        <Route exact path="/candidatures/:id" element={< Candidatures />} />
                    </Routes>
                </>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
