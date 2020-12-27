//FIXED TYPES
import VegeloperPageActionTypes from "./vegeloperPage.types";

const INITIAL_STATE = {
  menuOpen: false,
  popUpOpen: false,
  error: null,
  darkMode: false,
  emailRichText: null,
};

const VegeloperPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VegeloperPageActionTypes.TOGGLE_MENU_OPEN:
      console.log("Hello from MENU OPEN :D");
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case VegeloperPageActionTypes.EMAIL_RICH_TEXT:
      console.log("Hello from Email Rich :D");
      console.log(`This is the rich text ${action.payload}`);
    
      return {
        ...state,
        emailRichText: action.payload,
      };
    case VegeloperPageActionTypes.TOGGLE_POP_UP:
      if (action.payload === false || action.payload === true) {
        console.log("Hello from POP UP with Direct Input :D");
        return {
          ...state,
          popUpOpen: action.payload,
        };
      } else {
        console.log("Hello from POP UP using Toggle :D");
        return {
          ...state,
          popUpOpen: !state.popUpOpen,
        };
      }

    case VegeloperPageActionTypes.TOGGLE_DARK_MODE:
      console.log("Hello from DARK MODE :D");
      return {
        ...state,
        darkMode: true,
      };

    default:
      return state;
  }
};

export default VegeloperPageReducer;
