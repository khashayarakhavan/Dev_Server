//Libraries
import styled , {css} from "styled-components";
//Responsive
import { respond } from "../../../design/responsive";
//Design
import colors from "../../../design/colors";
import sizes from "../../../design/sizes";
import shadows from "../../../design/shadows.styles";
import fonts from "../../../design/fonts.styles";
import margins from "../../../design/margins.styles";

export const SideBar = styled.section`
  background-color: grey;
  grid-row: 1/2;
  ${'' /* position: absolute; */}
  grid-column: full-start / full-end;
  ${'' /* flex: 0 0 18%; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${'' /* grid-column: center-start / center-end; */}
`;

export const SideNav = styled.ul`
    list-style: none;
    margin-top: 3.5rem;
    font-size: 1.4rem;      
    display: flex;
    margin: 0;
    
`;

// export const Scaling = css`
//     // Move up animation on hover - navigation menu links. from bottom to top using height 0 to 100%.
//     transform: scaleY(1);
//     width: 100%;
    
//     ${respond.mobile.max`
//         width: 100% ;
//         height: 100% ;
//     `};
// `;

export const SideNavItem = styled.li`
  position: relative;

  ${respond.mobile.max`
        flex: 1;
    `};

  &:not(:last-child) {
    margin-bottom: 0.5rem;
    ${respond.mobile.max`
            margin: 0;
        `};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;

  
    background-color: pink;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      height 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.05s;

    // Define move up animation height start point to 0.3rem.
    ${'' /* ${respond.mobile.max`
            width: 100% ;
            height: .3rem ;
        `}; */}
  }

  &:hover::before {
    // Scale animation on hover in desktop mode. From left to right using width 0 to 100%.
    transform: scaleY(1);
    width: 100%;
    height: 100%;

    // Move up animation on hover - navigation menu links. from bottom to top using height 0 to 100%.
    ${respond.mobile.max`
            width: 100% ;
            height: 100% ;
        `};
  }

  &:active::before {
    background-color: purple;
  }
`;

export const ItemLink = styled.a`

    &:link,
    &:visited {
        color: grey;
        text-decoration: none;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
        display: flex;
        align-items: center;
        z-index: $layer-1;
        position: relative;

        ${respond.mobile.max`
            justify-content: center;
            padding: 2rem;
        `};
        ${respond.mobile.small`
            flex-direction: column;
            padding: 1.5rem .25rem;
            
            & span {
                display: none;
            }
        `};
    }
`;

export const Icon = styled.svg`
    margin-right: 2rem;
    fill: currentColor;
    width: 1.5rem;
    height: 1.5rem;

    ${respond.mobile.small`
        margin-right: 0;
        width: 2.5rem;
        height: 2.5rem;
    `};
`;

export const Legal = styled.div`
    font-size: 1.2rem;
    text-align: center;
    padding: 2.5rem;
    color: grey;

    ${respond.mobile.max`
        display: none;
    `};
`;






















// padding: ${(props) => props.size};
// box-shadow:  ${({ variant }) =>
//       variant === "active" ? shadows.neumorphic.orange : shadows.neumorphic.norm};


// .side-nav {
    
    
   

   

    
//     // Active page is selected here. 
//     &__item--active::before {

//         // Scale animation on hover in desktop mode. From left to right using width 0 to 100%.
//         transform: scaleY(1);
//         width: 100%;

//         // Move up animation on hover - navigation menu links. from bottom to top using height 0 to 100%.
//         @include respond(medium-1) {
//             height: 100%;
//             width: 100%;
//         }
//     }



//     &__icon {
       
//     }

// }

