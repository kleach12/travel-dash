import "./SignupColumn.css";
import InfoInput from "./InfoInput";
import { useState } from "react";

export default function SignupColumn() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState("");
  
function handleName(e){
    setNameValue(e.target.value)
}
function handleEmail(e){
    setEmailValue(e.target.value)
}

console.log(nameValue,emailValue)

  return (
    <div id="signup_column">
      <h1 id="site_name" className="sedan">
        Travel Dash
      </h1>
      <h2 className="sedan">Sign in or create and account</h2>
      <p className="sedan"> Welcome back! Please enter your details</p>
      <form id="auth_form">
        <InfoInput placeholderValue={"Name"} valueFunction = {handleName} val = {nameValue}/>
        <InfoInput placeholderValue={"Email Address"} valueFunction = {handleEmail} val = {emailValue}/>
        <button id="signup_button" className="sedan">
          Continue
        </button>
      </form>
    </div>
  );
}
