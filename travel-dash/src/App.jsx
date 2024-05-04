import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Signup from "./Features/Signup_Login/Signup";
import Dashboard from "./Features/Dashboard/Dashboard";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);
import { getCurrentUser } from 'aws-amplify/auth';
import { redirect } from "react-router-dom";

function App() {
const [currentUser, setCurrentUser] = useState(null);
const [currentUserId, setCurrentUserId] = useState(null);

async function currentAuthenticatedUser(){
  try {
    const { username, userId } = await getCurrentUser();
    setCurrentUser(username)
    console.log(currentUser);
    setCurrentUserId(userId)
    console.log(currentUserId);
    if(username){
      return(
        redirect('/Dashboard')
      )
    }
  } catch (err) {
    console.log(err);
  }
}
currentAuthenticatedUser()
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
