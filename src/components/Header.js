import React from "react";
import {header} from '../styles'
const Header = () => {
  
  return (
    <div className="ui fixed menu">
      <div className="ui container center" style={header}>
        <h1>Contact Manager</h1>
      </div>
    </div>
  );
};

export default Header;