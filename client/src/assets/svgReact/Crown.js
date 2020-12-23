import * as React from "react";

function SvgCrown(props) {
  return (
    <svg width={50} height={39} {...props}>
      <g fillRule="evenodd">
        <path fill="#808282" d="M3 14l22 12.5L47 14l-6.145 25H9.085z" />
        <path fillOpacity={0.263} d="M25 8l15 31H10z" />
        <circle cx={2} cy={9} r={2} />
        <circle cx={25} cy={2} r={2} />
        <circle cx={48} cy={9} r={2} />
      </g>
    </svg>
  );
}

export default SvgCrown;
