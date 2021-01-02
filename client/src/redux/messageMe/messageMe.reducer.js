//FIXED TYPES
import MessageMeActionTypes from "./messageMe.types";

const INITIAL_STATE = {
  customerCountry: {name:"Not Selected", code: "N/A", dialCode: 0},
  richTextMessageAsHTML: "<p></p>",
};

const MessageMeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageMeActionTypes.CUSTOMER_COUNTRY:
      console.log("Hello from Customer Country Reducer :D");
      return {
        ...state,
        customerCountry: action.payload,
      };
    case MessageMeActionTypes.RICH_TEXT_MESSAGE_AS_HTML:
      console.log("Hello from RICH_TEXT_MESSAGE_AS_HTML, payload is :", action.payload);
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

    default:
      return state;
  }
};

export default MessageMeReducer;
