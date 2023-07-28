import "./Signup.css"
import cross from "../../assets/cancel.svg"
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import {  useState } from "react";
import googleBig from "../../assets/googleBig.svg"
import facebookBig from "../../assets/facebookBig.svg"
import appleBig from "../../assets/appleBig.svg"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import call from "../../assets/call.svg"

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  });

  const handleOnChange = async(e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(user.firstname==="") {
      toast.error("First Name is required");
    }
  
    else if(user.lastname === "") {
      toast.error("Last Name is required");
    }
  
    else if(user.email === "") {
      toast.error("Email is required");
    }
  
    else if(user.phone === "") {
      toast.error("Phone is required");
    }
    else if(user.phone.length !== 10) {
      toast.error("Phone number should be of 10 digits");
    }
  
    else if(user.password === "") {
      toast.error("Password is required");
    }

    else if(user.password.length < 8) {
      toast.error("Password should be of atleast 8 characters");
    }
  
    else if(user.cpassword === "") {
      toast.error("Confirm Password is required");
    }
    
    else if(user.password !== user.cpassword) {
      toast.error("Password and Confirm Password should be same");
    }

    if(user.firstname !== "" && user.lastname !== "" && user.email !== "" && user.phone !== "" && user.phone.length === 10 && user.password !== "" && user.password.length >= 8 && user.cpassword !== "" && user.password === user.cpassword) {

      toast.success(`Welcome ${user.firstname} ${user.lastname}`);
      console.log(user)

    }

  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const togglecPassword = () => {
    setShowcPassword(!showcPassword);
  }
  return (
    <div className="signup">
      <div className="cross">
        <img src={cross} alt="" />
      </div>
      <div className="heading">
        Sign Up
      </div>
      <div className="signupForm">
        <div className="name">
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstname" placeholder="Enter your first name" onChange={handleOnChange}/>
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastname" placeholder="Enter your last name" onChange={handleOnChange}/>
          </div>
        </div>
        <div className="contacts">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email id" onChange={handleOnChange}/>
          </div>
          <div className="phone">
              <label htmlFor="phone">Phone</label>
              <div className="phoneInput">
                <div className="callLogo">
                  <img src={call} alt="" />
                </div>
                <input type="number" name="phone" placeholder="Enter your phone no." onChange={handleOnChange} />
              </div>
            </div>
        </div>
        <div className="passwordBox">
          <label htmlFor="password">Password</label>
          <div className="password">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleOnChange}/>
            {!showPassword && <AiFillEye onClick={togglePassword} className="eye" />}
            {showPassword && <AiFillEyeInvisible onClick={togglePassword} className="eye" />}
          </div>
          <div className="cpassword">
            <input type={showcPassword ? "text" : "password"} name="cpassword" placeholder="Confirm Password" onChange={handleOnChange}/>
            {!showcPassword && <AiFillEye onClick={togglecPassword} className="eye" />}
            {showcPassword && <AiFillEyeInvisible onClick={togglecPassword} className="eye" />}
          </div>
        </div>
        <div className="agreementBox">
          <input className="checkBox" type="checkbox" />
          <label htmlFor="checkBox">I agree to receive product offers, updates sent by Beautica. Unsubscribe anytime.</label>
        </div>
        <button className="signupBtn" onClick={handleSubmit}>
          Sign Up
        </button>
        <div className="haveAccount">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
      <div className="orText">
        <div className="line"></div>
        <div className="or">OR</div>
        <div className="line"></div>
      </div>
      <div className="otherOptions">
        <img src={googleBig} alt="" />
        <img src={facebookBig} alt="" />
        <img src={appleBig} alt="" />
      </div>
      <div className="tandc">
      By signing up, you agree to our <br /> <a href="#">Terms of Service</a> & <a href="#">Privacy policy.</a>
      </div>
    </div>
  )
}

export default Signup
