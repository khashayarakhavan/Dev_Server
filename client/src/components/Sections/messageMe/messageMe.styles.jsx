import styled from 'styled-components';
import colors from '../../../design/colors';
import shadows from '../../../design/shadows.styles';


export const MessageMeContainer = styled.div`
  grid-column: full-start / full-end;
  position: relative;
  
  box-shadow: ${shadows.neumorphic.orangeOld};
  box-shadow: ${shadows.neumorphic.button};
  box-shadow: ${shadows.neumorphic.extra};
  box-shadow: ${shadows.neumorphic.original};
  margin: 30px auto;
  margin-top: 5rem;
  margin-bottom: 5rem;

  border-radius: 3vw;
  overflow: hidden;

  position: relative;
  width: 850px;
  width: min-content;
  width: 60vw;

  background: transparent ;
  background: ${colors.neutrals.lighter};
  ${"" /* background: rgba(white, 0.9); */}
  ${"" /* opacity: 0.8; */}
  font-size: 14px;

  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 60% 40%; 
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
export const RightSide = styled.div`
  grid-column: 2/-1;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ${'' /* background: lightblue; */}
`;

export const LeftSide = styled.div`
  grid-column: 1/2;
  grid-row: 1/-1;
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