//Framework
import React, {useState} from 'react';
import {Link} from "react-router-dom";
//Styles
import {
  Nav,
  NavButton,
  NavIcon,
  NavText,
  NavLabel,
  NavLabelContainer,
  Burger,
} from "./modernNav.styles";

export const ModernNav = ({open, toggleMenuOpen}) => {
    return (
      <>
        <Nav>
          <Link to="/" style={{ display: "inherit" }}>
            <NavButton>
              <NavIcon className="uil uil-estate" />
            </NavButton>
            <NavText>Home</NavText>
          </Link>
          <Link to="/hipal" style={{ display: "inherit" }}>
            <NavButton>
              <NavIcon className="uil uil-message" />
            </NavButton>
            <NavText>Message</NavText>
          </Link>
        </Nav>
        {/* <Burger
          open={open}
          onClick={toggleMenuOpen}
          className="burger uil uil-bars"
        /> */}
       
          <NavLabel for="check" open={open}>
            <input type="checkbox" id="check" onClick={toggleMenuOpen} />
            <span></span>
            <span></span>
            <span></span>
          </NavLabel>
       
      </>
    );
};

