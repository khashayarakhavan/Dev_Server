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

const fonts = {
  size: {
    extraLarge: "7.5rem",
    large: "2rem",
    medium: "1rem",
    small: "0.8rem",
  },
  Abril: (...args) => css`
    font-family: "Abril Fatface", cursive;
  `,

  menu: {
    logo: (...args) => css`
      font-family: "Barriecito", cursive;
      font-weight: 400;
      font-size: clamp(30px, 3vw, 3vw);
      line-height: 1.6;
    `,
    link: (...args) => css`
      font-family: Montserrat, sans-serif;
      font-weight: 800;
      font-size: clamp(11px, 1.1vw, 1.1vw);
      line-height: 1.6;
    `,
  },

  heading: {
    h1: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      font-weight: 400;
      font-size: clamp(3.9rem, 3.80859375vw, 3.80859375vw);
      line-height: 1;
    `,
    h1_sub: (...args) => css`
      font-family: "Poppins", sans-serif;
      font-size: 2vw;
      font-weight: 400;
      line-height: clamp(30px, 2.9296vw, 2.9296vw);
    `,
    h1_sub_light: (...args) => css`
      font-family: "Poppins", sans-serif;
      font-size: 2vw;
      font-weight: 200;
      line-height: clamp(30px, 2.9296vw, 2.9296vw);
    `,
    h1_button: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      font-weight: 400;
      font-size: clamp(0.9rem, 0.8789vw, 0.8789vw);
      line-height: 1.6;
    `,
    h1_button_sub: (...args) => css`
      font-family: "Poppins", sans-serif;
      font-size: clamp(0.9rem, 0.8789vw, 0.8789vw);
      font-weight: 200;
      line-height: 1.6;
    `,
    h2: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      font-size: 2.8vmax;
      font-weight: 400;
      line-height: 1;
    `,
    h2_sub: (...args) => css`
      font-family: "Nunito", sans-serif;
      font-size: 2vmax;
      font-weight: 400;
      line-height: clamp(30px, 2.9296vw, 2.9296vw);
    `,
    h2_sub_light: (...args) => css`
      font-family: "Nunito", sans-serif;
      font-size: 2vmax;
      font-weight: 200;
      line-height: clamp(30px, 2.9296vw, 2.9296vw);
    `,
    h2_text: (...args) => css`
      font-family: "Nunito", sans-serif;
      font-size: clamp(1.7rem, 1.328125vw, 1.328125vw);
      font-weight: 200;
      line-height: 1.6;
    `,
    h3: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      line-height: 1.5;
      font-weight: 700;
      font-size: 1.5vw;
      -webkit-font-smoothing: antialiased;
    `,
    h3_text: (...args) => css`
      font-family: "Poppins", sans-serif;
      font-size: 1.1vw;
      font-weight: 800;
      line-height: 1.6;
    `,
    h3_button: (...args) => css`
      font-family: Arial;
      font-size: 1vw;
      font-weight: 400;
      font-stretch: normal;
      line-height: normal;
    `,
    h4: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      line-height: 1.5;
      font-weight: 700;
      font-size: 1.46484375vw;
      -webkit-font-smoothing: antialiased;
    `,
    h4_text: (...args) => css`
      font-family: "Poppins", sans-serif;
      font-size: 0.9765625vw;
      font-weight: 200;
      line-height: 1.6;
    `,
  },

  mixins: {
    CTA: {
      visitProfile: (...args) => css`
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
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
      font-size: 2vw;
      font-weight: 400;
    `,
    heroHeader: (...args) => css`
      font-family: "Rubik Mono One", Cambria, "Times New Roman", Times,
        sans-serif;
      font-weight: 400;
    `,
  },
};

export default (fonts);