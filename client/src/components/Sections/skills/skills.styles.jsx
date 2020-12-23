//Basics
import { Link } from "react-router-dom";
//Libraries
import styled , {css , keyframes} from "styled-components";
//Mixins
import { mix_containers, mix_flex } from "../../../design/mixins.styles";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import sizes from "../../../design/sizes";
import shadows from "../../../design/shadows.styles";
import fonts from '../../../design/fonts.styles';
import margins from '../../../design/margins.styles';

//Assets



//Code


export const InheritedBody = styled.div`
  font-family: brandon-grotesque, HelveticaNeue-Light, "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #545454;
  ${'' /* background-color: red ; */}
  -webkit-font-smoothing: antialiased;
      margin: 0;
`;
export const inheritedHtml = styled.div`
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
export const Article = styled.article`
  display: block;

  ${"" /* border: 30px solid green; */}
  header {
    ${"" /* background: blue; */}
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
      ${'' /* @media (max-width: 600px) {
        font-size: 4.75rem;
      }
      @media (max-width: 550px) {
        font-size: 4.5rem;
      }
      @media (max-width: 500px) {
        font-size: 4.25rem;
      }
      @media (max-width: 400px) {
        font-size: 3.75rem;
      }
      @media (max-width: 350px) {
        font-size: 3.25rem;
      }
      @media (max-width: 300px) {
        font-size: 2.75rem;
      }
      @media (max-width: 250px) {
        font-size: 2.25rem;
      }
      @media (max-width: 200px) {
        font-size: 1.75rem;
      } */}
      ${"" /* color: red; */}
      text-align: center;
      ${"" /* font-size: 3.8rem;
      font-weight: 400; */}
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
  ${'' /* background: red; */}
  padding: 0;
  ${'' /* @media (min-width: 992px) {
    padding: 3rem 0;
  } */}
`;
export const SkillsContainer = styled.div`
  //Container
  grid-column: center-start / center-end;
  ${'' /* grid-row: 4/span 1; */}
  ${'' /* grid-row: 4 / span 1; */}
  ${"" /* grid-row-start: 2; */}
  ${"" /* margin-top: 50vh; */}
  transition: all 0.5s ease-in-out;
  margin-right: auto;
  margin-left: auto;
  ${'' /* padding-left: 15px; */}
  ${'' /* padding-right: 15px; */}
  position: relative;
  ${"" /* background-color: red; */}

  @media (max-width: 1100px) {
    grid-column: center-start / center-end;
    ${"" /* padding: 3rem; */}
  }

  ${"" /* &::before,
  &::after {
    content: " ";
    display: table;
    box-sizing: border-box;
  }
  
  &::after {
    clear: both;
  } */}

  &::selection {
    background: #e0ebe8;
    color: #545454;
    text-shadow: none;
  }
`;

export const Row = styled.div`
  ${'' /* margin-left: -15px;
  margin-right: -15px; */}
  
  
${'' /* 
  &::before,
  &::after {
    content: " ";
    display: table;
    box-sizing: border-box;
  }

  &::after {
    clear: both;
  } */}

  @media (min-width: 992px) #what-i-do, #design {
    text-align: left;
    margin: 3rem 0 6rem;
  }
`;
export const ColMd12 = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  

`;
export const ColMd4 = styled.div`
  ${"" /* margin: 10rem auto; */}
  position: relative;
  display: flex;
  ${"" /* flex-direction: column; */}
  ${"" /* align-content: center; */}
  align-items: center;

  min-height: 1px;
  padding-left: 5rem;
  padding-right: 5rem;

  ${"" /* @media (min-width: 992px) {
    width: 33.33333333%;
    margin-left: 8.33333333%;
  } */}
`;
export const ColMd6 = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-flow: no-wrap;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  ${"" /* @media (min-width: 992px) {
    float: left;
    width: 50%;
  } */}
`;
export const ColMd7 = styled.div`
  display: flex;
  flex-flow: no-wrap;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  ${'' /* @media (min-width: 992px) {
    float: left;
    width: 50%;
  } */}
`;
export const ColMd6_Pull3 = styled(ColMd6)`
  ${'' /* right: 25%; */}
`;


export const DesignRow = styled(Row)`
  ${"" /* &:last-child {
    margin-bottom: 3rem;
    background-color: red;
    font-size: 20rem;
  } */}
  ${"" /* ${ColMd6} {
    margin-bottom: 3rem;
  }
  &:hover:not(:first-child) {
    background-color: yellow;
  } */}
  ${"" /* div:last-of-type {
    font-size: 0.75em;
    background-color: green;
  } */}
  
  & ${ColMd6}:not(:last-child) {
    margin-bottom: 5rem;
  }
  ${'' /* & ${ColMd6}:last-of-type {
    background: yellow;
  }
  & ${ColMd6}:nth-last-child(2) {
    background: pink;
  } */}
  ${"" /* div:nth-last-child(1) {
    background-color: green;
  } */}
  text-align: left;
  margin: 3rem 0 6rem;
`;

export const HomeDesign = styled.div`
  margin: 0 auto;
  ${"" /* background-image: url(../../../assets/icon/line-bg.png); */}
  ${'' /* background-image: url("https://res.cloudinary.com/khashi-dev/image/upload/v1603465770/line-bg_scoevc.png"); */}
  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
