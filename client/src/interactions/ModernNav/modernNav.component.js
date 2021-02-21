//Framework
import React, {useState} from 'react';
import {Link} from "react-router-dom";
//Styles
import {
  Nav,
  NavButton,
  NavIcon,
  NavText,
  Burger,
} from "./modernNav.styles";

export const ModernNav = ({toggleMenuOpen}) => {
    return (
      <>
        <Nav>
          <Link to="/" style={{ display: "inherit" }}>
            <NavButton>
              <NavIcon className="uil uil-home" />
            </NavButton>
            <NavText>Home</NavText>
          </Link>
          <Link to="/hipal" style={{ display: "inherit" }}>
            <NavButton>
              <NavIcon className="uil uil-home" />
            </NavButton>
            <NavText>Message</NavText>
          </Link>
        </Nav>
        <Burger onClick={toggleMenuOpen} className="uil uil-bars" />
      </>
    );
};

