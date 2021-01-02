import MessageMeActionTypes from "./messageMe.types";

///DEV test

export const updateCustomerCountry = (value) => ({
  type: MessageMeActionTypes.CUSTOMER_COUNTRY,
  payload: value,
});
export const updateRichTextMessageAsHTML = (value) => ({
  type: MessageMeActionTypes.RICH_TEXT_MESSAGE_AS_HTML,
  payload: value,
});

export const sendDataToServer = (URL, data) => ({
  type: MessageMeActionTypes.SEND_DATA_SERVER_START,
  payload: {URL, data},
});


// const res = await axios.post("/api/surveys", values);