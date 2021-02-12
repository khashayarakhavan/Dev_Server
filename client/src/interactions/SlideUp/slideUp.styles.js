//Libraries
import styled, {css, keyframes} from "styled-components";
import { rgba } from "polished";
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
  ${"" /* top: 50%; */};
  ${"" /* left: 50%; */};
  ${"" /* transform: translate(-50%, -50%); */};
`;

export const ButtonIcon = styled.div`
  ${"" /* font-size: 19px; */}
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
  ${respond.pc.min`
  transform: translateX(-50%) translateY(-20vw);
  `};
  transform: translateX(-50%) translateY(-20vh);
  ${"" /* display: block; */}
  visibility: visible;
  opacity: 1;
`;

export const Dialog = styled.div`
  ${"" /* display: none; */}
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 101;
  ${"" /* bottom: 0;
  left: 0; */}

  left: 50%;
  top: 100vh;
  font-size: 14px;
  width: min-content;
  height: 300px;
  height: 20vh;
  width: 60vw;
  ${respond.pc.min`
   height: 20vw;
  width: 40vw;
  `};

  border-radius: 2vw;
  background: ${colors.neutrals.light};
  ${"" /* transform: translateY(${(p) => (p.isOpen ? 0 : "100%")}); */}

  transform: translateX(-50%) translateY(0);
  ${(p) => p.isOpen && DialogOpenStyles};
  transition: all 1s;
`;

export const DialogContent = styled.div`
  padding: 2rem;
`;
export const GridContainerWrapper = styled.div`
margin-top: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  ${'' /* background: pink; */}
`;

export const GridContainer = styled.div`
grid-column: 2/ span 1;
  ${'' /* background: grey; */}
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  ${'' /* grid-template-rows: 1fr 100px; */}
  ${'' /* margin-top: 1rem; */}

  & > * {
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    ${'' /* height: 3rem; */}
    ${'' /* background: transparent !important; */}
    font-size: 16px;
    font-weight: 200;
  }
  
  ${'' /* box-shadow: ${shadows.neumorphic.original}; */}
  ${'' /* background: #1234F1; */}
`;

export const LocalLeft = styled.div`
  grid-row: 1 / span 1;
 
  background: transparent;
  border-radius: 6px;
`;

export const LocalCenter = styled.div`
  grid-row: 2 / span 1;
 
  background: transparent;
  border-radius: 6px;
`;



export const LocalRight = styled.div`
 
  grid-row: 3 / span 1;
  background: transparent;
  border-radius: 6px;
`;

export const ReadMore = styled.div`
  margin-top: "0.2rem";
  color: red;
  color: #EB5E28;
  font-size: 10px;
  font-family: "Poppins", sans-serif;
`;

export const SubLocal = styled.div`
  box-shadow: ${shadows.neumorphic.original};
  width: min-content;
  width: 17rem;
  border-radius: 6px;
  background: white;
  height: 2rem;
  margin-left: 2rem;

  padding: 2rem;
  display: flex;
  justify-content: left;
  align-items: center;

  :hover {
    background: orange;
    color: white;
  }

 
`;

export const Header = styled.div`
  ${'' /* display: grid;
  grid-template-columns: 1fr  1fr 25px ; */}
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  justify-content: flex-end;
  ${'' /* margin-bottom: 1.75rem; */}

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
  grid-column: 1 / span 1;
  font-size: 1.2875rem;
  font-size: 2rem;
  font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
  font-weight: 400;
  color: rgba("#10132F", 0.38);
  ${"" /* margin-bottom: 1.75rem; */}
`;

export const SubMessage = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  color: ${colors.primary};
  margin-top: 6rem;
  ${'' /* margin-bottom: 1.75rem; */}
  margin-left: 2px;
`;


const colorChange4 = (backColor) => keyframes`
  0% { background:  transparent;}
  40% { background:  ${backColor}; }
  100% { background:  ${backColor}; color: black; }
  ${"" /* 100% { background:  transparent; } */}
`;
const colorChange3 = (backColor) => keyframes`
  from { background:  transparent;}
  to { background:  ${backColor};  }
  ${'' /* 100% { background:  transparent; } */}
`;
const colorChange2 = (color) => keyframes`
  0% { background:  transparent;}
  50% { background:  ${color};  }
  100% { background:  transparent; }
`;
const colorChange = keyframes`
  0% { background:  blue;}
  ${'' /* 50% { background:  red;  } */}
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
  font-weight: 800;
  color: ${colors.primary};
  font-family: "Poppins", sans-serif;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  ${"" /* animation: ${breatheAnimation} 8s infinite; */}
  ${"" /* animation: ${spinMotion} 8s infinite; */}
  animation: ${colorChange} 0.8s infinite;

  animation: ${colorChange2()} 1s ease infinite;

  ${"" /* animation: name time func delay iteration dir fill play; */}
  ${
    "" /* animation: ${colorChange3(
    "plum"
  )} 2s ease-in-out 0.5s infinite alternate none running;
  animation: ${colorChange3("plum")} ${(props) => props.duration} ease-in-out
    ${(props) => props.delay} infinite alternate none running; */
  }

  animation: ${(props) => colorChange3(props.backColor)} ${(props) =>
    props.duration}
    ease-in-out ${(props) => props.delay} infinite alternate none running;

  animation: ${(props) => colorChange4(props.backColor)}
    ${(props) => props.duration} linear ${(props) => props.delay} infinite ;
`;


export const NumberCircle = styled.div`
  ${"" /* border-radius: 50%; */}
  ${"" /* grid-column: 1/ span 1; */}
  width: 150px;
  height: 15px;
  ${"" /* height: 15px; */}
  
  background: red !important;
  transition: all 1s;
  ${"" /* animation: ${colorChange("red")} 2s ease-in-out infinite linear; */}
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
