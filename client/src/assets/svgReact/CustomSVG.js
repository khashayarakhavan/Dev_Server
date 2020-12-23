import * as React from "react";
import {SVG} from './CustomSVG.styled';

const CustomSVG = (props) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {/* <use xlinkHref={`${sprites}#${props.name}`} /> */}
    </SVG>
  );
};

export default CustomSVG;
