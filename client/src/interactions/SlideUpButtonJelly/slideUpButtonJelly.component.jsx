import React, {useState} from 'react';
import {Link} from "react-router-dom";
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
import { LandingPageContainer } from "./slideUpButtonJelly.styles";
import TopMenu from '../../components/Sections/header/header.component';
import Heading from '../../components/Sections/Heading/heading.component';
import ScrollHorizontal from '../../components/Sections/ScrollHorizontal/scrollHorizontal.component';
import HeroHeader from "../../components/complex/hero-header/heroHeader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane, faDownload, faPlayCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
// import HeroHeaderLeftContainer ,{
//   HeroHeaderRightContainer,
// } from "../../components/complex/hero-header/heroHeader.component";

//Section
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';

//Styles
import {
  MainContainer,
} from "./slideUpButtonJelly.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import {Phone, Nav, NavButton, NavIcon, NavText, Burger, Content} from './slideUpButtonJelly.styles';
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
  SubMessage,
  CodeRow,
  CodeInput,
  CodeDash,
  GradientButton,
  GridContainerWrapper,
  GridContainer,
  LocalLeft,
  LocalRight,
  LocalCenter,
  SubLocal,
  NumberCircle,
  Circle,
  ReadMore
} from "interactions/SlideUp/slideUp.styles";


export const SlideUpButtonJelly = ({ popUpOpen, togglePopUp }) => {
  return (
    <>
      <Overlay
        className="slide-up-overlay"
        isOpen={popUpOpen}
        onClick={togglePopUp}
      />
      <Dialog className="slide-up-dialog" isOpen={popUpOpen}>
        <DialogContent className="slide-up-dialog-content">
          <Header className="slide-up-header">
            <span
              style={{
                gridColumn: "3/4",
                background: "white",
                borderRadius: "50%",
              }}
              className="material-icons"
              onClick={() => togglePopUp(false)}
            >
              close
            </span>
          </Header>

          <GridContainerWrapper className="grid-container-wrapper">
            <Message className="slide-up-message">
              No Waffles<span style={{ color: "#EB5E28", margin: 0 }}>.</span>
              <span style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}>
                <br />
                Just follow these steps . . .
              </span>
            </Message>

            <GridContainer className="grid-container">
              <LocalLeft
                className="grid-local-left"
                style={{ marginBottom: "1rem" }}
                onClick={() => togglePopUp(false)}
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={-300}
                duration={1000}
              >
                <Circle backColor="#f4cbbd" delay="0s" duration="3s">
                  1
                </Circle>
                <SubLocal>
                  <div>
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      style={{ color: "orange" }}
                    />
                    <span>1min-video</span>
                  </div>
                </SubLocal>
              </LocalLeft>

              <LocalCenter
                className="grid-local-center"
                style={{ marginBottom: "1rem" }}
                href="https://storage.googleapis.com/shaja-267509.appspot.com/ReactDeveloper_Canada.pdf"
                target="_newtab"
              >
                <Circle backColor="darksalmon" delay="0.2s" duration="3s">
                  2
                </Circle>
                <SubLocal>
                  <div>
                    <FontAwesomeIcon
                      icon={faDownload}
                      style={{ color: "pink" }}
                    />
                    <span>PDF Resume</span>
                  </div>
                </SubLocal>
              </LocalCenter>

              <LocalRight
                className="grid-local-right"
                to="/hiPal"
                onClick={() => togglePopUp(false)}
              >
                <Circle
                  className="local-right-circle"
                  backColor="coral"
                  delay="0.4s"
                  duration="3s"
                >
                  3
                </Circle>

                <SubLocal
                  className="local-right--sub"
                  style={{ marginBottom: "0rem" }}
                >
                  <div>
                    <FontAwesomeIcon
                      className="local-right-faIcon"
                      icon={faPaperPlane}
                      style={{ color: "plum" }}
                    />
                    <span>directMe</span>
                  </div>
                </SubLocal>
              </LocalRight>
            </GridContainer>
            <ReadMore className="slide-up-read-more">
              <div>
                <SubMessage className="slide-up-message--sub">
                  Need more info?
                </SubMessage>
                <Link to="/aboutMe" onClick={() => togglePopUp(false)}>
                  Read more
                </Link>
              </div>
            </ReadMore>
          </GridContainerWrapper>
        </DialogContent>
      </Dialog>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SlideUpButtonJelly);












































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