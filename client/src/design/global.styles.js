
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createGlobalStyle , injectGlobal} from 'styled-components';
import {respond} from './responsive';
import { selectDarkMode } from "../redux/themes/themes.selectors";

import fonts from './fonts.styles';
import colors from './colors';

const GlobalStyle = createGlobalStyle`

.tippy-tooltip.tomato-theme {
  background-color: tomato;
  color: yellow;
}

 @font-face {
    font-family: "Transat-Bold";
    src: url("Fonts/Transat/Bold/transat_bold-webfont.woff") format('woff'),
	url("Fonts/Transat/Bold/transat_bold-webfont.woff2") format('woff2');
  }
 @font-face {
    font-family: "Helvetica-Bold";
    src: url("Fonts/Helvetica/Helvetica-Bold.ttf") format('ttf');
  }
 @font-face {
    font-family: "Helvetica";
    src: url("Fonts/Helvetica/Helvetica.ttf") format('ttf');
  }

   @font-face {
    font-family: "Transat-Light";
     src: url("Fonts/Transat/Light/transat_light-webfont.woff") format('woff'),
	url("Fonts/Transat/Light/transat_light-webfont.woff2") format('woff2');
  }

${
  "" /* @font-face {
  font-family: "linea-basic-10";
  src:url("fonts/linea-basic-10.eot");
  src:url("fonts/linea-basic-10.eot?#iefix") format("embedded-opentype"),
    url("fonts/linea-basic-10.woff") format("woff"),
    url("fonts/linea-basic-10.ttf") format("truetype"),
    url("fonts/linea-basic-10.svg#linea-basic-10") format("svg");
  font-weight: normal;
  font-style: normal;

} */
}

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

a,
a:link,
a:hover {
	text-decoration: none;
}

html {
    box-sizing: border-box;
    // This defines what 1rem is
    // 1rem = 10px; 10px/16px = 62.5%
    font-size: 62.5%; /* 10px */    
}

body {
    ${fonts.text};
    color: ${colors.primary};
    line-height: 1.6;
    background: linear-gradient(45deg,
      rgb(242, 243, 247) ,
      rgba(229, 229, 229, 0.1) );  

     
}
::selection {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;


const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkMode,
});

export default connect(mapStateToProps)(GlobalStyle);
