//Framework
import React, {useState} from 'react';
//State Management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Selectors
import {
  selectMenuOpen,
  selectPopUpOpen,
} from "../../redux/vegeloperPage/vegeloperPage.selectors";
import {
  selectRichTextMessageAsHTML,
  selectCustomerCountry,
} from "../../redux/messageMe/messageMe.selectors";
//Actions
import {
  toggleMenuOpen,
  togglePopUp,
} from "../../redux/vegeloperPage/vegeloperPage.actions";
//Libraries
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
//Containers
import { HiPalContainer } from "./hiPal.styles";
//Sections
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';
//Components
import SignInUp from '../../components/Sections/emailMe/emailMe.component';
// import RichTextSection from '../../components/Sections/richText/richText.component';
import MessageMe from '../../components/Sections/messageMe/messageMe.component';
import MiniCards from "../../components/complex/section/MiniCards/MiniCards.component";
import TopMenu from '../../components/Sections/header/header.component';
import Heading from '../../components/Sections/Heading/heading.component';
import ScrollHorizontal from '../../components/Sections/ScrollHorizontal/scrollHorizontal.component';
import HeroHeader from "../../components/complex/hero-header/heroHeader.component";
import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import PasswordValidator from '../../interactions/passwordValidator/passwordValidator.component';

//Code
const HiPalContent = ({richTextMessageAsHTML, customerCountry, menuOpen, toggleMenuOpen, popUpOpen, togglePopUp }) => {
  
  const handleSubmit = async () => {
    //Test
    console.log('IT WORKS');
  }

  return (
    <HiPalContainer className="HiPalContainer" id="test">
      <TopMenu />
      <Heading text="I believe in myself." />
      <MessageMe />
      {/* <PasswordValidator /> */}
      {/* <button onClick={handleSubmit}>CLICK TO LOG</button> */}
      <SignInUp />
      {/*
      <Projects />
      <Heading /> */}

      {/* <HeroHeader.LeftContainer name="firstInsideContainer" />
      <HeroHeader.RightContainer />
      <ScrollDownCTA />
      
      <Element name="test1" className="element" />
      <YouTube />
      <Element name="test2" className="element" />
      <ScrollHorizontal />
      
      <MiniCards /> */}
    </HiPalContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  menuOpen: selectMenuOpen,
  popUpOpen: selectPopUpOpen,
  customerCountry: selectCustomerCountry,
  richTextMessageAsHTML: selectRichTextMessageAsHTML,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
  togglePopUp: value => dispatch(togglePopUp(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HiPalContent);










































// <ScrollContainer>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
// </ScrollContainer>;