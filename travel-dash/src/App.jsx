import { Route, Routes } from "react-router-dom";
// import { useState } from 'react'
import Signup from "./Features/Signup_Login/Signup";
import Dashboard from "./Features/Dashboard/Dashboard";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

function App() {
  return (
      <div id="main">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
  );
}

export default App;
