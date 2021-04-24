//Libraries
import styled, {css, keyframes} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import respond from '../../design/responsive';

//Code

export const List = styled.div`
  padding-right: 0.5rem;
  ${respond.pc.standard`
    padding: 1rem 0.5rem;
    padding-right: 2.5rem;
  `}
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 2rem;
  height: 220px;
  background: white;
  ${"" /* background: ${colors.neutrals.light}; */}

  font-size: 14px;
  ${"" /* padding: 2rem; */}

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${colors.secondary.lightest};
    background-color: #0ae;
    background-color: ${colors.accent.lightest};
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }
`;

const gridCSS = css`
  grid-column: 2/-1;
  grid-row: 1/2;
`;
export const Card = styled.div`
  position: relative;

  width: 400px;
  width: 100%;

  
  border-radius: 3rem;
  border-radius: inherit;
  margin: 1rem;
  margin-bottom: 0;
  padding: 1rem;
  padding-bottom: 14.1421356237px;
  ${"" /* height: 30%; */}
  ${"" /* position: absolute; */}
  ${"" /* bottom: 80%;
  right: 20%; */}

  background: #7245c7;
  background: transparent;
  display: grid;

  ${"" /* height: 10rem; */}

  ${(p) => p.grid && gridCSS};

  ${"" /* font-size: 12px !important; */}
`;

export const Input = styled.button`
  color: ${rgba("white", 0.85)};
  color: pink;
  ${"" /* position: absolute;
  ${'' /* */} */}
  align-self: center;
  justify-self: center; 

  background: transparent;
`;

export const Placeholder = styled.div`
  color: ${rgba("white", 0.5)};
  color: black;
`;

export const Row = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FlagContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  display: grid;
  ${'' /* background: red; */}
`;
export const Flag = styled.img`
  width: 30px;
  height: 30px;
  transform: scale(1.3);
  ${'' /* height: 30px; */}
  ${respond.pc.standard`
    transform: scaleY(1.6) scaleX(1.4);  
  `}
  justify-self: center;
  align-self: center;
`;
export const Image = styled.div`
  width: 30px;
  height: 30px;
  align-self: center;
  justify-self: center;
  background-size: contain;
  background-position: center;
  ${"" /* 
  background-repeat: no-repeat; */}
  ${"" /* background-origin: padding-box; */}
  ${"" /* background-attachment: fixed; */}

    

`;

const openStyles = css`
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: visibility 0.75s, opacity 0.75s, transform 0.75s;
`;

export const DropDown = styled.div`
 ${(p) => p.open && openStyles};
  position: absolute;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  border-radius: 4px;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 10000;

  list-style-type: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: 0.3s ease;

  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 120px;
    width: 0;
    height: 0;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.05);
    border-top: 6px solid #fff;
    border-right: 6px solid #fff;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
    transform: rotate(-45deg);
    mix-blend-mode: multiple;
  }

  a {
   display: block;
	 border-bottom: 1px solid rgba(0, 0, 0, .05);
	 padding: 16px 0;
	 color: inherit;
	 font-size: 10px;
	 text-decoration: none;
  }

  li {
    z-index: 1;
    position: relative;
    background: #fff;
    padding: 0 20px;
    color: #666;

    &.active {
      color: #5380f7;
    }
    &.first-child {
      border-radius: 4px 4px 0 0;
    }
  }
    &.last-child {
      border-radius: 0 0 4px 4px;

      a {
        border-bottom: 0;
      }
    }
  }
