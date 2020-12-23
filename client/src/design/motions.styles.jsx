import styled, { keyframes } from "styled-components";
import colors from '../design/colors';


export const background_change = (backColor) => keyframes`
  0% {
    background-color: ${backColor};
    opacity: 0%;
  }

  50% {
    background-color: ${backColor};
    opacity: 100%;
  }

  100% {
   background-color: none;
  }
`;

export const my_move = keyframes`
  50% {border-bottom: 4px solid #D65524;}  
`;

export const neon = keyframes`
  0% {
    color: #6eeb83;
    font-size: 48px;
  }
  30% {
    color: #149911;
  }
  70% {
    color: #a3f7bf;
  }
  100% {
    color: #6eeb83;
  }
`;

export const hoverOff = keyframes`
0 {
  height: clamp(6.3rem, 21vw, 21vw);
}

50%{
  height: clamp(5.9rem, 19.66vw, 19.66vw);   
}

 100%{
  height: clamp(5.6rem, 18.333vw, 18.333vw);
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
 }
`;
export const ScaleY = keyframes`
0 {
  transform: ScaleY(1.125);

}

50%{
  transform: ScaleY(1.05357);

}

 100%{
  transform: ScaleY(1);
  border-top-right-radius: 130%;
  border-bottom-right-radius: 150%;
  border-top-left-radius: 180%;
  border-bottom-left-radius: 140%;
 }
`;
export const MiniCardHover = keyframes`
0 {
  transform: ScaleY(1.125);

}

50%{
  transform: ScaleY(1.05357);

}

 100%{
  transform: ScaleY(1);
 }
`;


export const bubbleGumScale = keyframes`
  
  0%{
    ${"" /* height: clamp(5.6rem, 18.333vw, 18.333vw); */}
    transform: ScaleY(1);
    border-top-right-radius: 130%;
    border-bottom-right-radius: 150%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;
  }
  
  
  15%{
    ${"" /* height: clamp(6.5rem, 21vw, 21vw); */}
    transform: ScaleY(1.160714);


    border-top-right-radius: 120%;
    border-top-left-radius: 135%;
    border-bottom-left-radius: 115%;
    border-bottom-right-radius: 150%;


  }
  
  30%{
    ${"" /* height: clamp(6rem, 20vw, 20vw); */}
    transform: ScaleY(1.071428);
    border-top-right-radius: 130%;
    border-top-left-radius: 195%;
    border-bottom-left-radius: 145%;
    border-bottom-right-radius: 200%;
  }

  
  45% {
    ${"" /* height: clamp(6.1rem, 21vw, 21vw); */}
    transform: ScaleY(1.0892857);
    border-top-right-radius: 135%;
    border-top-left-radius: 145%;  
    border-bottom-left-radius: 165%;
    border-bottom-right-radius: 180%;

  }

  60% {
    ${"" /* height: clamp(6.9rem, 23vw, 23vw); */}
    transform: ScaleY(1.2321428);

    border-top-right-radius: 160%;
    border-bottom-right-radius: 155%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;
  }

  75% {
    ${"" /* height: clamp(7.5rem, 25vw, 25vw); */}
    transform: ScaleY(1.3392857);

    border-top-left-radius: 180%;
    border-top-right-radius: 160%;
    border-bottom-right-radius: 155%;
    border-bottom-left-radius: 140%;
    
    
  }

  100%{
    ${"" /* height: clamp(5.6rem, 18.333vw, 18.333vw); */}
    transform: ScaleY(1);


    border-top-right-radius: 130%;
    border-bottom-right-radius: 150%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;

    
    
  }
  
`;
export const bubbleGum = keyframes`
  
  0%{
    height: clamp(5.6rem, 18.333vw, 18.333vw);
    
    border-top-right-radius: 130%;
    border-bottom-right-radius: 150%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;
  }
  
  
  15%{
    height: clamp(6.5rem, 21vw, 21vw);


    border-top-right-radius: 120%;
    border-top-left-radius: 135%;
    border-bottom-left-radius: 115%;
    border-bottom-right-radius: 150%;


  }
  
  30%{
    height: clamp(6rem, 20vw, 20vw);
    border-top-right-radius: 130%;
    border-top-left-radius: 195%;
    border-bottom-left-radius: 145%;
    border-bottom-right-radius: 200%;
  }

  
  45% {
    height: clamp(6.1rem, 21vw, 21vw);
    border-top-right-radius: 135%;
    border-top-left-radius: 145%;  
    border-bottom-left-radius: 165%;
    border-bottom-right-radius: 180%;

  }

  60% {
    height: clamp(6.9rem, 23vw, 23vw);

    border-top-right-radius: 160%;
    border-bottom-right-radius: 155%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;
  }

  75% {
    height: clamp(7.5rem, 25vw, 25vw);

    border-top-left-radius: 180%;
    border-top-right-radius: 160%;
    border-bottom-right-radius: 155%;
    border-bottom-left-radius: 140%;
    
    
  }

  100%{
    height: clamp(5.6rem, 18.333vw, 18.333vw);


    border-top-right-radius: 130%;
    border-bottom-right-radius: 150%;
    border-top-left-radius: 180%;
    border-bottom-left-radius: 140%;

    
    
  }
  
`;


