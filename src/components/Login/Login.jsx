import "./Login.css"
import cross from "../../assets/cancel.svg"
import google from "../../assets/google.svg"
import facebook from "../../assets/facebook.svg"
import apple from "../../assets/apple.svg"
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = async(e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(user.email === "") {
            toast.error("Email is required");
        }
        else if(user.password === "") {
            toast.error("Password is required");
        }

        if(user.email !== "" && user.password !== "") {
            toast.success("Login Successful");
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="login">
            <div className="cross">
                <img src={cross} alt="" />
            </div>
            <div className="heading">
                Log in
            </div>
            <div className="socials">
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={apple} alt="" />
            </div>
            <div className="orText">
                <div className="line"></div>
                <div className="or">OR</div>
                <div className="line"></div>
            </div>
            <div className="loginForm">
                <div className="email">
                    <label htmlFor="email">Email or phone</label>
                    <input type="email" name="email" placeholder="Enter your email or phone no." onChange={handleOnChange}/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="passwordInput">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your Password" onChange={handleOnChange}/>
                        {!showPassword && <AiFillEye onClick={togglePassword} className="eye" />}
                        {showPassword && <AiFillEyeInvisible onClick={togglePassword} className="eye" />}
                    </div>
                    <div className="forgotPassword">
                        <p>Forgot Password?</p>
                    </div>
                </div>
                <div className="rememberMe">
                    <input type="checkbox" />
                    <p>Remember me for next time</p>
                </div>
                <button className="loginBtn" onClick={handleSubmit}>
                    Login
                </button>
                <div className="noAccount">             {/* eslint-disable-next-line */}
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
            <Link to="/product">Product</Link>
        </div>
    )
}

export default Login
