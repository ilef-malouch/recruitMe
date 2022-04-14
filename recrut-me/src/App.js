import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import FormSignup from "./components/Form/FormSignUpClient/FormSignup"
import FormSignin from "./components/Form/FormSignIn/FormSignin"
import FormSignupRecruter from "./components/Form/FormSignUpRecruter/FormSignupRecruter"

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/signup" element={<FormSignup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<FormSignin />} />
      <Route path="/signupRecruter" element={<FormSignupRecruter />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