`;

export const Image = styled.img`
  vertical-align: middle;
  border: 0;
  width: 100%;
`;
export const Image2 = styled(Image)`
  
  float: right;
  max-width: 180px;
`;
export const BubbleRight = styled.div`
  ${shadows.mixins.neumorphic.button};
  ${"" /* background: #f3f2f1; */}
  width: 10rem;
  height: 10rem;
 
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /*   
  @media (max-width: 500px) {
     width: 5rem;
     height: 5rem;
  }; */}
  ${"" /* align-self: center;
  justify-self: center; */}

  ${"" /* -webkit-border-radius: 60px;
  -moz-border-radius: 60px; */}
  ${"" /* position: absolute;
  overflow: hidden; */}
  ${"" /* top: 2.6em;
  right: 0; */}
`;
export const BubbleLeft = styled.div`
  ${shadows.mixins.neumorphic.original};
  ${"" /* background: #f3f2f1; */}
  width: 10rem;
  height: 10rem;
  -webkit-border-radius: 6rem;
  -moz-border-radius: 6rem;
  border-radius: 6rem;
  position: absolute;
  overflow: hidden;
  top: 2.6rem;
  left: 0;
  ${'' /* @media (max-width: 500px) {
    width: 5rem;
    height: 5rem;
  } ; */}
`;
export const BubbleButton = styled.div`
  ${shadows.mixins.neumorphic.invert};
  ${"" /* background: rgba(#f3a2f1, 0.2); */}

  display: grid;
  align-items: center;
  justify-content: center;
  min-width: 11.5rem;
  
  height: 25rem;
  border-radius: 60rem;
  ${"" /* position: absolute; */}
  overflow: hidden;
  ${'' /* position: absolute; */}
  ${'' /* margin-left: 10rem; */}
  ${"" /* top: 0em;
  left:10rem; */}
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
  border-radius: 6rem;
  width: 7.7rem;
  height: 7.7rem;
  ${'' /* background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603146036/react-style-firebase_qyez2a.png); */}
  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603146749/4-skills_fz1ley.png);
  ${"" /* background-repeat: no-repeat; */}
 ${"" /* background-size: 1.5; */}
  ${"" /* background-position: center; */}
  ${"" /* background-size: contain; */}
  ${"" /* background-position: center; */}

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
  border-radius: 6rem;
  background-size: 100%;
  animation: fourSkills 7s cubic-bezier(1, 0, 0, 1) infinite; // steps(50)
  background-image: url(https://res.cloudinary.com/khashi-dev/image/upload/v1603150550/GCP-AWS-Heroku-DO2_eogbkt.png);
  ${"" /* display: grid;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center; */}
  
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  width: 7.7rem;
  height: 7.7rem;
  ${"" /* background-size: cover; */}
  ${"" /* @media (max-width: 500px) {
    width: 4.7rem;
    height: 4.7rem;
  } */}

  ${"" /* background-attachment: fixed; */}
  ${"" /* background-size: cover;
  background-position: center; */}
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
  padding: 0 0 0 2rem;

  h3 {
    ${fonts.mixins.heroHeader};
    padding: 0 0 1rem;
    margin: 0;
    font-size: 2.8vmax;
    ${'' /* @media (max-width: 500px) {
      font-size: 2.75rem;
    }
    @media (max-width: 400px) {
      font-size: 2.25rem;
    }
    @media (max-width: 350px) {
      font-size: 2rem;
    }
    @media (max-width: 300px) {
      font-size: 1.75rem;
    }
    @media (max-width: 250px) {
      font-size: 1.25rem;
    }
    @media (max-width: 200px) {
      font-size: 1rem;
    } */}
    ${"" /* color: #45b29a; */}
  }

  p {
    margin: 0 0 10px;
    ${"" /* font-family: adobe-garamond-pro, HelveticaNeue-Light, "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; */}
    ${fonts.mixins.text};
    ${"" /* font-weight: 300; */}
    font-size: 2.5vmax;
    ${'' /* @media (max-width: 500px) {
      font-size: 1.75rem;
    }
    @media (max-width: 400px) {
      font-size: 1.25rem;
    }
    @media (max-width: 350px) {
      font-size: 1rem;
    } */}
    ${'' /* @media (max-width: 300px) {
      font-size: 0.75rem;
    }
    @media (max-width: 250px) {
      font-size: 0.25rem;
    }
    @media (max-width: 200px) {
      font-size: 1rem;
    } */}
  }
`;
export const Develop = styled(Row)`
  text-align: left;
  margin: 3rem 0;
`;
export const MdPush7 = styled(ColMd4)`
  ${'' /* @media (min-width: 992px) {
    left: 58.33333333%;
  } */}
`;
export const HomeDev = styled.div`
  ${"" /* margin: 0 auto;
  background-image: url(../../../assets/icon/line-bg.png);
  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
  min-height: 155px;
  float: right;
  width: 100%;
  max-width: 180px; */}
  margin: 0 auto;
  ${"" /* background-image: url(../../../assets/icon/line-bg.png); */}
  ${'' /* background-image: url("https://res.cloudinary.com/khashi-dev/image/upload/v1603465770/line-bg_scoevc.png"); */}

  background-position: center center;
  background-repeat: repeat-x;
  position: relative;
`;









