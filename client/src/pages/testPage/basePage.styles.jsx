//Libraries
import styled, { css } from "styled-components";
import { rgba } from "polished";
// import { FrameWrapper, Frame } from "../../testUI/shared";

//Design
import colors from '../../design/colors';

//Code
export const Phone = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  ${"" /* height: 480px; */}
  ${"" /* border-radius: 40px; */}
  background: #5a32a0;
`;

export const openStyles = css`
  transform: translateX(100px) scale(0.95);
`;

export const Content = styled.div`
  ${"" /* height: 800px; */}
  postion: relative;
  width: 100%;
  height: 100%;
  ${"" /* padding: 2rem 1.5rem; */}
  ${"" /* border-radius: 40px; */}
  background: #210f40;
  background: ${colors.accent.ochreFire};
  transform: translateX(0) scale(1);
  transition: 0.45s ${(p) => p.open && openStyles};
`;

export const Burger = styled.button`
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 1000;
  background: transparent;
  border: 0;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  :focus {
    outline: none;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  background: transparent;
  color: ${rgba("white", 0.5)};
  color: white;
  border: none;

  :focus {
    outline: none;
  }
`;

export const NavIcon = styled.span`
  font-size: 3.25rem;
`;

export const NavText = styled.span`
  font-size: 1.875rem;
  color: white;
  font-weight: 600;
`;

//Exports


