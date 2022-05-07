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
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
