import styled from 'styled-components';

export const EmailMeContainer = styled.div`
  width: 850px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  grid-column: full-start / full-end;

  position: relative;

  margin-top: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
