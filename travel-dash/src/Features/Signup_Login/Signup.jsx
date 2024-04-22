import "./Signup.css";
import SignupColumn from "./SignupColumn";
import hawaii from './hawaii.jpg'
function Signup() {
  return (
    <div id="signup">
    <SignupColumn/>
    <img id = 'signup_image' src={hawaii}></img>
    </div>
  );
}

export default Signup;
