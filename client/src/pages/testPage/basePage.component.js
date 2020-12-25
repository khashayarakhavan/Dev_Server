//Framework
import React, { useState } from "react";
import { Link } from "react-router-dom";
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//State Selector
// import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectMenuOpen } from "../../redux/vegeloperPage/vegeloperPage.selectors";
//Actions
// import { checkUserSession } from "./redux/user/user.actions";
import { toggleMenuOpen } from "../../redux/vegeloperPage/vegeloperPage.actions";
//Libraries
import styled, { css } from "styled-components";
import { rgba } from "polished";
//Styles
import {Content, Nav, Phone, Burger, NavButton, NavIcon, NavText} from './basePage.styles';
//Interactions
import SlideUpDialog from '../../interactions/SlideUp/slideUp.component';
import LazyCard from '../../interactions/LazyCard/lazyCard.component';
import TabbedCard from '../../interactions/TabbedCard/tabbedCard.component';
import ToolTip from '../../interactions/ToolTip/toolTip.component';
import RichTextCard from '../../interactions/richTextCard/richTextCard.component';
import CountryPicker from '../../interactions/CountryPicker/countryPicker.component';
import Skeleton from '../../interactions/Skeleton/skeletonScreen.component';



const BasePage = ({ menuOpen, toggleMenuOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Content open={menuOpen}>
        <Burger onClick={toggleMenuOpen} className="uil uil-bars" />
        <LazyCard />
        <TabbedCard />
        <Link to={"/email"} className="emailMe">
          <ToolTip />
        </Link>
        <Link to={"/"} className="homePage">
        <Skeleton />
        </Link>

        <RichTextCard />
        <CountryPicker />
        {/* <SlideUpDialog /> */}
      </Content>
    </Phone>
  );
};

const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  menuOpen: selectMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // checkUserSession: () => dispatch(checkUserSession()),
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
});



export default connect(mapStateToProps, mapDispatchToProps)(BasePage);