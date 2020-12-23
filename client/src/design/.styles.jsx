//  font-family: 'Barriecito', cursive;
//  font-family: 'Do Hyeon', sans-serif;
//  font-family: 'Righteous', cursive;
//  font-family: 'open sans', sans-serif;
 
//  font-family: 'Josefin Sans', sans-serif;
//  font-family: 'Lato', sans-serif;
//  font-family: 'Major Mono Display', monospace; // special:400
//  font-family: 'Helvetica-Bold'; // nunito :400&900
//  font-family: 'Roboto', sans-serif; // not bad bold: 900
//  font-family: 'Merriweather Sans', sans-serif; // curvy apostrophe:800 
//  font-family: 'Nunito', sans-serif; // nunito :400&900
//  font-family: 'Open Sans', sans-serif; // heavy bold:800
//  font-family: 'Poppins', sans-serif; // clean type: 400&900


//  //LogoText font variations
//   font-family: "Viga", sans-serif;
//   font-family: "VT323", monospace;
//   font-family: "Rubik Mono One", sans-serif; // rubik
//   font-family: "Philosopher", sans-serif;
//   font-family: "Paytone One", sans-serif;
//   font-family: "Julius Sans One", sans-serif;
//   font-family: "Josefin Sans", sans-serif;
//   font-family: "Fira Sans Extra Condensed", sans-serif; // fira
//   font-family: "Chakra Petch", sans-serif;
//   font-family: "Allerta Stencil", sans-serif; //Allerta
//   font-family: "Major Mono Display", monospace;
//   font-family: "Anton", sans-serif;
//   font-family: "Fredericka the Great", cursive;
//   font-family: 'Barrio', cursive;



  

import {css} from 'styled-components';
import colors from './colors';

const effects = {
  size: {
    extraLarge: "7.5rem",
    large: "2rem",
    medium: "1rem",
    small: "0.8rem",
  },
  mixins: {
    onHover: {
      palePink: (...args) => css`
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

export default (effects);