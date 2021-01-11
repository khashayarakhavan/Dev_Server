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
export const updateIsLoading = (value) => ({
  type: MessageMeActionTypes.UPDATE_IS_LOADING,
  payload: value,
});
export const toggleIsComplete = (value) => ({
  type: MessageMeActionTypes.TOGGLE_IS_COMPLETE,
  payload: value,
});
export const sendClientRichTextMessageToServer = (URL, data) => ({
  type: MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER,
  payload: { URL, data },
});

export const callToApiSuccess = (res) => ({
  type: MessageMeActionTypes.CALL_TO_API_SUCCESS,
  payload: res,
});
export const sendClientRichTextMessageToServerSuccess = (res) => ({
  type: MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER_SUCCESS,
  payload: res,
});
export const sendClientRichTextMessageToServerFailure = (res) => ({
  type: MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER_FAILURE,
  payload: res,
});


export const callToApiFailure = (error) => ({
  type: MessageMeActionTypes.CALL_TO_API_FAILURE,
  payload: error,
});



// const res = await axios.post("/api/surveys", values);