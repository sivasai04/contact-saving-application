import React from "react";
import ContactCard from './ContactCard'
import { Link } from "react-router-dom";
import {listheader,searchheader,liststyle,addButtonstyle} from "../styles"


const ContactList = (props)=>{

    
    const deleteContactHandler = (id,name)=>{
        props.getDelContactId(id,name);
    };

    const getSearchTerm = (e)=>{
        props.searchKeyword(e.target.value);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact = {contact} key = {contact.id} clickHandler={deleteContactHandler}/>;
    }
    );
    return(
        <div className="main" style={{marginTop:"80px",justifyContent:"center",zIndex:"-1"}}>
            <div style={listheader}>
                <div><h2>Contact List</h2></div>
                <Link to={"/add"}>
                <button style={addButtonstyle}>Add Contact</button>
                </Link>
            </div>
            <div style={searchheader}>
            <div className="ui search">
                <div className="ui icon input" style={{width:"300px"}}>
                    <input type = "text" className="promt" placeholder="Search Contact" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div></div> 
            <div style={liststyle}>{renderContactList.length>0?renderContactList:"No Contacts Available"}</div>
        </div>
    );
}
export default ContactList;
