//Libraries
import styled, {css, keyframes} from "styled-components";
import { Link as RouterLink} from "react-router-dom";
import { rgba } from "polished";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";

//Design
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';
import respond from '../../design/responsive';


//Code
export const Frame = styled.div`
  position: relative;
  background: red;
  width: 50%;
  height: 100%;
  font-size: 12px !important;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 189px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 0;
  background: #18023c;
  outline: none;
  cursor: pointer;
  color: ${rgba("white", 0.85)};

`;

export const ButtonIcon = styled.div`

  margin-right: 0.625rem;
`;

export const duration = "0.5s";

export const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba("black", 0.5)};
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transition-property: visibility opacity;
  transition-duration: ${duration};
`;

export const DialogOpenStyles = css`
  ${respond.pc.standard`
  transform: translateX(-50%) translateY(-20vw) !important;
  `};
  
  transform: translateX(-50%) translateY(-95vw);
  opacity: 1;
  visibility: visible;

`;

export const Dialog = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 101;

  left: 50%;
  top: 100vh;
  font-size: 4vw;
  width: min-content;
  height: 300px;
  height: 80vw;
  width: 80vw;
  border-radius: 5vw;

  ${respond.pc.standard`
    height: 20vw;
    width: 40vw;
    border-radius: 2vw;
    font-size: 1.4vw;
  `};

  background: ${colors.neutrals.light};

  transform: translateX(-50%) translateY(0);
  ${(p) => p.isOpen && DialogOpenStyles};
  transition: all 1s;
`;

export const DialogContent = styled.div`
  ${respond.pc.standard`
    padding: 2vw;
  `}
  padding: 2vw;
  padding-bottom: 1vw;
`;
export const GridContainerWrapper = styled.div`
  display: grid;
  grid-template-rows: 20vw 30vw 14vw;
  grid-template-rows: 25% 60% 15%;
  width: 100%;
  height: 70vw;

  ${respond.pc.standard`
    grid-template-columns: 50% 50%;
    margin-top: 2vw;
  `}
`;

export const GridContainer = styled.div`
  grid-row: 2 / span 1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1vw;
  padding-top: 3vw;

  ${respond.pc.standard`
    grid-column: 2/ span 1;
  `}

  & > * {
    display: flex;

    align-items: center;

    ${'' /* font-size: 16px;
    font-weight: 200; */}
  }
`;

export const LocalLeft = styled(ScrollLink)`
  &,
  &:link,
  &:visited {
    color: ${colors.secondary.darkest};
  }
  grid-row: 1 / span 1;
  justify-content: left;
  background: transparent;
  border-radius: 6px;
`;

export const LocalCenter = styled.a`
  grid-row: 2 / span 1;
  justify-content: left;
  background: transparent;
  border-radius: 6px;
`;



export const LocalRight = styled(RouterLink)`
  grid-row: 3 / span 1;
  justify-content: left;
  background: transparent;
  border-radius: 6px;
  &,
  &:link,
  &:visited {
    color: ${colors.secondary.darkest};
  }
`;

export const ReadMore = styled.div`
  grid-row: 3 / span 1;
  margin-top: "0.2rem";
  color: red;
  color: #eb5e28;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: flex-end;
  padding-right: 2vw;

  div {
    line-height: 1.2;
    justify-self: flex-end;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SubLocal = styled.div`
  &,
  &:link,
  &:visited {
    color: ${colors.secondary.darkest};
  }
  box-shadow: ${shadows.neumorphic.original};
  width: 40vw;
  height: 10vw;

  margin-left: 6vw;

  border-radius: 6px;
  background: white;
  padding: 1vw;

  display: flex;
  ${"" /* justify-content: left; */}
  align-items: center;
  justify-content: flex-end;
  justify-content: center;

  div {
    width: 80%;
    display: flex;
    justify-self: center;
    align-items: center;
  }

  span {
    margin-left: 2vw;

    &,
    &:link,
    &:visited {
      color: ${colors.secondary.darkest};
    }

    ${respond.pc.standard`
      margin-left: 2vw;
    `}
  }

  ${respond.pc.standard`
    width: 17vw;
    padding: 2rem;  
    margin-left: 2rem;
    
  `}

  :hover {
    background: orange;
    color: white;
  }
`;

export const Header = styled.div`

  display: flex;
  
  align-items: center;
  justify-content: space-between;
  justify-content: flex-end;


  & > .material-icons {
    color: ${rgba("#10132F", 0.38)};
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${rgba("#10132F", 0.8)};
`;

export const Message = styled.div`
  grid-row: 1 / span 1;
  font-size: 1.2875rem;
  font-size: 2rem;
  line-height: 1.1;
  font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
  font-weight: 400;
  color: rgba("#10132F", 0.38);

  ${respond.pc.standard`
    grid-column: 1 / span 1;
  `}
`;

export const SubMessage = styled.div`
  font-size: 2.5vw;
  font-weight: 200;
  color: ${colors.primary};

  ${respond.pc.standard`
    margin-top: 6vw;
    margin-left: 0.2vw;
  `}
`;


const colorChange4 = (backColor) => keyframes`
  0% { background:  transparent;}
  40% { background:  ${backColor}; }
  100% { background:  ${backColor}; color: black; }

`;
const colorChange3 = (backColor) => keyframes`
  from { background:  transparent;}
  to { background:  ${backColor};  }

`;
const colorChange2 = (color) => keyframes`
  0% { background:  transparent;}
  50% { background:  ${color};  }
  100% { background:  transparent; }
`;
const colorChange = keyframes`
  0% { background:  blue;}

  100% { background:  red; }
`;

const background_change = (backColor) => keyframes`
  0% {
    background-color: ${backColor};
    opacity: 0%;
  }

  50% {
    background-color: ${backColor};
    opacity: 100%;
  }

  100% {
   background-color: none;
  }
`;

export const spinMotion = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg);};
`;

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; background: red; }
 30% { height: 400px; width: 400px; opacity: 1; background: blue; }
 40% { height: 405px; width: 405px; opacity: 0.3; background: white; }
 100% { height: 100px; width: 100px; opacity: 0.6; background: green; }
`;


export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-size: 4.6vw;
  font-weight: 800;
  color: ${colors.primary};
  font-family: "Poppins", sans-serif;
  height: 25px;
  height: 8.333vw;
  width: 25px;
  width: 8.333vw;
  border-radius: 50%;

  animation: ${colorChange} 0.8s infinite;

  animation: ${colorChange2()} 1s ease infinite;

  animation: ${(props) => colorChange3(props.backColor)} ${(props) =>
    props.duration}
    ease-in-out ${(props) => props.delay} infinite alternate none running;

  animation: ${(props) => colorChange4(props.backColor)}
    ${(props) => props.duration} linear ${(props) => props.delay} infinite ;
`;


export const NumberCircle = styled.div`

  width: 150px;
  height: 15px;

  
  background: red !important;
  transition: all 1s;
  
  animation: ${colorChange} 1s linear;
`;


export const CodeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const CodeInput = styled.input`
  flex: 1 0 auto;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 3px solid ${rgba("black", 0.05)};
  border-radius: 0.325rem;
  outline: none;

  &:focus {
    border-color: #6330b4;
  }
`;

export const CodeDash = styled.div`
  margin: 0 1rem;
`;

export const GradientButton = styled.button`
  color: white;
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  outline: none;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${colors.accent.ochrePale},
    ${colors.accent.ochreFire}
  );
  background: linear-gradient(to right, #6330b4, #6300ff);
`;
