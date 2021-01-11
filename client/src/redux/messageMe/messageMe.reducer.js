//FIXED TYPES
import MessageMeActionTypes from "./messageMe.types";

const INITIAL_STATE = {
  customerCountry: {name:"Not Selected", code: "N/A", dialCode: 0},
  richTextMessageAsHTML: "<p></p>",
  isLoading: false,
  isError: false,
  isComplete: false,
};

const MessageMeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageMeActionTypes.CUSTOMER_COUNTRY:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        customerCountry: action.payload,
      };
    case MessageMeActionTypes.CALL_TO_API_SUCCESS:
      return {
        ...state,
        isComplete: action.payload,
      };
    case MessageMeActionTypes.CALL_TO_API_FAILURE:
      return {
        ...state,
        isError: action.payload,
      };
    case MessageMeActionTypes.RICH_TEXT_MESSAGE_AS_HTML:
      console.log(
        "Hello from RICH_TEXT_MESSAGE_AS_HTML, payload is :",
        action.payload
      );
      return {
        ...state,
        richTextMessageAsHTML: action.payload,
      };
    case MessageMeActionTypes.SEND_DATA_SERVER_START:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        // richTextMessageAsHTML: action.payload.data,
      };
    case MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        isLoading: action.payload,
      };
    case MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER_SUCCESS:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        isLoading: false,
        isComplete: true,
        isError: false,
      };
    case MessageMeActionTypes.SEND_CLIENT_RICH_TEXT_MESSAGE_TO_SERVER_FAILURE:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        isLoading: false,
        isComplete: true,
        isError: true,
      };
    case MessageMeActionTypes.UPDATE_IS_LOADING:
      console.log("Hello from UPDATE IS LOADING Reducer :D");
      return {
        ...state,
        isLoading: action.payload,
      };
    case MessageMeActionTypes.TOGGLE_IS_COMPLETE:
      console.log("Hello from TOGGLE_IS_COMPLETE Reducer :D");
      return {
        ...state,
        isComplete: false,
      };

    default:
      return state;
  }
};

export default MessageMeReducer;
