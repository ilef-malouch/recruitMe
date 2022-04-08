import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import FormSignup from './components/Form/FormSignup';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<FormSignup />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);


