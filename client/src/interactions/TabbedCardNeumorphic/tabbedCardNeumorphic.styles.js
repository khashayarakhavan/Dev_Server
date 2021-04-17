//Libraries
import styled, {css} from "styled-components";

import { rgba } from "polished";
//Design
import colors from 'design/colors';
import {respond} from 'design/responsive';
import shadows from 'design/shadows.styles';

const duration ={
  transtion:'0.45s',
 };


export const transition = css`
  transition: transform ${duration.transtion}, background .3s;
`;

export const Card = styled.div`
  overflow: hidden;
  position: relative;
  ${"" /* width: 200px; */}

  width: 100%;

  height: 45vw;

  ${respond.pc.standard`
  height: 20vw;
  `}
  background: transparent;
`;

export const Row = styled.div`
  position: relative;
  position: absolute;
  bottom: 0;
  width: 74%;
  height: 15%;
  margin-bottom: 1vw;
  margin-top: 1vw;
  ${"" /* margin-top: 5rem; */}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: ${shadows.neumorphic.original};
  border-top-right-radius: 0.8vw;
  border-top-left-radius: 0.8vw;
  background: transparent;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.333%;

  height: 1.2vw;
  ${respond.pc.standard`
  height: 0.6vw;
  `}
  background: #6b44a9;
  background: ${colors.neutrals.lightest};
  background: ${colors.accent.ochreFire};
  background: ${colors.accent.lightest};
  background: ${colors.accent.darkest};
  //roll underline based on active index
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition};
`;

export const Button = styled.button`
  flex: 1 1 33.3333%;
  width: 100%;
  height: 3vw;
  height: 100%;
  align-items: start;
  overflow: hidden;
  

  &:first-of-type {
    border-top-left-radius: 0.8vw;
  }
  &:last-of-type {
    border-top-right-radius: 0.8vw;
  }

  ${"" /* border-radius: 50%; */}
  ${"" /* border-radius: 6px; */}
  
  font-size: 3.8vw;
  font-size: 2.3vw;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  ${respond.pc.standard`
    font-size: 1vw;
  `}

  border: none;
  border-bottom: 0.1vw solid ${rgba("white", 0.25)};
  background-color: ${(p) =>
    p.active ? colors.neutrals.lightest : "transparent"};
  color: ${(p) => rgba("white", p.active ? 0.85 : 0.25)};
  color: ${(p) =>
    p.active ? colors.accent.lightest : colors.neutrals.darkest};

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  height: 100%;
  height: 12vw;
  height: 85%;

  padding-top: 2vw;

  font-size: 3.8vw;
  font-weight: 200;

  ${respond.pc.standard`
  font-size: 1.4vw;  
  padding-top: 1vw;
  `}

  ${"" /* background: red !important; */}
  display: flex;
  //roll content based on active index
  transform: translateX(
    ${"" /* ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)} */}
      ${(p) => (p.active === 0 ? 0 : `-${p.active * 50}vw`)}
  );

  ${respond.pc.standard`
 
   transform: translateX(
    ${"" /* ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)} */}
      ${(p) => (p.active === 0 ? 0 : `-${p.active * 30}vw`)}
  );
 
  `}

  ${transition};

  &:hover {
    ${"" /* background: ${colors.neutrals.lightest}; */}
  }
`;

export const Tab = styled.div`
  width: 300%;
  width: 300px;
  width: 50vw;

  ${respond.pc.standard`
  width: 30vw;
  padding-right: 8vw;
  `}

  padding-right: 0vw;
  padding-top: 1vw;
  align-items: center;
`;
export const Image = styled.img`
  margin-right: 3vw;
  height: 7vw;

  ${respond.pc.standard`
    height: 3vw;
    margin-right: 1vw;
  `}
`;
