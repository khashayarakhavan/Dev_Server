//Basics
import React, { useState } from "react";
import { Textfit } from "react-textfit";
import './inputDropDown.css';

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// import { Input, Placeholder, Wrapper} from "./inputDropDown.styles";

const InputDropDown = ({grid, setOpen, isOpen, country}) => {
let rand = getRandomNumberBetween(1, 3);
  return (
    <div className="container" >
      <button
        className="btn"
        id="countryPickerButton"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="innerFrame">
          <div style={{ width: `85%`, textAlign: "left" }}>
            <Textfit mode="multi" forceSingleModeWidth={false} max={"10"}>
              <span>
                {country === "" ? (
                  `your project helps ...`
                ) : (
                  <div>
                    <span className="country--selected">{country.split(",")[0]}</span>

                    <span style={{ transition: `all 2.3s` }}>
                      {rand === 1
                        ? ` is aaamazing!!`
                        : rand === 2
                        ? (<span > is aawesome!!</span>)
                        : ` is charming!!!`}
                    </span>
                  </div>
                )}
              </span>
            </Textfit>
          </div>
          <i className="material-icons">public</i>
        </div>
        {/* <ul className="dropdown">
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
        </ul> */}
      </button>
    </div>
  );
};


export default InputDropDown;