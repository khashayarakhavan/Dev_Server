import styled, { css } from 'styled-components';
import {respond} from 'design/responsive';

const subColor = 'grey';
const mainColor = "#143351";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  ${"" /* color: ${mainColor}; */}
  &:invalid {
    ${"" /* border-bottom: 3px solid red; */}
    color: red;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  margin-left: 4vw;
  width: 90%;

  ${respond.pc.standard`
    width: 100%;
    margin-left: 0;
  `}

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  height: min-content;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #143351;
  border: none;
  border-radius: 3rem;

  &:after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 50%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 10px solid blue; /* This creates the border. Replace black with whatever color you want. */
  }

  ${"" /* border-bottom: 1px solid ${subColor}; */}
  margin: 25px 0;

  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  &:required {
    //removes the red shadow if the input is invalid.
    box-shadow: none;
  }

  &:invalid {
    border: none;
    outline: none;
  }

  &:focus {
    outline: none;
    ${"" /* box-shadow: 0 1rem 2rem rgba($color-black, 0.1); */}
    ${"" /*  */}
    ${"" /* color: green; */}
    ${"" /* border-bottom: 3px solid rgb(102, 235, 102); */}

    &:invalid {
      ${"" /* border-bottom: 3px solid red; */}
      ${'' /* color: #f22; */}
    }
  }
`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputLabel = styled.label`
  color: ${subColor};
  
  
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  color: #143351;

  font-family: "Poppins", sans-serif;
  font-weight: 200;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

FormInputLabel.displayName = 'FormInputLabel';
