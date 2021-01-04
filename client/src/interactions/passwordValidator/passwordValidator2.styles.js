import styled, { css, keyframes } from "styled-components";
import { rgba, darken } from "polished";

export const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(0.5rem); }
  75% { transform: translateX(-0.5rem); }
  100% { transform: translateX(0); }
`;
export const shakeAnimationCSS = css`
  animation: ${shakeAnimation} 0.175s 0s 3;
`;

export const Wrapper = styled.div`
    position: relative;
  background: #fff;
  border-radius: 0.5rem;
  ${
    "" /* border: 8px solid
    ${(props) => (props.isValid === false ? "#F56476" : "#8D86C9")}; */
  }
  border: 8px solid
    ${(props) =>
    props.isValid === false
      ? "#F56476"
      : props.isValid === true
      ? "lightgreen"
      : "#8D86C9"};
  height: 60px;
  display: flex;
  transition-property: border-color, background;
  transition-duration: 0.35s;
  & .material-icons-outlined {
    ${(props) =>
      props.isValid === false
        ? "background: red;"
        : props.isValid === true
        ? "background: lightgreen;"
        : ""};
  }
  ${(props) => (props.isValid === false ? shakeAnimationCSS : "")};
`;

export const Textbox = styled.input`
  border: 0;
  background: transparent;
  width: 150px;
  height: 100%;
  outline: none;
  padding: 0 0.875rem;
  &::placeholder {
    color: rgba(#000, 0.38);
  }
`;

export const SubmitButton = styled.button`
    position: absolute;
    right: 20px;
    
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;

  &:hover > span {
    ${(props) =>
      props.isValid === undefined
        ? `background: ${darken(0.2, "#8994d0")}`
        : ""
    };
  };
  
  & > span {
    color: white;
    padding: 4px;
    font-size: 20px;
    background: #8994d0;
    ${'' /* background: lightgreen; */}
    border-radius: 50%;
    transition: background 0.35s;
  }
`;
