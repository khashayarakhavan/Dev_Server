//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import shadows from '../../../design/shadows.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';
import {ReactComponent as Icon_Framework_React} from '../../../assets/SVG/frameworkReact.svg';
import {ReactComponent as Icon_Cognitive_Science} from '../../../assets/SVG/cognitiveScience.svg';
import {ReactComponent as Icon_Cognitive_Science_Brain} from '../../../assets/SVG/cognitiveScience_brain.svg';
import {ReactComponent as Icon_Cognitive_Science_NanoBot} from '../../../assets/SVG/cognitiveScience_nanobot.svg';
import {ReactComponent as Icon_Cyber_Security} from '../../../assets/SVG/cyberSecurity2.svg';
import {ReactComponent as Icon_Cyber_Security_Cloud} from '../../../assets/SVG/cyberSecurity_cloud.svg';
import {ReactComponent as Icon_Cyber_Security_Trojan} from '../../../assets/SVG/cyberSecurity_trojan.svg';
import {ReactComponent as Icon_Cyber_Security_Shield} from '../../../assets/SVG/cyberSecurity_shield.svg';
import {ReactComponent as Icon_Cyber_Security_Verified} from '../../../assets/SVG/cyberSecurity_verified.svg';

export const Highlighter = styled.div`
  position: relative;
  width: min-content;
  ${'' /* background: red; */}
  z-index: 20;

  &::after {
    position: absolute;
    content: "";
    z-index: -1;
    left: 0;
    bottom: 0;
    bottom: 2px;
    width: 100%;
    height: 6px;
    background: ${colors.accent.ochreFire};
    background: ${colors.accent.lightest};
    transform-origin: 0% 100%;
    transition: transform 0.25s;
  }

  &:hover::after {
    transform: scaleY(2);
  }
`;

export const CardScroll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  
  -webkit-font-smoothing: antialiased;
  direction: ltr;
  
  width: 12rem;
  width: 65.33333vw;

  padding: 2rem 1rem 3rem;
  padding: 5.5555555vw 2.7777777vw 5.5555555vw;

  overflow: hidden;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: keep-all;
  white-space: normal;
  
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  
  font-family: "Poppins", sans-serif;
  font-weight: 200;

  border-radius: clamp(15px, 5vw, 20px);
  ${shadows.mixins.neumorphic.original}
  transition: all 0.4s; 

  &:hover {
    background: ${colors.neutrals.lighter};
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.highlights.lightest};
    }
  }
  &:active {
    transition: all 0.4s;
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.accent.lightest};
    box-shadow: ${shadows.neumorphic.original};
  }

  ${respond.pc.min`
    padding: 2rem 1rem 3rem;
    padding: 1.953125vw 0.9765625vw 0.9296875vw;
    width: clamp(15rem, 14.6484375vw, 14.6484375vw);
    width: 23vw;
  `}

  .technologies {
    align-self: flex-end;
    
    display: flex;
    justify-content: flex-end;

    width: min-content;
    height: 2rem;

    margin-top: 1rem;
    margin-top: 3.3333333vw;
    
    padding: 0.4rem 0;
    padding: 1.3333333vw 0;

    ${respond.pc.min`
      margin-top: 1rem;
      margin-top: 0.9765625vw;
    `}

    & > * {
      font-size: 12px;
      font-size: 4vw;
      margin: 0 0.3333333333vw;
      ${respond.pc.min`
        font-size: 20px;
        font-size: 1.953125vw;
        margin: 0 0.1333333333vw;
      `}
    }
  }
  
  .iconTest {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    margin-bottom: 1rem;

    &::before {
      position: absolute;
      display: block;
      content: "";
      height: 120%;
      width: 120%;
      border-radius: 50%;
      z-index: -1;
    }
  }
  i {
    font-size: 4rem;
    font-size: 11.1111111vw;
    line-height: 0;
    ${"" /* margin-right: 0.5rem; */}
    ${"" /* width: min-content; */}
    display: inline-block;
    display: block;
    -webkit-background-clip: text;
    color: transparent;
    color: ${colors.accent.darkest};
    background-image: linear-gradient(
      to right,
      ${colors.accent.lightest},
      ${colors.accent.darkest}
    );

    ${respond.pc.min`
    font-size: 4rem;
    font-size: 3.90625vw;
    `}
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${colors.accent.darkest};
    height: 4px;
    height: 1.1111111vw;
    border: none;
    width: 50%;
    left: 0;

    ${respond.pc.min`
     height: 4px;
     height: 0.390625vw;
    `}
  }

  h3 {
    font-size: clamp(10px, 3vw, 3vw);
    font-size: 15px;
    font-size: 6vw;
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    line-height: 1.5;
    margin-bottom: 0.4rem;
    margin-bottom: 0.390625vw;

    ${respond.pc.min`
    font-size: 15px;
    font-size: 1.46484375vw;
    `}
  }

  p {
    font-size: clamp(10px, 3vw, 30px);
    font-size: 10px;
    font-size: 4.77777777vw;
    text-align: justify;

    ${respond.pc.min`
    font-size: 10px;
    font-size: 0.9765625vw;
    `}
  }

 
`;


export const SvgIcon = styled(Icon_Framework_React)`
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
  fill: ${colors.accent.ochreFire};
  fill: ${colors.neutrals.darkest};
  fill: ${colors.accent.darkest};
  fill: ${colors.accent.lightest};
  margin-bottom: 1rem;
`;

export const Icon_cognitiveScience = styled(Icon_Cognitive_Science_NanoBot)`
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
  fill: ${colors.accent.ochreFire};
  fill: ${colors.neutrals.darkest};
  fill: ${colors.accent.darkest};
  fill: ${colors.accent.lightest};
  margin-bottom: 1rem;
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
`;

export const Icon_cyberSecurity = styled(Icon_Cyber_Security_Verified)`
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
  fill: ${colors.accent.ochreFire};
  fill: ${colors.neutrals.darkest};
  fill: ${colors.accent.darkest};
  fill: ${colors.accent.lightest};
  margin-bottom: 1rem;
  width: clamp(1.8rem, 6vw, 6vw);
  height: clamp(1.8rem, 6vw, 6vw);
`;









