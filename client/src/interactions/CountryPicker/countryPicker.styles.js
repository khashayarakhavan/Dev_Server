//Libraries
import styled, {css, keyframes} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import respond from '../../design/responsive';

//Code

export const List = styled.div`
  position: relative;
  overflow: auto;
  height: 220px;

  background: ${colors.neutrals.light};

  font-size: 14px;
  ${"" /* padding: 2rem; */}

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${colors.secondary.lightest};
    background-color: #0ae;
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

export const Card = styled.div`
  position: absolute;
  bottom: 80%;
  right: 20%;
  background: #7245c7;
  display: grid;
  height: 10rem;
  
  width: 200px;
  border-radius: 3rem;
  padding: 1rem;

  ${'' /* font-size: 12px !important; */}
`;

export const Input = styled.button`
  color: ${rgba("white", 0.85)};
  ${"" /* position: absolute;
  ${'' /* */} */}
  align-self: center;
  justify-self: center; 

  background: transparent;
`;

export const Placeholder = styled.div`
  color: ${rgba("white", 0.5)};
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
  transform: scaleY(1.6) scaleX(1.4);
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
`;

export const Dialog = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  border-radius: 2rem;
  top: 100%;
  width: 100%;

  ${"" /* height: 260px; */
  }
  transform: translateY(1rem);
  background: transparent;
  transition-property: visibility, opacity, transform;
  transform-duration: 0.35s;
  ${(p) => p.open && openStyles};
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
  ${"" /* background: pink; */}
  ${"" /* */}
  z-index: 0;
  ${'' /* background: red; */}
  width: unset;
  ${"" /* width: 80%; */}
  ${"" /* width: 70%; */}

  & > div {
    background: ${rgba(colors.accent.ochreFire, 0.9125)};
    ${"" /* background: red; */}
    ${"" /* width: 50%; */}
  }

  & > ${Name} {
    height: 18px;
    width: ${getRandomNumberBetween(10, 150)}px;
    width: 50px;
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

  ${"" /* margin: 1rem; */}
  ${"" /* background: lightyellow; */}
  ${"" /* background: green; */}
  ${"" /* background: transparent; */}

  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${(p) => p.isLoading && loadingRow}
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
  height: 200px;
  background: ${rgba("#190932", 0.05)};
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
`;

export const Overlay = styled.div`
  position: fixed;
  ${'' /* transform: translate3d(0, 0, 0); */}
  ${'' /* transform: ${(p) => (p.isOpen ? 'translate3d(0, 0, 0)' : 'unset')}; */}
  z-index: 0;
  width: 100vw;
  height: 100vh;
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


