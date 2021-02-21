import styled from "styled-components";

export const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
    background: white;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: background 2300ms ease-in;
    background: white;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
