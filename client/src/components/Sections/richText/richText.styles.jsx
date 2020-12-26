import styled from 'styled-components';

export const RichTextContainer = styled.div`
  grid-column: cover-start / cover-end;
  grid-column: center-start / center-end;
  position: relative;
  width: 100%;
  ${'' /* width: 850px; */}
  ${'' /* background: red; */}
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  margin: 30px auto;



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
