import styled from "styled-components";


export const SVG = styled.svg`
  width: ${(props) => props.width || "25px"};
  height: ${(props) => props.height || "25px"};
  fill: ${(props) => props.fill || "none"};
  stroke: ${(props) => props.stroke || "#fff"};
  stroke-linecap: ${(props) => props.linecap || "round"};
  stroke-linejoin: ${(props) => props.linejoin || "round"};
  stroke-width: ${(props) => props.strokeWidth || "default"};
`;

