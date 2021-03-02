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
} from "./skills.styles";

import {Heading, TEXT} from './skills.styles';
import {
  Accent_fireOrange,
  Accent_mateBlue,
} from "../../../design/effects.styles";

import {FrontEnd, BackEnd} from "../../Sections/FlexIcons/flexIcons.component";

//Code
export const Header = (props) => {
  const { hidden } = props;

  return (
    <SkillsContainer>
      <Row>
        <ColMd12>
          <Article>
            {/* <header class="">
                <h2>I help people ...</h2>
              </header> */}

            <DesignRow>
              <ColMd6>
                {/* <Deets style={{ textAlign: "left" }}>
                  <h3>FrontEnd</h3>
                  <p
                    style={{
                      fontSize: "2vw",
                      fontWeight: "200",
                      textAlign: "left",
                    }}
                  >
                    My ultimate goal is to perfectly match your real needs to
                    the best solutions available. So I always make sure to
                    follow the tech community's best practices.
                  </p>
                </Deets> */}
                <Deets style={{ textAlign: "Right", marginTop: "2rem" }}>
                  <TitleContainer className="titleContainer">
                    <BubbleRight style={{ flex: "20" }}>
                      <DesignIconVert />
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

                  <p
                    style={{
                      fontSize: "1.7rem",
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
                    Ideally, it's the project that dictates the stack.The
                    developer's job is to identify its basic needs, and use
                    proper tools to serve them .
                    <br />
                    I'm passionately following Language-Agnostic approach and
                    extending my toolbox with emerging technologies such as :
                  </p>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <FrontEnd />
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
                      <DevIconVert />
                    </BubbleRight>
                  </TitleContainer>
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: "200",
                      textAlign: "left",
                      width: "85%",
                      width: "82%",
                      width: "35vw",
                      // marginRight: "13%",
                      textAlign: "justify",
                      textJustify: "auto",
                      paddingLeft: "0rem",
                    }}
                  >
                    We are on the precipice of a golden age in cloud
                    technologies. This marked shift will probably forever change
                    the way we build and scale web apps.
                    <br />
                    Secure authentication, continuous delivery, and instast
                    access are becoming the industry standard. So, I tend to use
                    a number of different tools and services to meet these
                    requirements. I adore most of them, namely :
                    <br />
                  </p>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <BackEnd />
                  </div>
                </Deets>

                {/* <Deets style={{ textAlign: "right", marginTop: "2rem" }}>
                  <h3 className="hi">
                    Grow <Accent_fireOrange>F</Accent_fireOrange>ast
                  </h3>

                  <TEXT>
                    <p style={{ display: "inline" }}>
                      <span style={{ fontWeight: 400 }}>scalable,</span>{" "}
                      <span style={{ fontWeight: 200 }}>secure</span>{" "}
                      <span style={{ fontWeight: 400 }}> available</span>
                    </p>
                  </TEXT>

                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "200",

                      textAlign: "right",
                      width: "78%",
                      marginLeft: "22%",
                      textAlign: "justify",
                      textJustify: "auto",
                    }}
                  >
                    My ultimate goal is to perfectly match your real needs to
                    the best solutions available. So I always make sure to
                    follow the tech community's best practices.
                  </p>
                </Deets> */}
                {/* <BubbleButton
                  style={{ margin: "0 auto", marginRight: "0" }}
                ></BubbleButton> */}
              </ColMd6>
              {/* <ColMd6>
                  <BubbleButton>
                    <BubbleRight>
                      <DesignIconVert />
                    </BubbleRight>
                  </BubbleButton>
                  <Deets>
                    <h3>Create blazing fast websites.</h3>
                    <p>
                      My ultimate goal is to perfectly match your real needs to
                      the best solutions available. So I always make sure to
                      follow the tech community's best practices.
                    </p>
                  </Deets>
                </ColMd6> */}
            </DesignRow>
            {/* <!-- /row --> */}

            {/* <!-- /row --> */}
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