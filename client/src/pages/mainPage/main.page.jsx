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
import { LandingPageContainer } from "./main.styles";
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
} from "./main.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import {Phone, Nav, NavButton, NavIcon, NavText, Burger, Content} from './main.styles';
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
} from "../../interactions/SlideUp/slideUp.styles";

import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import { ScrollLinkCustom } from "./main.styles";

import {TransitionLink} from '../../interactions/TransitionLink/transitionLink.styles';
import {ModernNav} from '../../interactions/ModernNav/modernNav.component';
import Section_Skill from '../../components/Sections/skills/skills.component';
import FlexIcons from '../../components/Sections/FlexIcons/flexIcons.component';
import {SlideUpButtonJelly} from '../../interactions/SlideUpButtonJelly/slideUpButtonJelly.component';
import Footer from '../../components/Sections/Footer/footer.component';
const VegeloperPage = ({ menuOpen, toggleMenuOpen, popUpOpen, togglePopUp }) => {
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  
  return (
    <Phone>
      {/* <Nav style={{flexDirection: "column"}}>
        <Link to="/" style={{display: "inherit"}}>
          <NavButton>
            <NavIcon className="uil uil-home" />
          </NavButton>
          <NavText>Home</NavText>
        </Link>
        <Link to="/hipal" style={{display: "inherit"}}>
          <NavButton>
            <NavIcon className="uil uil-home" />
          </NavButton>
          <NavText>Message</NavText>
        </Link>
      </Nav>
      <Burger onClick={toggleMenuOpen} className="uil uil-bars" /> */}
      <ModernNav toggleMenuOpen={toggleMenuOpen} />

      <SlideUpButtonJelly popUpOpen={popUpOpen} togglePopUp={togglePopUp} />

      <Content className="main_page-content" open={menuOpen}>
        <MainContainer className="main_page-container" id="test">
          <TopMenu />
          <HeroHeader.LeftContainer name="firstInsideContainer" />
          <HeroHeader.RightContainer />
          <ScrollDownCTA />
          <Heading
            cta="play"
            subCta="just hit "
            text="Wanna know me in a minute?"
          />
          <Element name="test1" className="element" />
          <YouTube />
          <Element name="test2" className="element" />
          <Section_Skill />
          {/* <FlexIcons /> */}
          <Heading cta="read " subCta="more details" text="Recent Projects" inverted zeroMarginBottom/>
          <ScrollHorizontal />
          {/* <Projects /> */}
          <MiniCards />
          <Footer />
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
        </MainContainer>
      </Content>
    </Phone>
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

export default connect(mapStateToProps, mapDispatchToProps)(VegeloperPage);





//  <Overlay isOpen={popUpOpen} onClick={togglePopUp} />
//       <Dialog isOpen={popUpOpen}>
//         <DialogContent>
//           <Header>
//             {/* <Title style={{ gridColumn: "1/2" }}>
//               Need to know more about me? headphones on ! 🎧
//             </Title> */}
//             {/* <Title style={{ gridColumn: "2/3" }}>
//               or have an awesome project!?✨🚀
//             </Title> */}
//             <span
//               style={{
//                 gridColumn: "3/4",
//                 background: "white",
//                 borderRadius: "50%",
//               }}
//               className="material-icons"
//               onClick={() => togglePopUp(false)}
//             >
//               close
//             </span>
//           </Header>

//           {/*
//            */}

//           <GridContainerWrapper>
//             <Message>
//               No Waffles<span style={{ color: "#EB5E28", margin: 0 }}>.</span>
//               {/* <span style={{ fontSize: "3.5rem" }}>ASAP?</span>{" "} */}
//               <span style={{ fontSize: "1.5rem", fontFamily: "Poppins" }}>
//                 <br />
//                 Just follow these steps . . .
//               </span>
//               <SubMessage>Need more info?</SubMessage>
//               <ReadMore>Read more</ReadMore>
//             </Message>

//             <GridContainer style={{ gridRow: "1/-1" }}>
//               <LocalLeft
//                 style={{ marginBottom: "1rem" }}
//                 onClick={() => togglePopUp(false)}
//                 activeClass="active"
//                 to="test1"
//                 spy={true}
//                 smooth={true}
//                 offset={-300}
//                 duration={1000}
//               >
//                 <Circle backColor="#f4cbbd" delay="0s" duration="3s">
//                   1
//                 </Circle>
//                 <SubLocal>
//                   {" "}
//                   <FontAwesomeIcon
//                     icon={faPlayCircle}
//                     style={{ color: "orange", marginRight: "2rem" }}
//                   />
//                   videoResume
//                 </SubLocal>
//                 {/* <NumberCircle>hi</NumberCircle> */}
//               </LocalLeft>

//               <LocalCenter
//                 style={{ marginBottom: "1rem" }}
//                 href="https://storage.googleapis.com/shaja-267509.appspot.com/ReactDeveloper_Canada.pdf"
//                 target="_newtab"
//               >
//                 <Circle backColor="darksalmon" delay="0.2s" duration="3s">
//                   2
//                 </Circle>
//                 <SubLocal>
//                   <FontAwesomeIcon
//                     icon={faDownload}
//                     style={{ color: "pink", marginRight: "2rem" }}
//                   />
//                   pdfCV
//                 </SubLocal>
//               </LocalCenter>

//               <LocalRight to="/hiPal" onClick={() => togglePopUp(false)}>
//                 <Circle backColor="coral" delay="0.4s" duration="3s">
//                   3
//                 </Circle>
//                 <SubLocal style={{ marginBottom: "0rem" }}>
//                   <FontAwesomeIcon
//                     icon={faPaperPlane}
//                     style={{ color: "plum", marginRight: "2rem" }}
//                   />
//                   directMe
//                 </SubLocal>
//               </LocalRight>
//             </GridContainer>
//           </GridContainerWrapper>

//           {/* <CodeRow>
//             <CodeInput placeholder="0" />
//             <CodeDash>-</CodeDash>
            
//           </CodeRow> */}
//           {/* <GradientButton onClick={togglePopUp}>Submit</GradientButton> */}
//         </DialogContent>
//       </Dialog>






































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