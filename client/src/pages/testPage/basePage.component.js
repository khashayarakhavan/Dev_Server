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
import {
  toggleMenuOpen,
  emailRichText,
} from "../../redux/vegeloperPage/vegeloperPage.actions";
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



const BasePage = ({ menuOpen, toggleMenuOpen, emailRichText }) => {
  const [open, setOpen] = useState(false);

  const bookBtn = document.getElementById("book-tour");

  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      e.target.textContent = "Processing...";
      /* javascript automatically converts the kebab-cased variables to camelCased variable  */
      /* so here instead of tour-id we use tourId alongwith ES6 destructuring */
      // const { tourId } = e.target.dataset;
      // bookTour(tourId);
    });
  }
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
        <button id="book-tour">Click to process</button>
        <TabbedCard />
        <Link to={"/email"} className="emailMe">
          <ToolTip />
        </Link>
        <Link to={"/"} className="homePage">
          <Skeleton />
        </Link>

        <RichTextCard />
        <button onClick={() => emailRichText()}>Send Email!</button>
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
  emailRichText: (value) => dispatch(emailRichText(value)),
});



export default connect(mapStateToProps, mapDispatchToProps)(BasePage);