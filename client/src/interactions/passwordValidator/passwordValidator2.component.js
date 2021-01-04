//Basics
import React, { useState } from "react";
import { Wrapper, SubmitButton, Textbox, } from "./passwordValidator2.styles";
// import { Input, Wrapper, Message, Button, Spin, Icon, Svg } from "./passwordValidator.styles";

// const Fill = ({ isComplete, isValid }) => (
//   <Svg
//     isError={isComplete && !isValid}
//     isSuccess={isComplete && isValid}
//     isComplete={isComplete}
//   >
//     <circle cx="20" cy="20" r="20" />
//   </Svg>
// );
// const PasswordValidator = () => {
//   const [state, setState] = useState({});
//   const { isLoading, isComplete, text} = state;
//   const isValid = text === "pass";

//   return (
//     <Wrapper>
//       <Message isComplete={isComplete}>
//         {!isComplete ? "" : isValid ? "Welcome" : "Try Again!"}
//       </Message>
//       <Input type="password" placeholder="Password" />
//       <Button>
//         {<Fill isComplete={isComplete} isValid={isValid} />}
//         {isLoading || isComplete ? (
//           <Spin>
//             <Icon>x</Icon>
//           </Spin>
//         ) : null}
//         {!isLoading && <Icon>-*</Icon>}
//       </Button>
//     </Wrapper>
//   );
// };

const PasswordValidator2 = () => {
  // const [state, setState] = useState({});
  // const { isSubmitted, isComplete, text} = state;
  // const isValid = text === "pass";
  const [isSubmitted, setIsSubmitted] = useState(undefined);
  const [isValid, setIsValid] = useState(undefined);
  const [textboxValue, setTextboxValue] = useState("");
  const mySuperSecretPassword = 'password';
  const handleSubmit = () => {
      setIsSubmitted(true);
      if (textboxValue === mySuperSecretPassword) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
      setTimeout(() => {
        setTextboxValue("");
        setIsValid(undefined);
        setIsSubmitted(undefined);
      }, 2000);
    };

  const handleChange = (event) => {
    event.preventDefault();
    setTextboxValue(event.target.value);
  }


  return (
    <Wrapper isValid={isValid}>
      <Textbox
        value={textboxValue}
        onChange={handleChange}
        type="password"
        placeholder="Type Password"
      />
      {/* <div>{textboxValue}</div> */}
      <SubmitButton isValid={isValid} onClick={handleSubmit}>
        <span class="material-icons-outlined">
          {isValid === false ? `x` : `->`}
        </span>
      </SubmitButton>
    </Wrapper>
  );
};


export default PasswordValidator2;
