//Basics
import React, { useState } from "react";

import { Input, Wrapper, Message, Button, Spin, Icon, Svg } from "./passwordValidator.styles";

const Fill = ({ isComplete, isValid }) => (
  <Svg
    isError={isComplete && !isValid}
    isSuccess={isComplete && isValid}
    isComplete={isComplete}
  >
    <circle cx="20" cy="20" r="20" />
  </Svg>
);
const PasswordValidator = () => {
  const [state, setState] = useState({});
  const { isLoading, isComplete, text} = state;
  const isValid = text === "pass";
  // const [isLoading, setIsLoading] = useState(undefined);
  // const [isComplete, setIsComplete] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(undefined);
  // const [isValid, setIsValid] = useState(undefined);
  const [textboxValue, setTextboxValue] = useState("");
  const mySuperSecretPassword = "password";

  return (
    <Wrapper>
      <Message isComplete={isComplete}>
        {!isComplete ? "" : isValid ? "Welcome" : "Try Again!"}
      </Message>
      <Input type="password" placeholder="Password" />
      <Button>
        {<Fill isComplete={isComplete} isValid={isValid} />}
        {isLoading || isComplete ? (
          <Spin>
            <Icon>x</Icon>
          </Spin>
        ) : null}
        {!isLoading && <Icon>-*</Icon>}
      </Button>
    </Wrapper>
  );
};


export default PasswordValidator;