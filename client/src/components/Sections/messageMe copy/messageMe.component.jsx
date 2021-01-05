//Framework
import React from 'react';
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Selectors
import {
  selectRichTextMessageAsHTML,
  selectCustomerCountry,
} from "../../../redux/messageMe/messageMe.selectors";
//Actions
import {
  updateCustomerCountry,
  updateRichTextMessageAsHTML,
  sendDataToServer,
} from "../../../redux/messageMe/messageMe.actions";
//Components
import PasswordValidator2 from '../../../interactions/passwordValidator/passwordValidator2.component';
// import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';
import SignUp from '../../sign-up/sign-up.component';
import RichText from '../../../interactions/richTextCard/richTextCard.component';
import CountryPicker from '../../../interactions/CountryPicker/countryPicker.component';
// import PasswordValidator from '../../../interactions/passwordValidator/passwordValidator.component';
import PasswordValidator3 from '../../../interactions/passwordValidator/passwordValidator3.component';

import { MessageMeContainer, SendButton } from "./messageMe.styles";

 
  


const MessageMeSection = ({
  richTextMessageAsHTML,
  updateRichTextMessageAsHTML,
  customerCountry,
  updateCustomerCountry,
  sendDataToServer,
}) => {
  const handleSubmit = async () => {
    console.log("hello from handleSubmit /messageMe.JS :D ");
    sendDataToServer("/api/v1/email", {
      pureHTML: richTextMessageAsHTML,
      customerCountry: customerCountry,
    });
  };

  return (
    <MessageMeContainer>
      <RichText updateRichTextMessageAsHTML={updateRichTextMessageAsHTML} />
      <CountryPicker
        customerCountry={customerCountry} updateCustomerCountry={updateCustomerCountry}
      />
      <PasswordValidator2 />
      <PasswordValidator3 />
      <SendButton onClick={handleSubmit}>Send Your Message</SendButton>
    </MessageMeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  customerCountry: selectCustomerCountry,
  richTextMessageAsHTML: selectRichTextMessageAsHTML,
});

const mapDispatchToProps = (dispatch) => ({
  updateCustomerCountry: (value) => dispatch(updateCustomerCountry(value)),
  updateRichTextMessageAsHTML: (value) =>
    dispatch(updateRichTextMessageAsHTML(value)),
  sendDataToServer: (URL, data) => dispatch(sendDataToServer(URL, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageMeSection);
