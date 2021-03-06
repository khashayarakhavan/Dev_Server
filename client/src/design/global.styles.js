
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { createGlobalStyle , injectGlobal} from 'styled-components';
import {respond} from './responsive';
import { selectDarkMode } from "../redux/themes/themes.selectors";

import fonts from './fonts.styles';
import colors from './colors';

const GlobalStyle = createGlobalStyle`

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

@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma"), local("Oxygen-Sans"), local("Cantarell");
}


@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 300;
	src: local(".SFNS-Light"), local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Segoe UI Light"), local("Ubuntu Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 300;
	src: local(".SFNS-LightItalic"), local(".SFNSText-LightItalic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Light Italic"), local("Ubuntu Light Italic"), local("Roboto-LightItalic"), local("DroidSans"), local("Tahoma"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 400;
	src: local(".SFNS-Regular"), local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("DroidSans"), local("Tahoma"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 400;
	src: local(".SFNS-Italic"), local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"), local("Roboto-Italic"), local("DroidSans"), local("Tahoma"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 500;
	src: local(".SFNS-Medium"), local(".SFNSText-Medium"), local(".HelveticaNeueDeskInterface-MediumP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold"), local("Ubuntu Medium"), local("Roboto-Medium"), local("DroidSans-Bold"), local("Tahoma Bold"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 500;
	src: local(".SFNS-MediumItalic"), local(".SFNSText-MediumItalic"), local(".HelveticaNeueDeskInterface-MediumItalicP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold Italic"), local("Ubuntu Medium Italic"), local("Roboto-MediumItalic"), local("DroidSans-Bold"), local("Tahoma Bold"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 700;
	src: local(".SFNS-Bold"), local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold"), local("Oxygen-Sans"), local("Cantarell");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 700;
	src: local(".SFNS-BoldItalic"), local(".SFNSText-BoldItalic"), local(".HelveticaNeueDeskInterface-BoldItalic"), local(".LucidaGrandeUI"), local("Segoe UI Bold Italic"), local("Ubuntu Bold Italic"), local("Roboto-BoldItalic"), local("DroidSans-Bold"), local("Tahoma Bold"), local("Oxygen-Sans"), local("Cantarell");
}

 //styling the theme of tippyJS
.nanai-theme {
    ${"" /* background-color: tomato !important; */}
    ${"" /* background: linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%); */}
    background-color: #102539 !important;
    color: #F9F9FA !important;
    font-family: Raleway, sans-serif;
    font-size: 12px !important;   

    & > .tippy-arrow { //styling the border of tippyJS
    border-top-color: tomato !important;
    background: transparent;
    color: #102539;
    }

    
}

${"" /* .tippy-tooltip {
    font-size: 0.9rem;
    } */}

/* Now, let's apply it on an element */
${"" /* body {
  font-family: "system";
} */}


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
    font-family: "system-ui";
    color: ${colors.primary};
    line-height: 1.6;
    ${'' /* background: linear-gradient(45deg,
      rgb(242, 243, 247) ,
      rgba(229, 229, 229, 0.1) );    */}
      background: transparent;
    *:focus {
      outline: none;
    }


    
.tippy-tooltip.tomato-theme {
  background-color: tomato;
  color: yellow;
}

${
  "" /* .tippy-tooltip.tomato-theme[data-animatefill] {
  background-color: transparent;
}

.tippy-tooltip.tomato-theme .tippy-backdrop {
  background-color: tomato;
} */
}


}

${
  "" /* 
.tippy-popper[x-placement^=top] [x-arrow] {
  border-top: 7px solid #DBEEF5;
} */
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
