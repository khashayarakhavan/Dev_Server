//Libraries
import styled, {createGlobalStyle, css} from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';

const duration ={
  transtion:'0.45s',
 };

const backgroundColor= 'red';

 
export const Placeholder = styled.div`
  position: absolute;
  color: rgba(#fff, 0.875);
  background: transparent;
  z-index: 0;
  top: 0;
  left: 0;
  padding: 0 0.25rem;
  font-weight: 700;
  transform: translate(0.5rem, 15px);
  transform-origin: 0% 0%;
  pointer-events: none;
  transition: transform 0.35s, background 0.35s;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  height: 56px;
  border-radius: 0.5rem;
  border: 2px solid rgba(white, 0.5);
  background: ${backgroundColor};
`;
export const Input = styled.input`
  position: relative;
  width: 180px;
  height: 56px;
  background: transparent;
  border: 0;
  font-weight: 700;

  text-indent: 0.75em;
  color: rgba(#fff, 0.875);

  &:focus + ${Placeholder} {
    background: ${backgroundColor};
    transform: translate(0.625rem, -10px) scale(0.8);
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;