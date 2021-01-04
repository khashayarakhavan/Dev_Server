//Libraries
import styled, {createGlobalStyle, css, keyframes} from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';

export const duration ={
  transtion:'0.45s',
 };

export const backgroundColor= 'red';

export const Wrapper = styled.div`
  grid-column: center-start / center-end;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 28px;
  background: white;
`;

export const Input = styled.input`
  flex: 0 1 auto;


  ${'' /* text-indent: 0.75em; */}
${'' /*   
  &:focus,
  &:active {
    border: none;
    outline: none;
  } */}
`;

export const Button = styled.button`
  position: relative;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
`;

export const Icon = styled.span`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const spinMotion = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg);};
`;

export const Spin = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  animation: ${spinMotion} 0.5s linear;
`;

export const Message = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  fill: #0bc1fd;
  ${p => p.isSuccess && "fill: #16bd92"};
  ${p => p.isError && "fill: #fb6767"};
  transform: scale(${p => p.isComplete ? 20 : 1});
  transition: transform 0.35s, fill 0.35s;
`;
