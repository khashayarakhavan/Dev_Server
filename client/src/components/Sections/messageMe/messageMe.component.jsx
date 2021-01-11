//Framework
import React from 'react';
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Selectors
import {
  selectRichTextMessageAsHTML,
  selectCustomerCountry,
  selectIsComplete,
  selectIsError,
  selectIsLoading,
} from "../../../redux/messageMe/messageMe.selectors";
//Actions
import {
  updateCustomerCountry,
  updateRichTextMessageAsHTML,
  sendDataToServer,
  updateIsLoading,
} from "../../../redux/messageMe/messageMe.actions";
//Components
import InputDropDown from '../../../interactions/InputDropDown/inputDropDown.component';
import PasswordValidator2 from '../../../interactions/passwordValidator/passwordValidator2.component';
// import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';
import SignUp from '../../sign-up/sign-up.component';
import RichText from '../../../interactions/richTextCard/richTextCard.component';
import CountryPicker from '../../../interactions/CountryPicker/countryPicker.component';
import InputMaterial from '../../../interactions/InputMaterial/inputMaterial.component';
import LoadingButton from "../../../interactions/loadingButton/loadingButton.component";

// import PasswordValidator from '../../../interactions/passwordValidator/passwordValidator.component';
import PasswordValidator3 from '../../../interactions/passwordValidator/passwordValidator3.component';

import { MessageMeContainer, SendButton , RightSide, LeftSide} from "./messageMe.styles";

 
  


const MessageMeSection = ({
  richTextMessageAsHTML,
  updateRichTextMessageAsHTML,
  customerCountry,
  updateCustomerCountry,
  sendDataToServer,
  isError,
  isComplete,
  isLoading,
  updateIsLoading,
}) => {
  const handleSubmit = async () => {
    console.log("hello from handleSubmit /messageMe.JS :D ");
    updateIsLoading(true);
    let res = sendDataToServer("/api/v1/email", {
      pureHTML: richTextMessageAsHTML,
      customerCountry: customerCountry,
    });
    // return res;
  };

  return (
    <MessageMeContainer>
      <LeftSide>
        <RichText updateRichTextMessageAsHTML={updateRichTextMessageAsHTML} />
      </LeftSide>

      <RightSide>
        <CountryPicker
          customerCountry={customerCountry}
          updateCustomerCountry={updateCustomerCountry}
        />
        <InputMaterial />
        <LoadingButton
          isLoading={isLoading}
          isError={isError}
          isComplete={isComplete}
          handleSubmit={handleSubmit}
        />
        {/* <InputDropDown /> */}
      </RightSide>

      {/* <PasswordValidator2 /> */}
      {/* <PasswordValidator3 /> */}
      <SendButton onClick={handleSubmit}>Send Your Message</SendButton>
    </MessageMeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  customerCountry: selectCustomerCountry,
  richTextMessageAsHTML: selectRichTextMessageAsHTML,
  isComplete: selectIsComplete,
  isError: selectIsError,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateCustomerCountry: (value) => dispatch(updateCustomerCountry(value)),
  updateIsLoading: (value) => dispatch(updateIsLoading(value)),
  updateRichTextMessageAsHTML: (value) =>
    dispatch(updateRichTextMessageAsHTML(value)),
  sendDataToServer: (URL, data) => dispatch(sendDataToServer(URL, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageMeSection);
