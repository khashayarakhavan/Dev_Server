//Libraries
import styled, {css} from "styled-components";

import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';

const duration ={
  transtion:'0.45s',
 };


export const transition = css`
  transition: transform ${duration.transtion}, background .3s;
`;

export const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 200px;
  width: 100%;
  height: 17rem;
  background: transparent;
`;

export const Row = styled.div`
  position: relative;
  position: absolute;
  bottom: 0;
  width: 70%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  ${"" /* margin-top: 5rem; */}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: ${shadows.neumorphic.original};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: transparent;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.333%;
  height: 6px;
  background: #6b44a9;
  background: ${colors.neutrals.lightest};
  background: ${colors.accent.lightest};
  //roll underline based on active index
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition};
`;

export const Button = styled.button`
  flex: 1 1 33.3333%;
  width: 100%;
  height: 3rem;
  align-items: start;
  overflow: hidden;

  &:first-of-type {
    border-top-left-radius: 8px;
  }
  &:last-of-type {
    border-top-right-radius: 8px;
  }

  ${"" /* border-radius: 50%; */}
  ${"" /* border-radius: 6px; */}
  
  font-size: 10px;
  border: none;
  border-bottom: 1px solid ${rgba("white", 0.25)};
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
  height: 12rem;
  font-size: 14px;
  font-weight: 800;
  

  ${"" /* background: red !important; */}
  display: flex;
  //roll content based on active index
  transform: translateX(
    ${(p) => (p.active === 0 ? 0 : `-${p.active * 300}px`)}
  );
  ${transition};

  &:hover {
    ${"" /* background: ${colors.neutrals.lightest}; */}
  }
`;

export const Tab = styled.div`
  width: 300%;
  width: 300px;
  padding-right: 8rem;
  padding-top: 1rem;
  align-items: center;
  
  
`;
