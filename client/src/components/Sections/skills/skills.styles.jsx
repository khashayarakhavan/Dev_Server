//Basics
import { Link } from "react-router-dom";
//Libraries
import styled , {css , keyframes} from "styled-components";
//Mixins
import { mix_containers, mix_flex } from "design/mixins.styles";
//Responsive
import { respond } from "design/responsive";
//Design
import {VegeloperContainer} from "design/containers.styles";
import colors from "design/colors";
import sizes from "design/sizes";
import shadows from "design/shadows.styles";
import fonts from 'design/fonts.styles';
import margins from 'design/margins.styles';

//Assets



//Code


export const InheritedBody = styled.div`
  font-family: brandon-grotesque, HelveticaNeue-Light, "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #545454;

  -webkit-font-smoothing: antialiased;
      margin: 0;
`;
export const inheritedHtml = styled.div`
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
export const Article = styled.article`
  grid-column: center-start/center-end;
  display: flex;
  justify-content: center;



  header {

    margin-bottom: 20rem;
    h2 {
      ${fonts.mixins.heroHeader};
      color: ${colors.primary};
      line-height: ${sizes.lineHeight.extraLarge};
      margin-bottom: ${sizes.margin.large};
      margin-block-end: ${sizes.margin.large};
      font-size: 3vmax;
      ${respond.mobile.medium`
      font-size: 4vmax;
      `}
      
    
      text-align: center;
   
    }
  }
`;
export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  max-width: 150px;
  min-height: 1px;
  margin: 0;
`;

export const WhatIDo = styled.section`
  //What_I_Do
  z-index: 980;
  position: relative;

  padding: 0;

`;
export const SkillsContainer = styled(VegeloperContainer)`
  //Container
  grid-column: cover-start / cover-end;
  background: transparent;
  justify-items: center;
  ${'' /* width: 70%; */}

  ${"" /* transition: all 0.5s ease-in-out; */}
  margin-right: auto;
  margin-left: auto;

  position: relative;

  &::selection {
    background: #e0ebe8;
    color: #545454;
    text-shadow: none;
  }
`;

export const Row = styled.div`
  grid-column: center-start/center-end;
`;
export const ColMd12 = styled.div`
  position: relative;
  min-height: 1px;


  

`;
export const ColMd4 = styled.div`
  
  position: relative;
  display: flex;

  align-items: center;

  min-height: 1px;
  padding-left: 5rem;
  padding-right: 5rem;

 
`;
export const ColMd6 = styled.div`
  position: relative;
  width: 100%;
  flex-flow: no-wrap;
  display: flex;
  ${'' /* margin-bottom: 3vw; */}
  justify-content: center;
  min-height: 1px;
  &:last-of-type {
    ${'' /* background: #ff0000; */}
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;

  ${respond.pc.standard`
  justify-content: flex-end;
  `}
`;

export const ColMd7 = styled.div`
  display: flex;
  flex-flow: no-wrap;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;


`;
export const ColMd6_Pull3 = styled(ColMd6)`

`;


export const DesignRow = styled(Row)`
  grid-column: center-start/center-end;
  display: flex;
  flex-direction: column;
  align-items: center;


  
  width: 100%;
  justify-self: center;
  align-self: center;

  text-align: left;

  & ${ColMd6}:not(:last-child) {
    margin-bottom: 15vw;

    ${respond.pc.standard`
      margin-bottom: 5vw;
    `}
  }
}
 
  
`;

export const HomeDesign = styled.div`
  margin: 0 auto;

  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
`;


export const BubbleRight = styled.div`
  ${shadows.mixins.neumorphic.button};
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 15vw;
  height: 15vw;

  ${respond.pc.standard`
  width: 7.7vw;
  height: 7.7vw;
  `}
`;

export const BubbleLeft = styled.div`
  ${shadows.mixins.neumorphic.original};

  width: 10rem;
  height: 10rem;

  position: absolute;
  overflow: hidden;
  top: 2.6rem;
  left: 0;

`;
export const BubbleButton = styled.div`
  ${shadows.mixins.neumorphic.invert};


  display: grid;
  align-items: center;
  justify-content: center;
  min-width: 11.5rem;
  
  height: 25rem;
  border-radius: 50%;

  overflow: hidden;


`;


export const Bubblinger = css`
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -moz-animation-duration: 20s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-name: bubblinger-vert-down;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
`;
export const Translate = keyframes`
  0% {
    transform: translateY(-300px);
    
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(250px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-250px);
  }
`;

