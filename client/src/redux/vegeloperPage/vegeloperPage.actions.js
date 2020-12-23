import VegeloperPageActionTypes from "./vegeloperPage.types";

///DEV test
export const toggleMenuOpen = () => ({
  type: VegeloperPageActionTypes.TOGGLE_MENU_OPEN,
});
export const togglePopUp = value => ({
  type: VegeloperPageActionTypes.TOGGLE_POP_UP,
  payload: value,
});
