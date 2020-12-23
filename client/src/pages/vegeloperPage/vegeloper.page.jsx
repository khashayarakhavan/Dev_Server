import React, {useState} from 'react';
import styled, { css } from "styled-components";
import {rgba} from 'polished';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import Features from "../../components/complex/section/feature/feature.component";
import MiniCards from "../../components/complex/section/MiniCards/MiniCards.component";
import SectionFooter from "../../components/complex/section/landing.footer/landing.footer.component";
import SectionHome from "../../components/complex/section/landing.home/landing.home.component";
import Cards from "../../components/Sections/Cards/Cards.component";
import Skills from "../../components/Sections/skills/skills.component";
import SectionStoriesPicture from "../../components/complex/section/stories-picture/stories-picture.component";
import { LandingPageContainer } from "./vegeloper.styles";
import TopMenu from '../../components/Sections/header/header.component';
import Heading from '../../components/Sections/Heading/heading.component';
import ScrollHorizontal from '../../components/Sections/ScrollHorizontal/scrollHorizontal.component';
import HeroHeader from "../../components/complex/hero-header/heroHeader.component";
// import HeroHeaderLeftContainer ,{
//   HeroHeaderRightContainer,
// } from "../../components/complex/hero-header/heroHeader.component";

//Section
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';

//Styles
import {
  VegeloperContainer,
} from "./vegeloper.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import {Phone, Nav, NavButton, NavIcon, NavText, Burger, Content} from './vegeloper.styles';
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//State Selector
import {
  selectMenuOpen,
  selectPopUpOpen,
} from "../../redux/vegeloperPage/vegeloperPage.selectors";
//Actions
// import { checkUserSession } from "./redux/user/user.actions";
import {
  toggleMenuOpen,
  togglePopUp,
} from "../../redux/vegeloperPage/vegeloperPage.actions";
//Styles
import {
  Frame,
  Button,
  ButtonIcon,
  Overlay,
  Dialog,
  DialogContent,
  Header,
  Title,
  Message,
  CodeRow,
  CodeInput,
  CodeDash,
  GradientButton,
} from "../../interactions/SlideUp/slideUp.styles";

import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import {ScrollLinkCustom} from './vegeloper.styles';

const VegeloperPage = ({ menuOpen, toggleMenuOpen, popUpOpen, togglePopUp }) => {
  
  const scrollToTop = () => {
    scroll.scrollToTop();
    
  };

  
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Burger onClick={toggleMenuOpen} className="uil uil-bars" />

      <Overlay isOpen={popUpOpen} onClick={togglePopUp} />
      <Dialog isOpen={popUpOpen}>
        <DialogContent>
          <Header>
            <Title>Need a Call?</Title>
            <span className="material-icons" onClick={() => togglePopUp(false)}>
              close
            </span>
          </Header>
          <Message>Please Enter Your Phone Number </Message>
          <CodeRow>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
          </CodeRow>
          <GradientButton onClick={togglePopUp}>Submit</GradientButton>
        </DialogContent>
      </Dialog>

      <Content open={menuOpen}>
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
          {/* <ScrollLinkCustom
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h1>2nd</h1>
          </ScrollLinkCustom> */}
        </VegeloperContainer>
      </Content>
    </Phone>
  );
};




const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  menuOpen: selectMenuOpen,
  popUpOpen: selectPopUpOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // checkUserSession: () => dispatch(checkUserSession()),
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
  togglePopUp: value => dispatch(togglePopUp(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VegeloperPage);


// const VegeloperPage = () => (
//   <VegeloperContainer>
//     <Header />
//     <HeroHeaderLeftContainer />
//     <HeroHeaderRightContainer />
//     <ScrollDownCTA />
//     <Heading/>
//     <YouTube />
//     <ScrollHorizontal/>
//     <Projects />
//     <MiniCards />
//   </VegeloperContainer>
// );











































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