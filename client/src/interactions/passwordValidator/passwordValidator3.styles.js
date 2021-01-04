//Libraries
import styled, {createGlobalStyle, css, keyframes} from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';

export const duration ={
  transtion:'0.45s',
 };

export const backgroundColor= 'red';

export const Wrapper = styled.div`
  ${'' /* grid-column: center-start / center-end; */}
  position: relative;
  width: min-content;
  height: min-content;
  grid-column: 2 / -1;
  grid-row: 2;
  overflow: hidden;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  border-radius: 28px;
  background: white;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px
  flex: 0 1 auto;
  border: 0;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }


  ${"" /* text-indent: 0.75em; */}
${
  ""
  /*
   */
}
`;

export const Button = styled.button`
  position: relative;
  display: grid;
  & > svg {
    align-self: center;
    justify-self: center;
  }
  ${"" /* flex: 0 0 40px; */}
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

export const Icon = styled.span`
  position: absolute;
  z-index: 2;
  ${'' /* width: 100%; */}
  ${'' /* height: 100%; */}
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
  z-index: 3;
  left: 30%;
  opacity: ${p => p.isComplete ? 1 : 0};
  font-size: 14px;
  font-weight: 600;
  ${'' /* top: 50%; */}
  ${'' /* left: 50%; */}
  transform: ${p => p.isComplete ? `translate(-50%, 0%)` : ""};
  transition: transform 0.5s, opacity 0.3s;
`;

export const Svg = styled.svg`
  position: absolute;
  display: grid;
  & > * {
    align-self: center;
    justify-self: center;
  }
  ${"" /* top: 50%;
  left: 50%; */}
  z-index: 1;
  fill: #0bc1fd;
  fill: ${colors.neutrals.light};
  width: 100%;
  height: 100%;
  ${
    "" /* ${(p) => p.isSuccess && `fill: #16bd92;`};
  ${(p) => p.isError && "fill: #fb6767;"}; */
  }
  ${"" /* transform: translate(-50%, -50%); */}
  transform: scale(${(p) => (p.isComplete ? 20 : 1)});
  transition: transform 0.35s, fill 0.35s;
  ${"" /* transform-origin: center center; */}
  ${"" /* transform-origin: 10% 10%; */}
  ${(props) => (props.isSuccess === true ? `fill: #16bd92;` : "")};
  ${(props) => (props.isError === true ? `fill: #fb6767;` : "")};
`;
