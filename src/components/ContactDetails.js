import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props)=>{
    const {name,email} = props.location.state.contact;
    
    return(
        <div className="main" style={{justifyContent:"center"}}>
            <div className="ui container" style={{justifyContent:"center",marginTop:"100px"}}>
            <div className="ui card centered" style={{marginTop:"100px"}}>
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <div style={{textAlign:"center"}}><Link to="/"><button className="ui button green centered">Back</button></Link></div>
            </div>
        </div>
    );
};


export default ContactDetails;
