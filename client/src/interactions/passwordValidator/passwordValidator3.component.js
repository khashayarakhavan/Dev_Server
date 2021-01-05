//Basics
import React, { useState } from "react";

import { Input, Wrapper, Message, Button, Spin, Icon, Svg } from "./passwordValidator3.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Fill = ({ isComplete, isValid, setIsValid, setIsComplete, setIsLoading }) =>  {
  const handleClick2 = (event) => {
   event.preventDefault();
   setIsComplete(false);
   setIsValid(false);
   setIsLoading(false);
 };
  return(
  <Svg onClick={handleClick2} 
    isError={isComplete && !isValid}
    isSuccess={isComplete && isValid}
    isComplete={isComplete}
  >
    <circle cx="20" cy="20" r="15" />
  </Svg>
);
}


const PasswordValidator3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(undefined);
  const [isValid, setIsValid] = useState(undefined);
  const [textboxValue, setTextboxValue] = useState("");
  const mySuperSecretPassword = "password";

  const handleSubmit = (event) => {
    if (textboxValue.length > 0) {setIsComplete(true);};
    
    
    if (textboxValue === mySuperSecretPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setIsLoading(true);
    // setIsSubmitted(true);
    setTimeout(() => {
      // setTextboxValue("");
      setIsComplete(false)
      setIsValid(false);
      setIsLoading(false);
      // setIsSubmitted(undefined);
    }, 2000);
  };

 const handleChange = (event) => {
   event.preventDefault();
   setTextboxValue(event.target.value);
 };
 const handleClick = (event) => {
   event.preventDefault();
   setIsComplete(false);
   setIsValid(false);
   setIsLoading(false);
 };
 
  // const myHex = '->';
  return (
    <Wrapper>
      <Message isComplete={isComplete} onClick={handleClick}>
        {!isComplete ? "" : isValid ? "Welcome" : "Try Again!"}
      </Message>
      <Input
        value={textboxValue}
        onChange={handleChange}
        type="password"
        placeholder="Type Password"
      />
      <Button onClick={handleSubmit}>
        {
          <Fill
            isComplete={isComplete}
            isValid={isValid}
            setIsComplete={setIsComplete}
            setIsValid={setIsValid}
            setIsLoading={setIsLoading}
          />
        }
        {isLoading || isComplete ? (
          <Spin>
            <Icon>
              <strong>x</strong>
            </Icon>
          </Spin>
        ) : null}
        {!isLoading && (
          <Icon>
            <i class="fas fa-angle-right"></i>
          </Icon>
        )}
      </Button>
    </Wrapper>
  );
};

//  <Wrapper isValid={isValid}>
//    <Textbox
//      value={textboxValue}
//      onChange={handleChange}
//      type="password"
//      placeholder="Type Password"
//    />
//    {/* <div>{textboxValue}</div> */}
//    <SubmitButton isValid={isValid} onClick={handleSubmit}>
//      <span class="material-icons-outlined">
//        {isValid === false ? `x` : `->`}
//      </span>
//    </SubmitButton>
//  </Wrapper>;


export default PasswordValidator3;