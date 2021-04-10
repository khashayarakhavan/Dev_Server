//Baiscs
import React from 'react';
//Libraries
import Lottie from "react-lottie";
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';

//Actions

//Components

//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
import {SvgIcon} from './heroHeader.styles';

//Design
import { Accent_fireOrange } from "design/effects.styles";
import {
  Button,
  LottieContainer,
  BackgroundFigure,
  TEXT,
  Heading,
  HeroHeaderLeft,
  HeroHeaderRight,
  SmallMargin,
} from "./heroHeader.styles";

//State Mangement

//State Selector
import {
  selectMenuOpen,
  selectPopUpOpen,
} from "redux/vegeloperPage/vegeloperPage.selectors";
//Actions
import {
  toggleMenuOpen,
  togglePopUp,
} from "redux/vegeloperPage/vegeloperPage.actions";


export const HeroHeaderLeftContainer = ({ toggleMenuOpen, menuOpen, popUpOpen, togglePopUp }) => {

  return (
    <HeroHeaderLeft>
      <Heading>
        <p className="hi">
          <SmallMargin>Hi</SmallMargin>
          <Accent_fireOrange>.</Accent_fireOrange>
          <br />
          I'm
          <br /> <Accent_fireOrange>K</Accent_fireOrange>hashi
        </p>
      </Heading>

      <TEXT>
        <p style={{ display: "inline" }}>
          a web <span style={{ fontWeight: 400 }}>developer</span>
        </p>
      </TEXT>
     
      <Button onClick={togglePopUp}>
        <p>Pleased to meet you</p> <SvgIcon />
        {/* <br /> */}
        <span>tea or coffee ? </span>
        <BackgroundFigure></BackgroundFigure>
      </Button>
    </HeroHeaderLeft>
  );
};



export const HeroHeaderRightContainer = ({ popUpOpen }) => {
  let robotAnimation = (
    <Lottie options={AnimationCreateRobot} height={`100%`} />
  );


  return (
    <HeroHeaderRight popUpOpen={popUpOpen}>
      <LottieContainer>{robotAnimation}</LottieContainer>
    </HeroHeaderRight>
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
  togglePopUp: () => dispatch(togglePopUp()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(HeroHeaderLeftContainer);

export default {
  LeftContainer: connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeroHeaderLeftContainer),
  RightContainer: connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeroHeaderRightContainer),
};
