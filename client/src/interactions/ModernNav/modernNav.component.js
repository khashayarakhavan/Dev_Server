//Framework
import React, {useState} from 'react';
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
          <NavButton>
            <NavIcon className="uil uil-home" />
          </NavButton>
          <NavText>Home</NavText>
        </Nav>
        <Burger onClick={toggleMenuOpen} className="uil uil-bars" />
      </>
    );
};

