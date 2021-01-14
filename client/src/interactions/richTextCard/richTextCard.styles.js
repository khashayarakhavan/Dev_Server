//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import shadows from "../../design/shadows.styles";

const duration ={
  transtion:'0.45s',
};



export const Card = styled.div`
  ${"" /* grid-row: 1/-1; */}
  margin: 1rem;
  position: absolute;
  position: relative;
  width: 250px;
  width: clamp(350px, 27.34375vw, 600px);
  width: 100%;
  ${"" /* top: 10%;
  left: 30%; */}
  ${"" /* border-radius: inherit; */}
  background: inherit;
  overflow: hidden;
  padding: 1rem;
  ${"" /* border-radius: 0.5rem; */}
  ${"" /* background: white; */}
  ${"" /* box-shadow: 0 4px 15px ${rgba("black", 0.05)}; */}

  & .rdw-editor-wrapper {
    display: flex;
    flex-direction: column-reverse;
    ${"" /*  */}
    background: transparent;
    ${"" /* border-radius: 5px; */}
    ${"" /* background-color: ${colors.neutrals.lightest}; */}
  }

  & .rdw-editor-toolbar {
    padding: 1rem 0 0;
    font-size: 12px;
    border: 0;
    border-top: 4px solid ${rgba("black", 0.05)};
    border-top: 4px solid ${colors.accent.lightest};

    background: transparent;

    ${"" /* */}
    ${"" /* width: 50%; */}
  }

  & .rdw-editor-main {
    transition: all 0.35s;
    padding: 1rem;
   
    color: #565360;
    color: ${colors.neutrals.darkest};
    background-color: ${colors.neutrals.lightest};
    background-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.99);
    background-color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    background-color: rgba(255, 255, 255, 0.4);

    &:hover {
      background-color: rgba(255, 255, 255, 0.85);
    }
 
    height: 20rem;
    border-radius: 20px;
    ${"" /* border-bottom-right-radius: 50px 20px; */}
    border-bottom-right-radius: 0px;
    ${"" /* border-bottom-left-radius: 50px 20px; */}
    border-bottom-left-radius: 0px;
    font-size: 17px;
        font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    

    padding: 0.5rem;
     padding-left: 2rem;

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
  }

  & .rdw-option-wrapper {
    min-width: auto;
    background: transparent;
    border: 0;
    transition: all 0.35s;
    border-radius: 8px;
    width: 34px;
    height: 34px;

    &:hover {
      background: red;
    }

    ${
      "" /* :before {
      content: "";
      position: absolute;
      width: 150%;
      height: 150%;
      background: red;
      ${"" /* z-index: -1; */
    }
    } */}
  }

  & .rdw-option-wrapper img {
    position: relative;
    width: 24px;
    height: 24px;
    opacity: 0.25;
  }

  & .rdw-option-wrapper:hover {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.85);

    fill: black;
    filter: hue-rotate(210deg);
    ${"" /* box-shadow: ${shadows.neumorphic.original}; */}
  }

  & .rdw-option-active {
    box-shadow: none;
  }

  & .rdw-option-active img {
    opacity: 0.85;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: white;
  background: transparent;
  ${'' /* border-bottom: 4px solid ${colors.accent.lightest}; */}
`;

export const Image = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: #e3d5ff;
  ${'' /* background-size: cover; */}
  background-size: 100%;
  background-position: center bottom;
  background-repeat: repeat-x;
  background-repeat: no-repeat !important;
  
`;

export const Text = styled.span`
  color: #acaab7;
  color: ${colors.neutrals.darkest};
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  padding-left: 1rem;

  ${"" /* background: white; */}
`;




