import React from "react";
import '../css/footer.css';
import {Instagram,Twitter,Facebook} from 'react-bootstrap-icons';
function Footer(){
    return (<>
    <section className="Container">
        <div className="Intro">
            <h6 className="Header1">ˈLīˌ<span>bre</span>rē</h6>
            <h6 className="message">The Online E-library</h6>
            <h6 className="terms policy">TERMS OF SERVICE POLICY</h6>

            </div>
        <div className="contact">
        <h3 className="Header">Get in touch</h3>
        <h6 className="message">At all platforms</h6>
            <div className="Links">   
            <div className="terms contacts">
            <p className="ref"><Instagram /></p>
            <p className="ref"><Twitter /></p>
            <p className="ref"><Facebook /></p>
            </div>
                </div>
        

            </div>
        <div className="login">
        <h3 className="Header">Be a member</h3>
        <h3 className="box1">Name</h3>
        <input className="box" autoComplete="off" type="text" name="name"></input>
        <h3 className="box1">E-mail</h3>
        <input className="box" autoComplete="off" type="email" name="email" ></input>
        <button className="signUp" >Sign up</button>
            </div>
        <div className="explore">
        <h3 className="Header">Explore</h3>
        <h6 className="Home">Home</h6>
        <h6 className="Categories">Categories</h6>
        <h6 className="Books">Books</h6>
        <h6 className="Authors">Authors</h6>

            </div>
    </section>
    </>)
}
export default Footer