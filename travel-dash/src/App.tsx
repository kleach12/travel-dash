import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import Signup from "./Features/Signup_Login/Signup";
import Dashboard from "./Features/Dashboard/Dashboard";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);
import { getCurrentUser } from 'aws-amplify/auth';

interface User{
  user: Object;
}

function App() {
const [currentUser, setCurrentUser] = useState<User>({user: {}});
const navigate = useNavigate();

useEffect(() => {
  async function currentAuthenticatedUser(){
    try {
      const { username, userId } = await getCurrentUser();
      setCurrentUser(username)
      console.log(currentUser);
      setCurrentUserId(userId)
      console.log(currentUserId);
      if(username){
        return(
          navigate('/Dashboard')
        )
      }
    } catch (err) {
      console.log(err);
    }
  }
  currentAuthenticatedUser()
},[navigate])

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
