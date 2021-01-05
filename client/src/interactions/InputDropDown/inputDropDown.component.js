//Basics
import React, { useState } from "react";
import './inputDropDown.css';

// import { Input, Placeholder, Wrapper} from "./inputDropDown.styles";

const InputDropDown = ({grid}) => {
  return (
    <div className="container">
      <button className="btn">
        <div className="innerFrame" >
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </div>
        <ul className="dropdown">
          <li className="active">
            <a href="#">Profile Information</a>
          </li>
          <li>
            <a href="#">Change Password</a>
          </li>
          <li>
            <a href="https://codepen.io/pro">
              Become <b>PRO</b>
            </a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </button>
    </div>
  );
};


export default InputDropDown;