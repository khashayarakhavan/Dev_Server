//Basics
import React from 'react';
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { signOutStart } from "../../../redux/user/user.actions";
//Components
import CartDropdown from '../../complex/cart-dropdown/cart-dropdown.component';
//Design
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
import {
  HigherContainer,
  HeaderContainer,
  LogoContainer,
  LogoSVG,
  LogoLine,  
  LogoText,
  MenuButton,
  MenuButtonOrange,
  MenuButtonsContainer
} from './header.styles';


//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    <HigherContainer>
    <HeaderContainer id="topMenu">
      <LogoContainer variant="active" to="/">
        <LogoSVG />
        <LogoLine />
        <LogoText>vegeloper</LogoText>
      </LogoContainer>
      <MenuButtonsContainer>
        <MenuButtonOrange variant="active" to="/sayHi">
          /say
          <PrussianBlue_To_Orange>Hi</PrussianBlue_To_Orange>
      
        </MenuButtonOrange>
        <MenuButton to="/aboutMe">
          /about
          <PrussianBlue_To_Orange>Me</PrussianBlue_To_Orange>
        </MenuButton>
        <MenuButton to="/myWorks">
          /my
          <PrussianBlue_To_Orange>Works</PrussianBlue_To_Orange>
        </MenuButton>
      </MenuButtonsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
    </HigherContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
