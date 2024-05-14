import "./Signup.css";
import SignupColumn from "./SignupColumn";
import hawaii from "./hawaii.jpg";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
function Signup() {
  return (
    <div id="signup">
      <div id="amp_auth">
      <h1 id="site_name" className="sedan">
        Travel Dash
      </h1>
        <Authenticator></Authenticator>
      </div>
      <img id="signup_image" src={hawaii}></img>
    </div>
  );
}

export default Signup;
