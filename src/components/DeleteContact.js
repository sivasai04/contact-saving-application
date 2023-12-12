import React, { useEffect,useRef} from "react";
import {overlay,dialogBox} from "../styles"

const DeleteContact = (props)=>{
    const onYes = ()=> props.getConfirmation(1);

    const onNo = ()=>props.getConfirmation(2);

    let delRef = useRef();

    useEffect(()=>{
        const handler = (e)=>{
            if(!delRef.current.contains(e.target))
            props.getConfirmation(3);
        }
        document.addEventListener("mousedown",handler);

        return ()=>{
            document.removeEventListener("mousedown",handler);
        }
    });

    return(
        
           <div style={overlay}>
                <div style={dialogBox} ref={delRef}>
                    <h1>Do you want to delete contact {props.name}</h1>
                    <div className="content" style={{display:"inline-flex",justifyContent:"center"}}>
                        <button className="ui button green" onClick={onYes}>Yes</button>
                        <button className="ui button red" onClick={onNo}>No</button>
                    </div>
                </div>
           </div>
    );
};

export default DeleteContact;