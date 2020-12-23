//Libraries
import styled , { css }  from "styled-components";
//Design
import {background_change} from './motions.styles';
import colors from './colors';

//Code
const events = {
  size: {
    extraLarge: "7.5rem",
    large: "2rem",
    medium: "1rem",
    small: "0.8rem",
  },
  mixins: {
    onHover: {
      palePink: (...args) => css`
        transition: background-color 0.3s ease;
        &:hover {
          background-color: ${colors.palePink};
        }
      `,
      callMe: (...args) => css`
        font-family: "Barriecito", cursive;
        font-size: 3.2rem;
        font-weight: 400;
      `,
      emailMe: (...args) => css`
        font-family: "Barriecito", cursive;
        font-size: 3.2rem;
        font-weight: 400;
      `,
    },

    logo: (...args) => css`
      font-family: "Barriecito", cursive;
      font-size: 3.2rem;
      font-weight: 400;
    `,
    menuButton: (...args) => css`
      font-family: "Montserrat", sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
    `,
    text: (...args) => css`
      font-family: "Nunito", sans-serif;
      font-size: 2rem;
      font-weight: 400;
    `,
    heroHeader: (...args) => css`
      font-family: "Rubik Mono One", sans-serif;
      font-weight: 400;
      font-size: 7.5rem;
    `,
  },
};


export const OnHover_palePink = styled.div`
  width: 60px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.palePink};
  }
  animation: ${background_change(colors.palePink)} 3s 2s infinite;
  z-index: -1;
`;

export const OnHover_paleYellow = styled.div`
  width: 60px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.paleYellow};
  }
  animation: ${background_change(colors.paleYellow)} 3s 3.5s infinite;
`;

export const OnHover_Green = styled.div`
    ${"" /* margin: 60px; */}
    width: 60px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    &:hover {
    background-color: ${colors.paleBlue};
    
    }
    animation: ${background_change(colors.paleBlue)} 3s  5s infinite  ;
    ${"" /* position: abosolute; */}
    z-index: -1;
    
         }
`;


export default events;



