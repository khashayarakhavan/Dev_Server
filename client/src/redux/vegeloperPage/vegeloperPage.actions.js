import VegeloperPageActionTypes from "./vegeloperPage.types";

///DEV test
export const toggleMenuOpen = () => ({
  type: VegeloperPageActionTypes.TOGGLE_MENU_OPEN,
});
export const togglePopUp = value => ({
  type: VegeloperPageActionTypes.TOGGLE_POP_UP,
  payload: value,
});
export const emailRichText = value => ({
  type: VegeloperPageActionTypes.EMAIL_RICH_TEXT,
  payload: value,
});
export const sendDataToServer = (URL, data) => ({
  type: VegeloperPageActionTypes.SEND_DATA_SERVER_START,
  payload: {URL, data},
});


// const res = await axios.post("/api/surveys", values);