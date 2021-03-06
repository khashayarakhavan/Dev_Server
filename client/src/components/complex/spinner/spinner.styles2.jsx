import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: blue;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
         display: inline-block;
         width: 50px;
         background: red;
         border-color: yellow;
         height: 50px;
         border: 3px solid rgba(195, 195, 195, 0.6);
         border: 2px solid yellow;
         border-radius: 100%;
         border-top-color: yellow;
         animation: spin 1s ease-in-out infinite;
         -webkit-animation: spin 0.9s ease-in-out infinite;

         @keyframes spin {
           to {
             -webkit-transform: rotate(360deg);
           }
         }
         @-webkit-keyframes spin {
           to {
             -webkit-transform: rotate(360deg);
           }
         }
       `;
