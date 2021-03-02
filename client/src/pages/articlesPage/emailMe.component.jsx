//Framework
import React, {useState} from 'react';
//State Management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//State Selector
import {
  selectMenuOpen,
  selectPopUpOpen,
} from "../../redux/vegeloperPage/vegeloperPage.selectors";
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
import {VegeloperContainer} from "../../design/containers.styles";
//Sections
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';
//Components
import MiniCards from "../../components/complex/section/MiniCards/MiniCards.component";
import TopMenu from '../../components/Sections/header/header.component';
import Heading from '../../components/Sections/Heading/heading.component';
import ScrollHorizontal from '../../components/Sections/ScrollHorizontal/scrollHorizontal.component';
import HeroHeader from "../../components/complex/hero-header/heroHeader.component";
import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';


//Code
const EmailMeContent = ({ menuOpen, toggleMenuOpen, popUpOpen, togglePopUp }) => {

  return (
    <VegeloperContainer id="test">
      <TopMenu />
      <HeroHeader.LeftContainer name="firstInsideContainer" />
      <HeroHeader.RightContainer />
      <ScrollDownCTA />
      <Heading />
      <Element name="test1" className="element" />
      <YouTube />
      <Element name="test2" className="element" />
      <ScrollHorizontal />
      <Projects />
      <MiniCards />
    </VegeloperContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  menuOpen: selectMenuOpen,
  popUpOpen: selectPopUpOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
  togglePopUp: value => dispatch(togglePopUp(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailMeContent);










































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