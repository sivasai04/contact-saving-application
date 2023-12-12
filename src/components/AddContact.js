import React from "react";
import {Link} from 'react-router-dom'
class AddContact extends React.Component {
  state = {
    name:"",
    email:"",
  }
  updateName = (e)=>{
    this.setState({name:e.target.value})
  }

  updateEmail = (e)=>{
    this.setState({email:e.target.value})
  }

  add = (e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email==="") {
      alert("Both fields are required");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""});
    this.props.navigation('/');
  }

  render() {
    return (
      <div className="ui main" style={{marginTop: "100px"}}>
        <h2>Add Contact</h2>
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
          <button className="ui button blue" onClick={(e)=>this.add(e)}>Add</button>
          <Link to="/"><button className="ui button red">back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;