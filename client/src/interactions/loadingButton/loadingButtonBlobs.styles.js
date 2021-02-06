//Libraries
import styled, {createGlobalStyle, css, keyframes} from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';



const openSans = `'Open Sans', Helvetica, Arial, sans-serif`;



const VAR = {
cyan: `#0505A9`,
dark: `#FFFFFF`,
borderW:`2px`,
};

export const BlobBtn = styled.button` 
  $numOfBlobs: 2;
  z-index: 1;
  position: relative;
  padding: 20px 46px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: $cyan;
  // color: red;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius:30px;
  
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: $borderW solid $cyan;
    border-radius:30px;
  }
  
  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    left: $borderW*1.5;
    top: $borderW*1.5;
    width: 100%;
    height: 100%;

    transition: all 0.3s 0.2s;
    border-radius:30px;
  }
  
  &:hover {
    color: $dark;
    border-radius:30px;
    
    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius:30px;
    }
  }
  `;
  
export const BlobBtnInner = styled.button`
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius:30px;
    background:#ffffff;
    // background: pink;
  `;
  
  // additional container created, because in FF blobs are breaking overflow:hidden of element with svg gooey filter
export const BlobBtnBlobs = styled.button`
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
  `;

export const BlobBtnBlob = styled.button`
    position: absolute;
    top: $borderW;
    width: 100% / $numOfBlobs;
    height: 100%;
    background: $cyan;
    border-radius: 100%;
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;
    
    @supports(filter: url('#goo')) {
      transform: translate3d(0,150%,0) scale(1.4);
    }
    
    ${'' /* @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    } */}

    &:nth-child(1) {
        left: (1 - 1) * (120% / 2);
        transition-delay: (1 - 1) * 0.08s;
      }

    &:nth-child(2) {
        left: (2 - 1) * (120% / 2);
        transition-delay: (2 - 1) * 0.08s;
      }
    
    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);
      
      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  `;










