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
  Picture
} from "./skills.styles";

import design_icons_vert from "assets/img/design-icons-vert.png";
import dev_icons_vert from "assets/img/dev-icons-vert.png";
import frontend__icons from "assets/img/frontend__icons.png";
import frontend__icons__svg from "assets/img/frontend__icons--svg.svg";
import frontend__icons__svg2 from "assets/img/frontend__icons--svg2.svg";
import frontend__icons__svg3 from "assets/img/frontend__icons--svg3.svg";
import frontend__icons__svg4 from "assets/img/frontend__icons--svg4.svg";
import frontend__icons__svg5 from "assets/img/frontend__icons--svg5.svg";
import frontend__icons__svg6 from "assets/img/frontend__icons--svg6.svg";
import backend__icons__svg from "assets/img/backend__icons--svg.svg";
import backend__icons from "assets/img/backend__icons.png";

import {Heading, TEXT} from './skills.styles';
import {
  Accent_fireOrange,
  Accent_mateBlue,
} from "design/effects.styles";

import {FrontEnd, BackEnd} from "components/Sections/FlexIcons/flexIcons.component";

//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    <SkillsContainer>
      <Row>
        <ColMd12>
          <Article>
            <DesignRow>
              <ColMd6>
                <Deets style={{ textAlign: "Right", marginTop: "2vw" }}>
                  <TitleContainer className="titleContainer">
                    <BubbleRight style={{ flex: "20" }}>
                      {/* <DesignIconVert /> */}
                      <Image
                        className=""
                        srcSet={`${frontend__icons__svg6} 1x, ${backend__icons} 2x`}
                        alt="Full Logo"
                      />
                      {/* <Picture clanssName="footer__logo">
                        <source
                          srcSet={`${dev_icons_vert} 1x, ${dev_icons_vert} 2x`}
                          media="(min-width: 1100px)"
                        />
                        <source
                          srcSet={`${design_icons_vert} 1x, ${design_icons_vert} 2x`}
                          media="(min-width: 1000px)"
                        />

                        <Image
                          className=""
                          srcSet={`${design_icons_vert} 1x, ${design_icons_vert} 2x`}
                          alt="Full Logo"
                        />
                      </Picture> */}
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
                  <Description
                    style={{
                      fontWeight: "200",
                      textAlign: "right",
                      width: "85%",
                      width: "82%",
                      width: "35vw",
                      // marginRight: "13%",
                      textAlign: "justify",
                      textJustify: "auto",
                      // paddingLeft: "1rem",
                    }}
                  >
                    Ideally, it's the project that dictates the stack. A
                    developer's job is to identify its basic needs, and use
                    proper tools to serve them .
                    <br />
                    I'm passionately following Language-Agnostic approach and
                    extending my toolbox with emerging technologies such as:
                  </Description>
                  <div
                    className={"frontend__icons--container"}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <FrontEnd className={"frontend__icons--component"} />
                  </div>
                </Deets>
              </ColMd6>
              <ColMd6>
                <Deets>
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
                    <BubbleRight style={{ flex: "20" }}>
                      {/* <DevIconVert /> */}
                      <Image
                        className=""
                        srcSet={`${backend__icons__svg} 1x, ${backend__icons} 2x`}
                        alt="Full Logo"
                      />
                    </BubbleRight>
                  </TitleContainer>
                  <Description
                    style={{
                      fontWeight: "200",
                      textAlign: "left",
                      width: "85%",
                      width: "82%",
                      width: "35vw",
                      // marginRight: "13%",
                      textAlign: "justify",
                      textJustify: "auto",
                      paddingLeft: "0",
                    }}
                  >
                    We are on the precipice of a golden age in cloud
                    technologies. This marked shift will probably forever change
                    the way we build and scale web apps.
                    <br />
                    Secure authentication, continuous delivery, and instast
                    access are becoming the industry standard. So, I tend to use
                    a number of different tools and services to meet these
                    requirements. I adore most of them, namely:
                    <br />
                  </Description>
                  <div
                    className={"backend__icons--container"}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <BackEnd className={"backend__icons--component"} />
                  </div>
                </Deets>
              </ColMd6>
            </DesignRow>
          </Article>
        </ColMd12>
      </Row>
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