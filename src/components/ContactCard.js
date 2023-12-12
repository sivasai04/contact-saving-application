import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";

const ContactCard = (props)=>{
    const {id,name,email} = props.contact;
    const returnId = ()=> props.clickHandler(id,name);

    const cardstyle = {
        borderBottom: "1px solid #e0e0e0",
        padding: "20px",
        display: "flex",
        alignItems: "center"
    };

    const contactinfo = {
        flex: "1"
    }

    const imagestyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "20px"
    }

    return(
       
    <div style={cardstyle}>
            <img style = {imagestyle} src={user} alt={"user"}/>
            <div style = {contactinfo}>
                <Link to={{pathname:`/contact/${id}`}} state={{contact:props.contact}}>
                    <div style={{color:"black"}}>{name}</div>
                </Link>
                <div style={{color: "#777"}}>{email}</div>
            </div>
            
            <div className="item" style={{display:"inline-flex",justifyContent:"center",alignContent:"center",cursor:"pointer",color:"red"}}>
                <Link to={{pathname:`/editcontact`}} state={{contact:props.contact}}>
                    <i className="edit alternate outline icon" />
                    </Link>
                <i className="trash alternate outline icon" onClick={returnId}/>
            </div>
    </div>
    );
};

export default ContactCard;
