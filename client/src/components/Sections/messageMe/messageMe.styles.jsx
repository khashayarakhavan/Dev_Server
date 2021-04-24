import styled from 'styled-components';
import colors from '../../../design/colors';
import shadows from '../../../design/shadows.styles';
import {respond} from 'design/responsive';


export const MessageMeContainer = styled.div`
  grid-column: center-start / center-end;
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  box-shadow: ${shadows.neumorphic.orangeOld};
  box-shadow: ${shadows.neumorphic.button};
  box-shadow: ${shadows.neumorphic.extra};
  box-shadow: ${shadows.neumorphic.original};

  border-radius: 3vw;
  overflow: hidden;

  position: relative;
  background: transparent;
  background: ${colors.neutrals.lighter};

  font-size: 3.3vw;

  ${respond.pc.standard`
    width: 55vw;
    margin: 30px auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 1.4vw;

    display: grid;
    grid-template-rows: min-content;
    grid-template-columns: 60% 40%;
    justify-content: space-between;
  `}

  @media screen and (max-width: 800px) {
  }
`;
export const RightSide = styled.div`
  grid-column: 2/-1;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  
  ${respond.pc.standard`
    margin-right: 2vw;
  `}
`;

export const LeftSide = styled.div`
  grid-column: 1/2;
  grid-row: 1/-1;
  width: 100%;
`;

export const SendButton = styled.button`
  grid-column: 1 / -1;
  align-self: center;
  justify-self: left;
  margin-left: 50px;
  grid-row: 2;
  width: 20vw;
  height: 5vh;
  background: linear-gradient(
    to right,
    ${colors.accent.darkest},
    ${colors.accent.ochreFire}
  );
  border-radius: 6px;
  box-shadow: ${shadows.neumorphic.button};
`;