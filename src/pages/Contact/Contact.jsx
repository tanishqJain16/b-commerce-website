import "./Contact.css";
import logo from "../../assets/Logo.svg"
import instagram from "../../assets/socials/instagram.svg"
import twitter from "../../assets/socials/twitter.svg"
import facebook from "../../assets/socials/facebook.svg"
import linkedin from "../../assets/socials/linkedin.svg"
import call from "../../assets/call.svg"
import { useState } from "react";
import { toast } from "react-hot-toast";

function Contact() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [subscribe, setSubscribe] = useState({
        email: ""
    })

    const handleSubsribe = async (e) => {
        setSubscribe({
            ...subscribe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubscribeSubmit = async (e) => {
        e.preventDefault();
        if (subscribe.email === "") {
            toast.error("Email is required for subcription");
        }
        else if (subscribe.email !== "") {
            toast.success("Subscribed successfully");
        }
    }

    const handleOnChange = async (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.firstName === "") {
            toast.error("First Name is required");
        }
        else if (user.lastName === "") {
            toast.error("Last Name is required");
        }
        else if (user.email === "") {
            toast.error("Email is required");
        }
        else if (user.phone === "") {
            toast.error("Phone is required");
        }
        else if (user.phone.length !== 10) {
            toast.error("Phone number should be of 10 digits");
        }
        else if (user.message === "") {
            toast.error("Message is required");
        }

        if (user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.phone !== "" && user.phone.length === 10 && user.message !== "") {
            toast.success("Form submitted successfully");
        }
    }

    return (
        <div className="contact">
            <div className="contactLanding">
                <div className="logo">
                    <img className="logoImg" src={logo} alt="" />
                    <div className="socials">
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="contactForm">
                    <div className="contactHeading">
                        Contact us
                    </div>
                    <div className="name">
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" placeholder="Enter your first name" onChange={handleOnChange}/>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" placeholder="Enter your last name" onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleOnChange}/>
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <div className="phoneInput">
                            <div className="callLogo">
                                <img src={call} alt="" />
                            </div>
                            <input type="number" name="phone" id="phone" placeholder="Enter your phone no." onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Enter your message" onChange={handleOnChange}/>
                    </div>
                    <div className="submit">
                        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="newsLetter">
                <div className="newsLetterHeading">
                    Subscribe to our newsletter
                </div>
                <div className="newsLetterSubHeading">
                    Lorem ipsum dolor sit amet consectetur. Lorem eget vitae lacus diam volutpat.
                </div>
                <div className="emailSubmit">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" onChange={handleSubsribe}/>
                    <button className="submitBtn" onClick={handleSubscribeSubmit}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
