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
  transition: transform ${duration.transtion};
`;

export const Card = styled.div`
  overflow: hidden;
  ${'' /* position: absolute; */}
  position: relative;
  ${'' /* top: 30rem;
  right: 30rem; */}
  width: 200px;
  height: 280px;
  background: lightblue;
  border-radius: 2vw;
`;

export const Row = styled.div`
  position: relative;
  
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.333%;
  width: 33.333%;
  ${"" /* width: 33%; */}
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
  overflow: hidden;
  box-shadow: ${shadows.neumorphic.original};
  border-radius: 6px;
  font-size: 20px;
  border: none;
  height: 5rem;
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
  content: "";
  height: 100%;
  display: flex;
  //roll content based on active index 
  transform: translateX(
    ${p => p.active === 0 
      ? 0
      : `-${p.active * 300}px`
    }
  );
  ${transition};
`;

export const Tab = styled.div`
font-size: 24px;
font-weight: 800;
padding: 2rem;
  width: 300px;
`;