export const DesignIconVert = styled.div`
  animation: fourSkills 7s cubic-bezier(1, 0, 0, 1) infinite ; // steps(50)
  background-size: 100%;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  width: 7.7rem;
  height: 7.7rem;
  border-radius: 50%;

  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603146749/4-skills_fz1ley.png);


  @keyframes cyclist {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -160px; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 0px;
    }
    75% {
      background-position: 0 -80px;
    }
    100% {
      background-position: 0 0px;
    }
  };

  @keyframes fourSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -7rem; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -14rem;
    }
    75% {
      background-position: 0 -21rem;
    }
    90% {
      background-position: 0 0px;
    }
    100% {
      background-position: 0 0px;
    }
  }
  
`;

export const DevIconVert = styled.div`
  border-radius: 50%;
  background-size: 100%;
  animation: fourSkills 7s cubic-bezier(1, 0, 0, 1) infinite; // steps(50)
  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603150550/GCP-AWS-Heroku-DO2_eogbkt.png);
 
  width: 7.7rem;
  height: 7.7rem;

  

  
  @keyframes threeSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -7.5rem; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -15rem;
    }
    75% {
      background-position: 0 0px;
    }
  }

  @keyframes fourSkills {
    0% {
      background-position: 0 0px;
    }
    25% {
      background-position: 0 -7rem; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px
    }
    50% {
      background-position: 0 -14rem;
    }
    75% {
      background-position: 0 -21rem;
    }
    90% {
      background-position: 0 0px;
    }
    100% {
      background-position: 0 0px;
    }
  }
`;
export const Deets = styled.div`
  position: relative;
  justify-content: center;
  ${"" /* width: 100%; */}
  ${'' /* width: max-content; */}
  ${'' /* width: 100%; */}
  width: 100%;

  ${respond.pc.standard`
      width: 35vw;
    ;`}

  h3 {
    ${"" /* ${fonts.mixins.heroHeader}; */}
    ${fonts.heading.h2};
    font-size: 7vw;
    ${"" /* line-height: 1; */}
    line-height: 1;
    margin: 0;
    ${"" /* line-height: 1.6; */}

    ${respond.pc.standard`
     font-size: 2.8vw;
    ;`}
  }
`;
export const Develop = styled(Row)`
  text-align: left;
  margin: 3vw 0;
`;
export const MdPush7 = styled(ColMd4)`

`;
export const HomeDev = styled.div`

  margin: 0 auto;


  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
`;








export const Heading = styled.div`
  position: relative;
  display: block;
  width: 100%;
  overflow-wrap: normal;
  word-break: keep-all;
  ${respond.pc.min`
  .verb {
    display: inline; 
  }

  .name {
  
    display: inline;
    margin-left: 3.315vw;
    

  }
  `}

  ${fonts.mixins.heroHeader};

  font-size: clamp(2.5rem, 8.3vw, 8.3vw);
  font-size: clamp(4.7rem, 15.666666vw, 15.666666vw);
  font-size: 12.3333333vw;
  font-size: 15.2360833vw;
  font-size: 12.2360833vw;

  ${'' /* line-height: clamp(3rem, 10vw, 10vw); */}
  line-height: 1;
  letter-spacing: 0px;
  font-style: normal;
  color: ${colors.secondary.darkest};

  text-rendering: optimizeLegibility;
  padding-top: clamp(6rem, 20vw, 20vw);
  padding-top: clamp(30px, 10vw, 10vw);
  padding-left: clamp(30px, 10vw, 10vw);

 
`;




export const TEXT = styled.span`
  display: block;

  ${"" /* ${fonts.mixins.text}; */}
  width: 100%;

  color: ${colors.neutrals.darkest};
  letter-spacing: 0px;
  font-style: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  text-rendering: optimizeLegibility;

  line-height: 1.6;
  font-family: "Lato", sans-serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Open Sans Condensed", sans-serif;
  font-family: "EB Garamond", serif;
  font-family: "Cabin", sans-serif;
  font-family: "Roboto Slab", serif;
  font-family: "Roboto Condensed", sans-serif;
  font-family: "Poppins", sans-serif;

  p {
    margin: 1vw 0 1vw;
    width: min-content;
    ${"" /* margin-top: 1vw; */}
    position: relative;

    ${fonts.mixins.text};
    font-size: 4.5vw;
  }

  font-size: 2vw;

  font-weight: 200;
  ${"" /* padding-left: clamp(3px, 0.01vw, 0.01vw); */}

  ${respond.pc.standard`
    ${"" /* padding-left: clamp(3px, 0.5vw, 0.5vw); */}
    padding-left: clamp(2px, 0.2vw, 0.2vw);
    font-size: 2vw !important;
    line-height: clamp(30px, 3vw, 3vw);  
    ${'' /* line-height: 2 ; */}

    p {
      font-size: 2vw;
    }
    

  `}

  .love {
    margin-top: 3rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: min-content;

 
`;

