//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';

const duration ={
  transtion:'0.45s',
 };


export const transition = css`
  transition: transform ${duration.transtion};
`;

export const Card = styled.div`
  overflow: hidden;
  position: absolute;
  top: 30rem;
  right: 30rem;
  width: 300px;
  height: 240px;
  background: lightblue;
  border-radius: 2vw;
`;

export const Row = styled.div`
  position: relative;
  margin-top: 5rem;
  display: flex;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.333%;
  ${"" /* width: 33%; */}
  height: 6px;
  background: #6b44a9;
  background: ${colors.neutrals.lightest};
  //roll underline based on active index
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 100)}%);
  ${transition};
`;

export const Button = styled.button`
  flex: 1 1 33.3333%;
  font-size: 20px;
  height: 5rem;
  border-bottom: 1px solid ${rgba("white", 0.25)};
  background-color: ${(p) =>
    p.active ? colors.accent.lightest : colors.neutrals.darkest};

  color: ${(p) => rgba("white", p.active ? 0.85 : 0.25)};
  color: ${(p) =>
    p.active ? colors.white : colors.neutrals.lighter};
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
