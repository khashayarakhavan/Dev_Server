//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';

const duration ={
  transtion:'0.45s',
};



export const Card = styled.div`
  ${'' /* grid-row: 1/-1; */}
  margin: 1rem;
  position: absolute;
  position: relative;
  width: 350px;
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
    ${"" /* background: red; */}
  }

  & .rdw-editor-toolbar {
    padding: 1rem 0 0;
    border-top: 2px solid ${rgba("black", 0.05)};
    ${"" /* background: yellow; */}
    ${'' /* width: 50%; */}
  }

  & .rdw-editor-main {
    color: #565360;
    color: ${colors.neutrals.darkest};
    ${"" /* background: lightblue; */}
    height: 20rem;
    font-size: 24px;

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
  }

  & .rdw-option-wrapper img {
    width: 24px;
    height: 24px;
    opacity: 0.25;
  }

  & .rdw-option-wrapper:hover {
    box-shadow: none;
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
`;

export const Image = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: #e3d5ff;
  background-size: 100%;
  background-position: center bottom;
  background-repeat: repeat-x;
  background-repeat: no-repeat !important;
  
`;

export const Text = styled.span`
  color: #acaab7;
  font-size: 18px;
`;




