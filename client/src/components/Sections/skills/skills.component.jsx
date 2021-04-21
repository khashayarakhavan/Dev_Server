//Basics
import React from 'react';
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectDarkMode } from "redux/themes/themes.selectors";
import { selectCurrentUser } from 'redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "redux/cart/cart.actions";
import { toggleDarkMode } from "redux/themes/themes.actions";
import { signOutStart } from "redux/user/user.actions";
//Components
import CartDropdown from '../../complex/cart-dropdown/cart-dropdown.component';
//Assets
import meSVG from '../../../assets/SVG/me.svg'
import meDev from '../../../assets/SVG/me-dev.svg'
//Design
import { PrussianBlue_To_Orange } from '../../../design/effects.styles';
import {
  InheritedBody,
  WhatIDo,
  SkillsContainer,
  Row,
  ColMd12,
  Article,
  DesignRow,
  ColMd4,
  HomeDesign,
  Figure,
  BubbleRight,
  DesignIconVert,
  Image,
  ColMd6,
  ColMd7,
  Deets,
  Develop,
  MdPush7,
  Image2,
  HomeDev,
  BubbleLeft,
  DevIconVert,
  ColMd6_Pull3,
  BubbleButton,
  TitleContainer,
  TitleBlock,
  Description,
  SubTitle,
  Picture,
  Icons,
  Header3,
} from "./skills.styles";


import frontend__icons__svg6 from "assets/img/frontend__icons--svg6.svg";
import backend__icons__svg from "assets/img/backend__icons--svg.svg";
import backend__icons from "assets/img/backend__icons.png";

import {Heading, TEXT} from './skills.styles';

import {FrontEnd, BackEnd} from "components/Sections/FlexIcons/flexIcons.component";

//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    <SkillsContainer className="skills-container">
            <DesignRow className="DesignRow">
              <ColMd6 className="tech-stack-container">
                <Deets className="tech-stack-card" style={{ textAlign: "Right", marginTop: "2vw" }}>
                  <TitleContainer className="titleContainer">
                    <BubbleRight >
                      {/* <DesignIconVert /> */}
                      <Image
                        className=""
                        srcSet={`${frontend__icons__svg6} 1x, ${backend__icons} 2x`}
                        alt="Full Logo"
                      />
                    </BubbleRight>
                    <TitleBlock>
                      <h3 className="hi">Tech Stack</h3>
                      <TEXT>
                        <p style={{ display: "inline" }}>
                          <span style={{ fontWeight: 200 }}>modern,</span>{" "}
                          <span style={{ fontWeight: 400, color: "#EB5E28" }}>
                            smooth,
                          </span>{" "}
                          <span style={{ fontWeight: 200 }}> accessible</span>
                        </p>
                      </TEXT>
                    </TitleBlock>
                  </TitleContainer>
                  <Description>
                    Ideally, it's the project that dictates the stack. A
                    developer's job is to identify its fundamental needs and use proper
                    tools to serve them .
                    <br />
                    <p style={{ lineHeight: "0.5" }}>
                      <br />
                    </p>
                    These days, I'm passionately following Language-Agnostic ideas and
                    extending my toolset with hot and emerging technologies such as:
                  </Description>
                  <Icons className={"frontend__icons--container"}>
                    <FrontEnd className={"frontend__icons--component"} />
                  </Icons>
                </Deets>
              </ColMd6>
              <ColMd6 className="cloud-era-container">
                <Deets className="cloud-era-card">
                  <TitleContainer className="titleContainer">
                    <TitleBlock style={{ alignItems: "flex-start" }}>
                      <h3 className="hi">Cloud Era </h3>{" "}
                      <TEXT>
                        <p style={{ display: "inline" }}>
                          <span style={{ fontWeight: 200 }}>scalable,</span>{" "}
                          <span style={{ fontWeight: 400, color: "#EB5E28" }}>
                            secure,
                          </span>{" "}
                          <span style={{ fontWeight: 200 }}> available</span>
                        </p>
                      </TEXT>
                    </TitleBlock>
                    <BubbleRight >
                      {/* <DevIconVert /> */}
                      <Image
                        className=""
                        srcSet={`${backend__icons__svg} 1x, ${backend__icons} 2x`}
                        alt="Full Logo"
                      />
                    </BubbleRight>
                  </TitleContainer>
                  <Description>
                    We are on the precipice of a golden age in cloud
                    technologies. This marked shift will probably forever change
                    the way we build and scale web apps.
                    <br />
                    <p style={{ lineHeight: "0.5" }}>
                      <br />
                    </p>
                    Instant access and Secure interactions are the new normals.
                    Naturally, I need to use a number of different tools and
                    services to meet this ever-growing industry standard. I
                    adore most of them, namely:
                    <br />
                  </Description>
                  <Icons className={"backend__icons--container"}>
                    <BackEnd className={"backend__icons--component"} />
                  </Icons>
                </Deets>
              </ColMd6>
            </DesignRow>    
    </SkillsContainer>
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



// <Develop>
//   <MdPush7>
//     <HomeDev>
//       <Figure>
//         <Image2 src={meDev} />
//       </Figure>

//       {/* <BubbleLeft>
//                       <DevIconVert />
//                     </BubbleLeft> */}
//     </HomeDev>
//   </MdPush7>
//   {/* <!-- col --> */}
//   <ColMd6_Pull3>
//     <Deets>
//       <h3>inifinitely scale your website</h3>
//       <p>
//         I tend to code in the cloud to make sure your website can infinitely
//         scale as your business grows.
//       </p>
//     </Deets>
//   </ColMd6_Pull3>
//   {/* <!-- col --> */}
// </Develop>;