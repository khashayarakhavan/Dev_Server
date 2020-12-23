import React from 'react';
import {NavContainer} from './burgerMenu.styles';

const Template = () => {
    return (
       <NavContainer>
           <input type="checkbox" className="navigation__checkbox" id="navigation-toggle"/>
           <label htmlFor="navigation-toggle" className="navigation__button">
               <span className="navigation__icon">&nbsp;</span>
           </label>
       </NavContainer>
    );
};

export default Template;