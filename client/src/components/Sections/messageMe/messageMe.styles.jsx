import styled from 'styled-components';
import colors from '../../../design/colors';
import shadows from '../../../design/shadows.styles';


export const MessageMeContainer = styled.div`
  grid-column: full-start / full-end;
  position: relative;

  margin: 30px auto;
  margin-top: 5rem;
  margin-bottom: 5rem;

  border-radius: 3vw;
  overflow: hidden;

  position: relative;
  width: 850px;
  width: min-content;

  background: ${colors.neutrals.lighter};
  font-size: 14px;

  display: grid;
  grid-template-rows: min-content 10vh;
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