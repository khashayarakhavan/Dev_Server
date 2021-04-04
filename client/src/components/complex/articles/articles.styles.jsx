import styled, { css, keyframes } from "styled-components";
import {VegeloperContainer} from 'design/containers.styles';
import shadows from 'design/shadows.styles';
import { rgba } from "polished";

export const ArticlesContainer = styled(VegeloperContainer)`
  grid-column: cover-start/cover-end;
  ${"" /* background: tomato; */}
  ${'' /* margin: 0 0 5rem; */}
  ${'' /* padding: 5rem 5rem; */}
  background: transparent;
`;

export const Wrapper = styled.div`
padding: 0;
grid-column: center-start/center-end;
`;


const skeletonColor = "#EB5E28";

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
  background: ${rgba("#fde10f", 0.95)};
  animation: ${glimmer} 1.25s infinite linear;
`;

export const Skeleton = styled.div`
  position: relative;
  box-sizing: content-box;
  
  overflow: hidden;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "40px"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  border-radius: ${borderRadius};
  background: transparent;
  background: ${skeletonColor};
  ${"" /* background: red; */}

  &::before {
    ${skeletonShimmer};
  }
`;

export const Row = styled.div`
  ${"" /*  */}
  align-items: center;
  ${"" /* margin-top: 4rem; */}
  margin-bottom: 10rem;
  margin-left: 3rem;
  padding-top: 3rem;
  ${"" /* padding-left: 10rem; */}
  display: flex;

  ${'' /* margin-bottom: 4rem; */}
  box-shadow: ${shadows.neumorphic.extra};
  border-radius: 3vw;
  padding: 6rem 3rem;
  background: #f9f9fa;
  ${'' /* background: transparent; */}
`;

