//Framework
import React, {useState} from 'react';
//State Management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Selectors
import {
  selectMenuOpen,
  selectPopUpOpen,
} from "redux/vegeloperPage/vegeloperPage.selectors";
import {
  selectRichTextMessageAsHTML,
  selectCustomerCountry,
} from "redux/messageMe/messageMe.selectors";
//Actions
import {
  toggleMenuOpen,
  togglePopUp,
} from "redux/vegeloperPage/vegeloperPage.actions";
//Containers
import { HiPalContainer } from "./hiPal.styles";
//Sections
import MessageMe from "components/Sections/messageMe/messageMe.component";
import TopMenu from "components/Sections/header/header.component";
import Heading from "components/Sections/Heading/heading.component";






//Code
const HiPalContent = () => {
  return (
    <HiPalContainer className="HiPalContainer" id="test">
      <TopMenu />
      <Heading text="I believe in myself." />
      <MessageMe />
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