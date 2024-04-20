import { Route, Routes } from "react-router-dom";
// import { useState } from 'react'
import { Signup } from "./Features/Signup_Login/Signup";
import {Dashboard} from './Features/Dashboard/Dashboard';
import "./App.css";

function App() {
  return (
    <div id="main">
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
