import "./SignupColumn.css";
import InfoInput from "./InfoInput";

export default function SignupColumn() {
  return (
    <div id="signup_column">
      <h1 id="site_name" className="sedan">
        Travel Dash
      </h1>
      <h2 className="sedan">Sign in or create and account</h2>
      <p className="sedan"> Welcome back! Please enter your details</p>
      <form id="auth_form">
        <InfoInput placeholderValue ={'Name'}/>
        <InfoInput placeholderValue ={'Email Address'}/>
        <button id="signup_button" className="sedan">
          Continue
        </button>
      </form>
    </div>
  );
}