`;

export const Dialog = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  overflow: visible;
  border-radius: 2rem;
  top: 100%;
  
  width: 100%;
  z-index: 1000;

  transform: translateY(10rem);
  background: transparent;
  background: white;
  ${
    "" /* transition-property: visibility, opacity, transform;
  transform-duration: 3.35s; */
  }
  ${(p) => p.open && openStyles};

  &::before {
    ${'' /* Create Triangle Here ! */}
    content: "";
    position: absolute;
    top: 0px;
   

    ${'' /* z-index: 1000000; */}
    ${"" /* background: red; */}
    left: 120px;
    width: 20px;
    height: 20px;
    background: #fff;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.05);
    border-top: 6px solid red;
    border-top: 6px solid #fff;
    border-right: 6px solid red;
    border-right: 6px solid #fff;
    border-bottom: 6px solid red;
    border-bottom: 6px solid transparent;
    border-left: 6px solid red;
    border-left: 6px solid transparent;
    transform: translate(50%, -50%) rotate(-45deg);
    mix-blend-mode: multiple;
  }
`;

export const Avatar = styled.div`
  font-size: 14px;
  padding: 2rem;
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`;

export const Name = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;
  width: 10px;
  height: min-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${rgba("white", 0.85)};
`;


const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const loadingRow = css`
  position: absolute;
  width: unset;
  ${'' /* width: 100%; */}

  ${"" /* background: pink; */}
  ${"" /* */}
  z-index: 0;
  ${'' /* background: red; */}
  ${"" /* width: 80%; */}
  ${"" /* width: 70%; */}

  & > div {
    background: ${rgba(colors.accent.ochreFire, 0.9125)};
    ${"" /* background: red; */}
    ${"" /* width: 50%; */}
  }

  & > ${Name} {
    height: 18px;
    width: 50px;
    width: ${getRandomNumberBetween(10, 150)}px;
    ${"" /* background: blue; */}
    color: black;
  }
`;



export const RowLazy = styled.button`
  position: relative;
  height: 50px;
  width: 100%;
  z-index: 1;
  ${"" /* width: 50%; */}
  ${"" /* width: 100%; */}
  padding: 2rem;

  background: ${colors.neutrals.light};
  background: white;

  ${"" /* margin: 1rem; */}
  ${"" /* background: lightyellow; */}
  ${"" /* background: green; */}
  ${"" /* background: transparent; */}

  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${(p) => p.isLoading && loadingRow}

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;




const skeletonColor = "#e0daeb";
const borderRadius = "3px";

const glimmer = keyframes`
  0% { transform: rotate(10deg) translate(-200%, -50%); }
  100% { transform: rotate(10deg) translate(200%, -50%); }
`;

export const skeletonShimmer = css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  width: 80px;
  height: 200px;
  background: ${rgba("#190932", 0.95)};
  background: ${colors.accent.lightest};
  animation: ${glimmer} 1.25s infinite linear;
`;

export const Skeleton = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "12px"};
  margin: ${(props) => props.margin || 0};
  border-radius: ${(props) => props.borderRadius || borderRadius};
  background: ${skeletonColor};

  &::before {
    ${skeletonShimmer};
  }
`;

export const SkeletonRow = styled.div`
  ${'' /* position: relative; */}
  position: absolute;
  width: 100%;
  ${'' /* height: 50px; */}
  z-index: 0;
  display: flex;
  align-items: center;
  ${'' /* background: white; */}
`;

export const Overlay = styled.div`
  position: fixed;
  ${'' /* transform: translate3d(0, 0, 0); */}
  ${'' /* transform: ${(p) => (p.isOpen ? 'translate3d(0, 0, 0)' : 'unset')}; */}
  z-index: 0;
  width: 100vw;
  ${'' /* height: 100vh; */}
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${rgba("black", 0.05)};
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transition-property: visibility opacity;
  transition-duration: 0.45s;
`;

export const CountryName = styled.span`
  width: 130px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  margin-left: 1rem;
  ${respond.pc.standard`
    margin-left: 1.4rem;  
  `}

  white-space: nowrap;
  text-align: left;
`;
export const CountryCode = styled.span`
  ${"" /* margin-right: 1.5rem; */}
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-family: "Josefin Sans", sans-serif;
  position: absolute;
  color: #003153;
  color: #102539;

  font-size: 14px;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  ${"" /* align-self: flex-start; */}
`;


