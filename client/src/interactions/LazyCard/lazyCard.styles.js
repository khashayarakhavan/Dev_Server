//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';

const colorBackground = '#270f4b'
//Code
export const Card = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  width: 300px;
  padding: 2rem 1.5rem;
  ${"" /* */}
  border-radius: 3rem;
  background: ${colorBackground};
  background: ${colors.neutrals.darkest};

 
`;

export const List = styled.div`
  position: relative;
  overflow: auto;
  height: 220px;
  font-size: 14px;
  padding: 2rem;

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
  ${'' /* background: ${(p) => p.background }; */}
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
  z-index: 0;
  ${'' /* background: green; */}

  & > div {
    background: ${rgba("white", 0.125)} ;
    background: ${rgba(colors.accent.ochreFire, 0.9125)} ;
    ${'' /* background:pink !important; */}
  }  

  & > ${Name} {
    height: 18px;
    ${'' /* height: 38px; */}
    color: black;
  }
`;

export const Row = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  ${'' /* height: 8px; */}
  background: ${colorBackground};
  background: ${colors.neutrals.darkest};
  ${'' /* background: red; */}


  ${(p) => p.isLoading && loadingRow}
`;