export const Description = styled.p`
  margin: 4vw 0 4vw;
  width: 35vw;
  width: 100%;
  font-weight: 200 !important;
  position: relative;

  ${fonts.mixins.text};
 
  padding-left: 0;

  text-align: left;  
  ${'' /* text-justify: inter-character; */}

  font-size: 4vw;

  ${respond.pc.standard`
    font-size: 1.5vw !important;
    margin: 1vw 0 1vw;
    text-align:justify;  
  text-justify: inter-character;
  `}
  ${"" /* text-justify:inter-word !important; */}
}
`;

export const TitleBlock = styled.div`
  display: flex;
  flex: 80;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: clamp(114px, 38vw, 38vw);
  height: min-content;
  line-height: 1.6;

  ${respond.pc.standard`
  height: clamp(114px, 11.4vw, 11.4vw);
  `}
`;

const movePicture = keyframes`
   0% {
     transform: translate(0 0px)  scale(1.2);
     transform-origin: top ;
    }
    25% {
      transform: translate(0 -20%) scale(1.2);
      transform-origin: top ;
      ${
        "" /* background-position: 0 -7rem; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px */
      }
    }
    50% {
      transform: translate(0, -40%) scale(1.2);
      transform-origin: top ;
      ${"" /* background-position: 0 -14rem; */}
    }
    75% {
       transform: translate(0, -40%) scale(1.2);
       transform-origin: top  ;
      ${"" /* background-position: 0 -21rem; */}
    }
    90% {
       transform: translate(0, 0) scale(1.2);
       transform-origin: top ;
      ${"" /* background-position: 0 0px; */}
    }
    100% {
       transform: translate(0, 0)  scale(1.2);
       transform-origin: top ;
      ${"" /* background-position: 0 0px; */}
    }
`;

const movePicture2 = keyframes`
   0% {
     ${'' /* transform: rotate(10deg); */}
     transform: translate(0, -38%)  scale(1);
     ${'' /* transform-origin: 0% 100% ; */}
    }
    30% {
      ${'' /* transform: rotate(20deg); */}
      transform: translate(0, -12.5%) scale(1);
      ${'' /* transform-origin: 0% 100% ; */}
      ${
        "" /* background-position: 0 -7rem; //this should be cleaned up, my sprite sheet is 202px by accident, it should be 200px */
      }
    }
    60% {
      ${'' /* transform: rotate(40deg); */}
      transform: translate(0, 12.5%) scale(1);
      ${'' /* transform-origin: 0% 100% ; */}
      ${"" /* background-position: 0 -14rem; */}
    }
    90% {
       transform: translate(0, 38%) scale(1);
       ${'' /* transform-origin: 0% 100%  ; */}
       ${'' /* transform: rotate(60deg); */}
      ${"" /* background-position: 0 -21rem; */}
    }
    90% {
       transform: translate(0, 38%) scale(1);
       ${'' /* transform: rotate(80deg); */}
       ${'' /* transform-origin: 0% 100% ; */}
      ${"" /* background-position: 0 0px; */}
    }
    100% {
       transform: translate(0, -38%)  scale(1);
       ${'' /* transform: rotate(90deg); */}
       ${'' /* transform-origin: 50% 50% ; */}
      ${"" /* background-position: 0 0px; */}
    }
`;

export const Picture = styled.picture`
  animation: ${movePicture2} 10s cubic-bezier(1, 0, 0, 1) infinite; // steps(50)
  transition: transform 1000ms;
  
`;


export const Image = styled.img`
  ${
    "" /* animation: movePicture 7s cubic-bezier(1, 0, 0, 1) infinite; // steps(50) */
  }
  ${"" /* vertical-align: middle; */}
  border: 0;
  animation: ${movePicture2} 10s cubic-bezier(1, 0, 0, 1) infinite; // steps(50)
  ${'' /* transition: transform 1000ms; */}
  transform-origin: top center !important;
  width: 100%;
  ${"" /* width: 100%; */}
`;
export const Image2 = styled(Image)`
  float: right;
  max-width: 180px;
`;

