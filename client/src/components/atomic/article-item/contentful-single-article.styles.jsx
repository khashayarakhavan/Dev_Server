import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import fonts from 'design/fonts.styles';
import shadows from 'design/shadows.styles';

import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";


export const ScrollUp= styled(ScrollLink)`
width: min-width;
`;

export const Article = styled.article`
  margin-bottom: 4rem;
  box-shadow: ${shadows.neumorphic.extra};
  border-radius: 3vw;
  padding: 3rem;
  background: #f9f9fa;
  background: transparent; 
  display: flex;
  flex-direction: column; 
  ${"" /* background: red; */}
`;
export const TextBody = styled.div`
  ${fonts.heading.h2_text};
  color: #143351;
`;
export const PostTitle = styled.div`
  ${fonts.heading.h2};
  ${'' /* width: 50%; */}
  ${'' /* min-width: 50%; */}
  width: 70%;
  ${'' /* width: max-content; */}
  ${'' /* display: block; */}
  ${'' /* background: red; */}
  color: #102539;
  cursor: pointer;
`;
export const PostSubTitle = styled.div`
  ${fonts.heading.h2_sub};
  color: #eb5e28;
`;
export const AuthorFullName = styled.div`
  ${fonts.heading.h3_text};
  color: #EB5E28;
  margin-left: 1rem;
`;
export const AuthorData = styled.div`
  display: flex;
  color: #EB5E28;
  margin-top: 2rem;
  align-items: center;
`;
export const Time = styled.time`
  ${fonts.heading.h3_text};
  color: #d1d9e6;
  margin-left: 2rem;
`;

export const Image = styled.img`
  ${'' /* width: 200px; */}
  height: 15vmax;
  border-radius: 50%;
  box-shadow: ${shadows.neumorphic.extra};
  margin-top: 2rem;
  cursor: pointer;

  border-top-right-radius: 9vw 16vw;
  border-bottom-right-radius: 16vw 9vw;
  border-bottom-right-radius: 2vw 16vw;
  border-top-left-radius: 16vw -2vw;
  border-top-left-radius: 20% 80%;
  border-top-left-radius: 16vw 1.2vw;
  border-top-left-radius: 1.6vw 1.2vw;
  border-bottom-left-radius: 16vw 9vw;
`;


const skeletonColor = "#e0daeb";
const borderRadius = "3px";

const glimmer = keyframes`
  0% { transform: rotate(10deg) translate(-200%, -50%); }
  100% { transform: rotate(10deg) translate(200%, -50%); }
`;

const skeletonShimmer = css`
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
  overflow: hidden;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "40px"};
  margin: ${(props) => props.margin || 0};
  border-radius: ${borderRadius};
  background: ${skeletonColor};
  background: red;

  &::before {
    ${skeletonShimmer};
  }
`;


export const Row = styled.div`
  
  ${'' /* display: flex; */}
  align-items: center;
`;

