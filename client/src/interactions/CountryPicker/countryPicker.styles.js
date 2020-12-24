//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';
import respond from '../../design/responsive';

//Code
export const Card = styled.div`
  position: absolute;
  bottom: 80%;
  right: 10%;
  background: #7245c7;
  width: 50%;
  width: 200px;
  border-radius: 3rem;
  padding: 1rem;
  ${'' /* height: 100%; */}
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

export const RowLazy = styled.button`
  padding: 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 350px;
  ${"" /* height: 8px; */}
  background: ${colors.neutrals.darkest};
  ${(p) => p.isLoading && loadingRow}
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
  ${'' /* border-radius: 3rem; */}
  top: 100%;
  height: 260px;
  transform: translateY(1rem);
  background: #fff;
  transition-property: visibility, opacity, transform;
  transform-duration: 0.35s;
  ${(p) => p.open && openStyles};
`;


export const Name = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;
  width: 90px;
  height: min-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${rgba("white", 0.85)};
`;

export const loadingRow = css`
  position: absolute;
  ${"" /* z-index: 0; */}
  ${"" /* background: green; */}
  ${'' /* background: ${rgba(colors.accent.ochreFire, 0.9125)}; */}

  & > div {
    background: ${rgba("white", 0.125)};
    background: ${rgba(colors.accent.ochreFire, 0.9125)};
    ${"" /* background:pink !important; */}
  }

  & > ${Name} {
    height: 18px;
    ${"" /* height: 38px; */}
    color: black;
  }
`;



export const Avatar = styled.div`
  font-size: 14px;
  padding: 2rem;
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  ${"" /* background: ${(p) => p.background }; */}
`;




