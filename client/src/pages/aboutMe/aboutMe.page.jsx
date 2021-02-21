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
//Containers
import {ScreenContainer, Content} from '../../design/containers.styles';
//Components
import {ModernNav} from '../../interactions/ModernNav/modernNav.component';
import {SlideUpHiPal} from '../../interactions/SlideUp/slideUp.component';
import AboutMeContent from './aboutMe.content';

//Code
const AboutMePage = ({ menuOpen, toggleMenuOpen, popUpOpen, togglePopUp }) => {

  return (
    <ScreenContainer>
      {/* #ABSOLUTE ITEMS */}
      <ModernNav toggleMenuOpen={toggleMenuOpen} />
      <SlideUpHiPal popUpOpen={popUpOpen} togglePopUp={togglePopUp} />

      {/* #VISIBLE CONTENT */}
      <Content open={menuOpen}>
        <AboutMeContent />
      </Content>
    </ScreenContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutMePage);












































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