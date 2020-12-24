//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import respond from '../../design/responsive';

//Code

export const List = styled.div`
  position: relative;
  overflow: auto;
  height: 220px;
  background: lightyellow;
  font-size: 14px;
  ${"" /* padding: 2rem; */}

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${colors.secondary.lightest};
    background-color: #0ae;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }
`;

export const Card = styled.div`
  position: absolute;
  bottom: 80%;
  right: 20%;
  background: #7245c7;
  
  width: 200px;
  border-radius: 3rem;
  padding: 1rem;

  ${'' /* font-size: 12px !important; */}
`;

export const Input = styled.button`
  color: ${rgba("white", 0.85)};
  background: transparent;
`;

export const Placeholder = styled.div`
  color: ${rgba("white", 0.5)};
`;

export const Row = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Flag = styled.img`
  width: 30px;
`;

const openStyles = css`
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
`;

export const Dialog = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
  ${"" /* border-radius: 3rem; */}
  top: 90%;
  width: 100%;
  ${"" /* height: 260px; */}
  transform: translateY(1rem);
  background: #fff;
  background: transparent;
  transition-property: visibility, opacity, transform;
  transform-duration: 0.35s;
  ${(p) => p.open && openStyles};
`;

export const Avatar = styled.div`
  font-size: 14px;
  padding: 2rem;
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  ${"" /* background: ${(p) => p.background }; */}
`;

export const Name = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;
  width: 20px;
  height: min-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${rgba("white", 0.85)};
`;

export const loadingRow = css`
  position: absolute;
  z-index: 0;

  & > div {
    background: ${rgba("white", 0.125)};
    background: ${rgba(colors.accent.ochreFire, 0.9125)};
  }

  & > ${Name} {
    height: 18px;
    ${"" /* height: 38px; */}
    color: black;
  }
`;

export const RowLazy = styled.button`
  position: relative;
  height: 50px;
  display: flex;
  z-index: 1;

  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  justify-content: flex-start;
  border: none;
  border: red 10px solid;
  width: 100%;
  background: pink;
  ${"" /* height: 8px; */}
  ${"" /* background: ${colors.neutrals.darkest}; */}
  margin: 0rem;
  ${(p) => p.isLoading && loadingRow}
`;


