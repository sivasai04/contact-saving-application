import React from "react";
import {Link} from 'react-router-dom'
class EditContact extends React.Component {

  constructor(props){
    super(props);
    const {id,name,email} = this.props.location.state.contact;
    this.state = {
        id,name,email
    }
  }

  updateName = (e)=>{
    this.setState({name:e.target.value})
  }

  updateEmail = (e)=>{
    this.setState({email:e.target.value})
  }

  update = (e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email==="") {
      alert("Both fields are required");
      return;
    }
    this.props.editContactHandler(this.state);
    this.setState({name:"",email:""});
    this.props.navigation('/');
  }

  render() {
    return (
      <div className="ui main" style={{marginTop: "100px"}}>
        <h2>Edit Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.updateName}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmail}
            />
          </div>
          <div>
          <button className="ui button blue" onClick={(e)=>this.update(e)}>Edit</button>
          <Link to="/"><button className="ui button red">back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default EditContact;
