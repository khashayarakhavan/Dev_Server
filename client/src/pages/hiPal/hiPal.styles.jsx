//Libraries

import styled, { css } from "styled-components";
import {rgba} from 'polished';
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';

//Respond
import {respond} from '../../design/responsive';
//Containers
import {VegeloperContainer} from '../../design/containers.styles';
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
// const openStyles = css`
//   ${'' /* transform: translateX(100px) scale(0.95); */}
//   border-radius: 10vw;
// `;

//Code
// const openStyles = css`
//   border-radius: 10vw;
//   ${"" /* border-radius: 10vw; */}
// `;
export const ScrollLinkCustom = styled(ScrollLink)`
  color: red;
`;

export const HiPalContainer = styled(VegeloperContainer)`
  ${"" /* background-image:  */}
  background: transparent;
  position: relative;
  ${"" /* background: rgba(white, 0.1) !important; */}
  ${"" /* opacity: 20%; */}
  ${"" /* ${"" /* background-color: white !important; */}
  
  ${"" /* background: rgba(white, 0.1); */}

  ${"" /* & > * {
    z-index: 10;
  } */}

  
    &::after {
    content: "";
    ${
      "" /* background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='4000' height='2500' preserveAspectRatio='none' viewBox='0 0 4000 2500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1105%26quot%3b)' fill='none'%3e%3crect width='4000' height='2500' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M0%2c1216.948C225.853%2c1204.695%2c440.145%2c1096.293%2c605.064%2c941.499C755.224%2c800.558%2c816.08%2c596.466%2c872.183%2c398.313C921.325%2c224.747%2c919.68%2c49.41%2c908.62%2c-130.64C896.6%2c-326.309%2c942.097%2c-557.425%2c804.872%2c-697.426C667.277%2c-837.805%2c431.557%2c-774.509%2c238.965%2c-813.841C66.134%2c-849.137%2c-93.908%2c-936.585%2c-269.19%2c-916.775C-464.564%2c-894.694%2c-654.611%2c-824.717%2c-803.282%2c-696.048C-965.2%2c-555.914%2c-1149.526%2c-377.685%2c-1139.22%2c-163.795C-1128.775%2c52.965%2c-836.861%2c143.737%2c-753.169%2c343.961C-664.773%2c555.439%2c-798.509%2c835.978%2c-648.782%2c1009.525C-497.403%2c1184.987%2c-231.398%2c1229.502%2c0%2c1216.948' fill='%230a1d31'%3e%3c/path%3e%3cpath d='M4000 4196.197C4318.842 4200.244 4646.347 4084.34 4876.083 3863.2110000000002 5091.17 3656.182 5122.968 3335.4880000000003 5195.161 3045.812 5255.229 2804.7889999999998 5253.5779999999995 2566.979 5261.007 2318.695 5270.131 2013.796 5405.624 1680.826 5243.742 1422.291 5080.0830000000005 1160.919 4743.301 1054.355 4438.8 1005.585 4154.44 960.0409999999999 3888.428 1101.029 3606.562 1160.075 3295.531 1225.23 2937.1040000000003 1162.902 2696.549 1370.553 2448.95 1584.284 2317.1440000000002 1933.45 2332.117 2260.195 2346.3469999999998 2570.718 2632.782 2782.975 2773.965 3059.9120000000003 2907.1549999999997 3321.17 2923.011 3641.816 3138.093 3841.1530000000002 3370.701 4056.734 3682.88 4192.1720000000005 4000 4196.197' fill='%2312375d'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1105'%3e%3crect width='4000' height='2500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */
    }
    background-color: ${colors.neutrals.light};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2500' height='4000' preserveAspectRatio='none' viewBox='0 0 2500 4000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask12466%26quot%3b)' fill='none'%3e%3crect width='1092' height='1092' clip-path='url(%26quot%3b%23SvgjsClipPath12467%26quot%3b)' x='130.02' y='904.04' fill='url(%23SvgjsPattern12468)' transform='rotate(132.18%2c 676.02%2c 1450.04)'%3e%3c/rect%3e%3crect width='787.2' height='787.2' clip-path='url(%26quot%3b%23SvgjsClipPath12469%26quot%3b)' x='180.64' y='2473.43' fill='url(%23SvgjsPattern12470)' transform='rotate(36.38%2c 574.24%2c 2867.03)'%3e%3c/rect%3e%3cpath d='M1226.43 2272.45 L1046.34 1871.92L948.4675961762541 2260.102403823746z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3crect width='1091.12' height='1091.12' clip-path='url(%26quot%3b%23SvgjsClipPath12471%26quot%3b)' x='861.38' y='-237.43' fill='url(%23SvgjsPattern12472)' transform='rotate(78.02%2c 1406.94%2c 308.13)'%3e%3c/rect%3e%3crect width='648' height='648' clip-path='url(%26quot%3b%23SvgjsClipPath12473%26quot%3b)' x='592.25' y='749.75' fill='url(%23SvgjsPattern12474)' transform='rotate(38.4%2c 916.25%2c 1073.75)'%3e%3c/rect%3e%3ccircle r='208.33333333333334' cx='203.61' cy='3918.5' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/circle%3e%3cpath d='M1783.86 757.94L1776.48 768.4 1764.65 763.5 1757.27 773.97 1745.43 769.06 1738.05 779.53 1726.22 774.63M1781.63 750.25L1774.25 760.72 1762.42 755.82 1755.04 766.28 1743.21 761.38 1735.83 771.85 1724 766.94' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.99'%3e%3c/path%3e%3crect width='180' height='180' clip-path='url(%26quot%3b%23SvgjsClipPath12475%26quot%3b)' x='1786.32' y='-47.51' fill='url(%23SvgjsPattern12476)' transform='rotate(22.51%2c 1876.32%2c 42.49)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask12466'%3e%3crect width='2500' height='4000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12468'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(253%2c 165%2c 15%2c 1)' fill='none' stroke-width='1.63'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12467'%3e%3ccircle r='273' cx='676.02' cy='1450.04'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.3' height='12.3' patternUnits='userSpaceOnUse' id='SvgjsPattern12470'%3e%3cpath d='M6.15 1L6.15 11.3M1 6.15L11.3 6.15' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='2.81'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12469'%3e%3ccircle r='196.8' cx='574.24' cy='2867.03'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='1091.12' height='11.86' patternUnits='userSpaceOnUse' id='SvgjsPattern12472'%3e%3crect width='1091.12' height='5.93' x='0' y='0' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/rect%3e%3crect width='1091.12' height='5.93' x='0' y='5.93' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12471'%3e%3ccircle r='272.78' cx='1406.94' cy='308.13'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='648' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12474'%3e%3crect width='648' height='3' x='0' y='0' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/rect%3e%3crect width='648' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12473'%3e%3ccircle r='162' cx='916.25' cy='1073.75'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12476'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12475'%3e%3ccircle r='45' cx='1876.32' cy='42.49'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c105 C 48%2c133.8 144%2c242.4 240%2c249 C 336%2c255.6 384%2c144.6 480%2c138 C 576%2c131.4 624%2c215.8 720%2c216 C 816%2c216.2 864%2c136.8 960%2c139 C 1056%2c141.2 1104%2c233.4 1200%2c227 C 1296%2c220.6 1392%2c131 1440%2c107L1440 560L0 560z' fill='rgba(253%2c 165%2c 15%2c 0.1)'%3e%3c/path%3e%3cpath d='M 0%2c402 C 96%2c412 288%2c461.8 480%2c452 C 672%2c442.2 768%2c334.4 960%2c353 C 1152%2c371.6 1344%2c506.6 1440%2c545L1440 560L0 560z' fill='rgba(0%2c 49%2c 83%2c 0.36)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"),
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1080' preserveAspectRatio='none' viewBox='0 0 2000 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask39243%26quot%3b)' fill='none'%3e%3crect width='531.52' height='531.52' clip-path='url(%26quot%3b%23SvgjsClipPath39244%26quot%3b)' x='-48.06' y='651.26' fill='url(%23SvgjsPattern39245)' transform='rotate(95.68%2c 217.7%2c 917.02)'%3e%3c/rect%3e%3cpath d='M1247.45 415.52a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1234.91 405.59a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1222.36 395.66a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1209.82 385.73a5.6 5.6 0 1 0-8.79-6.95 5.6 5.6 0 1 0 8.79 6.95zM1282.48 422.84a5.6 5.6 0 1 0-8.79-6.95 5.6 5.6 0 1 0 8.79 6.95zM1269.93 412.91a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1257.38 402.98a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1244.84 393.05a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3crect width='384' height='384' clip-path='url(%26quot%3b%23SvgjsClipPath39246%26quot%3b)' x='21.78' y='555.7' fill='url(%23SvgjsPattern39247)' transform='rotate(170.84%2c 213.78%2c 747.7)'%3e%3c/rect%3e%3crect width='700.04' height='700.04' clip-path='url(%26quot%3b%23SvgjsClipPath39248%26quot%3b)' x='1404.82' y='181.37' fill='url(%23SvgjsPattern39249)' transform='rotate(228.1%2c 1754.84%2c 531.39)'%3e%3c/rect%3e%3crect width='563.2' height='563.2' clip-path='url(%26quot%3b%23SvgjsClipPath39250%26quot%3b)' x='-181.68' y='-186.92' fill='url(%23SvgjsPattern39251)' transform='rotate(88.47%2c 99.92%2c 94.68)'%3e%3c/rect%3e%3crect width='266.4' height='266.4' clip-path='url(%26quot%3b%23SvgjsClipPath39252%26quot%3b)' x='659.52' y='925.5' fill='url(%23SvgjsPattern39253)' transform='rotate(223.46%2c 792.72%2c 1058.7)'%3e%3c/rect%3e%3crect width='648' height='648' clip-path='url(%26quot%3b%23SvgjsClipPath39254%26quot%3b)' x='-8.05' y='-72.13' fill='url(%23SvgjsPattern39255)' transform='rotate(188.7%2c 315.95%2c 251.87)'%3e%3c/rect%3e%3cpath d='M1663.3600000000001 1174 L1823.21 1313.6299999999999L1636.3455103358142 1350.754489664186z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3cpath d='M1716.38 864.04a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1701.5 869.91a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1686.62 875.78a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1671.73 881.66a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11zM1740.27 837.4a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1725.39 843.28a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1710.51 849.15a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1695.62 855.03a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11zM1764.16 810.77a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1749.28 816.65a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1734.4 822.52a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1719.51 828.4a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask39243'%3e%3crect width='2000' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='12.08' height='12.08' patternUnits='userSpaceOnUse' id='SvgjsPattern39245'%3e%3cpath d='M0 12.08L6.04 0L12.08 12.08' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39244'%3e%3ccircle r='132.88' cx='217.7' cy='917.02'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern39247'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none' stroke-width='1.91'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39246'%3e%3ccircle r='96' cx='213.78' cy='747.7'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.46' height='9.46' patternUnits='userSpaceOnUse' id='SvgjsPattern39249'%3e%3cpath d='M4.73 1L4.73 8.46M1 4.73L8.46 4.73' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='3.49'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39248'%3e%3ccircle r='175.01' cx='1754.84' cy='531.39'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='563.2' height='12.8' patternUnits='userSpaceOnUse' id='SvgjsPattern39251'%3e%3crect width='563.2' height='6.4' x='0' y='0' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/rect%3e%3crect width='563.2' height='6.4' x='0' y='6.4' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39250'%3e%3ccircle r='140.8' cx='99.92' cy='94.68'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='266.4' height='11.1' patternUnits='userSpaceOnUse' id='SvgjsPattern39253'%3e%3crect width='266.4' height='5.55' x='0' y='0' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/rect%3e%3crect width='266.4' height='5.55' x='0' y='5.55' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39252'%3e%3ccircle r='66.6' cx='792.72' cy='1058.7'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='648' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern39255'%3e%3crect width='648' height='3' x='0' y='0' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/rect%3e%3crect width='648' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39254'%3e%3ccircle r='162' cx='315.95' cy='251.87'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1237%26quot%3b)' fill='none'%3e%3cpath d='M203.68 505.52L203.58 492.72 216.05 489.81 215.94 477 228.42 474.09 228.31 461.28 240.78 458.37' stroke='rgba(20%2c 51%2c 81%2c 1)' stroke-width='2.76' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='186.56' height='186.56' clip-path='url(%26quot%3b%23SvgjsClipPath1238%26quot%3b)' x='712.79' y='161.68' fill='url(%23SvgjsPattern1239)' transform='rotate(41.6%2c 806.07%2c 254.96)'%3e%3c/rect%3e%3cpath d='M442.14 454.4a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM455.01 463.9a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM467.88 473.4a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66zM480.75 482.91a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM406.89 448.26a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM419.76 457.77a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM432.64 467.27a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM445.51 476.77a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='1.04'%3e%3c/path%3e%3crect width='259.48' height='259.48' clip-path='url(%26quot%3b%23SvgjsClipPath1240%26quot%3b)' x='943.55' y='33.39' fill='url(%23SvgjsPattern1241)' transform='rotate(253.86%2c 1073.29%2c 163.13)'%3e%3c/rect%3e%3cpath d='M919.01 97.12a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM934.91 95.28a5.6 5.6 0 1 0 11.12-1.28 5.6 5.6 0 1 0-11.12 1.28zM950.8 93.45a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM966.69 91.62a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM889.05 116.68a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM904.95 114.85a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM920.84 113.01a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM936.74 111.18a5.6 5.6 0 1 0 11.12-1.29 5.6 5.6 0 1 0-11.12 1.29z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.54' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3ccircle r='85.6191390004179' cx='1147.09' cy='14.49' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/circle%3e%3crect width='251.52' height='251.52' clip-path='url(%26quot%3b%23SvgjsClipPath1242%26quot%3b)' x='1021.72' y='194.3' fill='url(%23SvgjsPattern1243)' transform='rotate(224.08%2c 1147.48%2c 320.06)'%3e%3c/rect%3e%3crect width='250.92' height='250.92' clip-path='url(%26quot%3b%23SvgjsClipPath1244%26quot%3b)' x='-42' y='125.05' fill='url(%23SvgjsPattern1245)' transform='rotate(43.38%2c 83.46%2c 250.51)'%3e%3c/rect%3e%3crect width='107.4' height='107.4' clip-path='url(%26quot%3b%23SvgjsClipPath1246%26quot%3b)' x='1201.16' y='260.72' fill='url(%23SvgjsPattern1247)' transform='rotate(61.76%2c 1254.86%2c 314.42)'%3e%3c/rect%3e%3crect width='268.4' height='268.4' clip-path='url(%26quot%3b%23SvgjsClipPath1248%26quot%3b)' x='-38.02' y='-38.09' fill='url(%23SvgjsPattern1249)' transform='rotate(62.34%2c 96.18%2c 96.11)'%3e%3c/rect%3e%3cpath d='M47.81 445.67999999999995 L65.9 380.74L89.19204155662925 445.5470415566292z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3cpath d='M1142.93 318.84L1151 328.78 1143.08 338.84 1151.15 348.78 1143.22 358.84 1151.3 368.78 1143.37 378.84M1134.93 318.9L1143 328.84 1135.08 338.9 1143.15 348.84 1135.22 358.9 1143.3 368.84 1135.37 378.9' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.83' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1237'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.48' height='8.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1239'%3e%3cpath d='M0 8.48L4.24 0L8.48 8.48' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1238'%3e%3ccircle r='46.64' cx='806.07' cy='254.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.98' height='9.98' patternUnits='userSpaceOnUse' id='SvgjsPattern1241'%3e%3cpath d='M4.99 1L4.99 8.98M1 4.99L8.98 4.99' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1240'%3e%3ccircle r='64.87' cx='1073.29' cy='163.13'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.48' height='10.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1243'%3e%3cpath d='M0 10.48L5.24 0L10.48 10.48' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1242'%3e%3ccircle r='62.88' cx='1147.48' cy='320.06'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.94' height='13.94' patternUnits='userSpaceOnUse' id='SvgjsPattern1245'%3e%3cpath d='M0 13.94L6.97 0L13.94 13.94' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1244'%3e%3ccircle r='62.73' cx='83.46' cy='250.51'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='107.4' height='10.74' patternUnits='userSpaceOnUse' id='SvgjsPattern1247'%3e%3crect width='107.4' height='5.37' x='0' y='0' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/rect%3e%3crect width='107.4' height='5.37' x='0' y='5.37' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1246'%3e%3ccircle r='26.85' cx='1254.86' cy='314.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.2' height='12.2' patternUnits='userSpaceOnUse' id='SvgjsPattern1249'%3e%3cpath d='M6.1 1L6.1 11.2M1 6.1L11.2 6.1' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none' stroke-width='1.11'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1248'%3e%3ccircle r='67.1' cx='96.18' cy='96.11'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3cpath d='M329.19 0C378.41 25.68 381.14 73.04 420 73.04C448.37 73.04 430.82 17.13 463.64 0C500.82 -19.39 511.82 0 560 0C630 0 630 0 700 0C743.08 0 763.06 -26.09 786.15 0C825.02 43.91 804.58 70.13 823.93 140C831.5 167.35 832.86 194.44 840 194.44C847.02 194.44 848.43 167.6 852.25 140C861.89 70.38 831.5 38.82 866.92 0C895.37 -31.18 923.46 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1272.72 0 1273.46 -3.86 1285.45 0C1343.46 18.64 1340.74 38.89 1400 45C1468.01 52.01 1501.23 -0.06 1540 26.25C1571.23 47.44 1540 83.13 1540 140C1540 210 1540 210 1540 280C1540 350 1540 350 1540 420C1540 476.32 1556 485.58 1540 532.64C1532.2 555.58 1518.49 554.9 1492.4 560C1448.49 568.58 1446.2 560 1400 560C1359.47 560 1356 570.98 1318.95 560C1286 550.24 1287.19 518.52 1260 518.52C1238.84 518.52 1247.05 552.65 1222.25 560C1177.05 573.39 1171.13 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C648.85 560 597.69 575.49 597.69 560C597.69 541.38 653.39 531.11 700 491.79C736.37 461.11 763.64 452.89 763.64 420C763.64 392.44 737.1 378.36 700 370.88C635.28 357.83 620.2 401.44 560 378.93C498.67 356 502.91 333.79 456.94 280C432.91 251.89 450.12 219.97 420 215.12C361.65 205.71 345.4 225.8 280 251.48C262.78 258.24 268.69 267.06 254.75 280C198.69 332.04 197.85 331.28 140 381.45C117.14 401.28 93.33 394.03 93.33 420C93.33 483.31 163.95 524.08 140 560C117.28 594.08 35 595 0 560C-35 525 0 490 0 420C0 363.4 -8.2 360.54 0 306.81C2.48 290.54 21.36 293.04 21.36 280C21.36 267.97 2.28 271.6 0 256.67C-8.4 201.6 0 198.34 0 140C0 70 -35 35 0 0C35 -35 70 0 140 0C210 0 210 0 280 0C304.6 0 308.41 -10.84 329.19 0' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 114.15C537.32 114.15 510.59 127.07 510.59 140C510.59 152.93 537.32 165.85 560 165.85C574.75 165.85 585.45 152.93 585.45 140C585.45 127.07 574.75 114.15 560 114.15' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 43.08C1234.91 43.08 1212.4 86.15 1193.68 140C1171.22 204.61 1157.42 226.19 1177.65 280C1190.58 314.37 1222.28 316.36 1260 316.36C1281.41 316.36 1292.32 303.54 1295.9 280C1305.73 215.36 1297.27 209 1286.81 140C1279.32 90.54 1281.48 43.08 1260 43.08' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 352.59C1107.57 352.59 1096.05 389.08 1096.05 420C1096.05 434.45 1107.79 443.33 1120 443.33C1132.76 443.33 1146 434.79 1146 420C1146 389.42 1132.55 352.59 1120 352.59' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 380.25C1380.62 380.25 1359.75 398.3 1359.75 420C1359.75 446.92 1380.86 477.5 1400 477.5C1418.3 477.5 1434.62 447.24 1434.62 420C1434.62 398.61 1418.06 380.25 1400 380.25' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M296.9 560C296.9 533 358.45 463.51 420 463.51C481.55 463.51 543.1 533 543.1 560C543.1 581.25 481.55 560 420 560C358.45 560 296.9 581.25 296.9 560' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 106.67C125.66 106.67 112 124.58 112 140C112 152.91 125.76 163.33 140 163.33C154.98 163.33 170.43 153.01 170.43 140C170.43 124.68 154.87 106.67 140 106.67' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M220 0C255.45 14.18 247.68 30.86 280 56C337.68 100.86 400 105.23 400 140C400 170.56 331.48 151.1 280 186.67C230.17 221.1 240.74 235.39 197.38 280C170.74 307.41 168.9 330.72 140 330.72C110.55 330.72 108.34 307.43 80.68 280C38.34 238 28.13 240.67 0 191.85C-12.21 170.67 0 165.93 0 140C0 70 -35 35 0 0C35 -35 70 0 140 0C180 0 185.45 -13.82 220 0' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 60.31C533.23 31.35 509.09 18.33 509.09 0C509.09 -11.82 534.55 0 560 0C603.56 0 609.26 -13.99 647.11 0C679.26 11.88 676.05 23.67 700 51.74C735.78 93.67 752.31 89.65 766.56 140C784.62 203.78 786.7 223.78 764.62 280C753.42 308.52 734.14 300.75 700 309.47C631.83 326.89 623.46 341.89 560 332.27C526.24 327.15 505.56 307.11 505.56 280C505.56 250.82 532.04 249.14 560 219.69C598.5 179.14 638.48 179.85 638.48 140C638.48 100.16 597.93 101.35 560 60.31' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M896 140C922.87 69.77 934.32 10.77 980 10.77C1029.66 10.77 1056.93 66.67 1086.67 140C1111.53 201.28 1098.2 211.32 1089.2 280C1079.86 351.32 1040.79 357.75 1050 420C1056.19 461.85 1086.38 452.8 1120 488.21C1152.84 522.8 1182.92 538.37 1182.92 560C1182.92 574.26 1151.46 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C778.08 560 716.15 587.5 716.15 560C716.15 518.99 777.85 491.26 840 422.98C841.57 421.26 843.01 422.24 843.59 420C861.5 350.75 863.76 350.65 876.98 280C889.96 210.65 871.36 204.38 896 140' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1361.28 140C1369.08 117.3 1376.89 116.55 1400 107.5C1466.25 81.55 1492.8 59.04 1540 70C1562.8 75.29 1540 105 1540 140C1540 185.9 1555.19 192.74 1540 231.8C1527.97 262.74 1485.56 256.43 1485.56 280C1485.56 302.8 1528.45 294.85 1540 324.55C1555.67 364.85 1540 372.27 1540 420C1540 456.21 1554.29 492.41 1540 492.41C1520.42 492.41 1505.44 456.83 1472.26 420C1435.44 379.14 1437.62 377.1 1400 337.04C1371.88 307.1 1347.89 316.21 1340.77 280C1328.53 217.69 1339.46 203.55 1361.28 140' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 381.28C9.01 381.28 29.96 396.55 31.93 420C37.46 485.91 29.43 496.73 15 560C13.47 566.73 0.73 566.77 0 560C-6.77 496.77 0 490 0 420C0 400.64 -6.95 381.28 0 381.28' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1196 420C1196 391.31 1228.97 361.82 1260 361.82C1288.97 361.82 1316 391.26 1316 420C1316 448.01 1288.92 475.31 1260 475.31C1228.92 475.31 1196 448.06 1196 420' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M357.24 560C357.24 546.24 388.62 510.81 420 510.81C451.38 510.81 482.76 546.24 482.76 560C482.76 570.83 451.38 560 420 560C388.62 560 357.24 570.83 357.24 560' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1380.35 560C1380.35 554.12 1389.85 540 1400 540C1410.87 540 1422.4 554.27 1422.4 560C1422.4 564.27 1411.2 560 1400 560C1390.18 560 1380.35 564.12 1380.35 560' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M99.35 0C99.35 34.43 28.32 114.07 0 114.07C-21.36 114.07 -26.55 30.48 0 0C23.12 -26.55 99.35 -22.61 99.35 0' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 6.46C556.85 6.46 554.55 1.96 554.55 0C554.55 -1.27 557.28 0 560 0C564.66 0 569.33 -1.46 569.33 0C569.33 1.77 564.24 6.46 560 6.46' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M691.52 140C691.52 133.15 695.65 127.83 700 127.83C704.48 127.83 709.18 133.05 709.18 140C709.18 155.6 704.43 172.94 700 172.94C695.6 172.94 691.52 155.71 691.52 140' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M939.75 140C946.13 105.14 958.11 78.08 980 78.08C1003.79 78.08 1023.98 103.29 1031.11 140C1043.58 204.25 1025.98 210.08 1019.2 280C1012.4 350.08 980.51 361.16 1003.95 420C1030.91 487.7 1062.81 475.75 1120 533.08C1132.64 545.75 1143.6 551.89 1143.6 560C1143.6 565.35 1131.8 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C811.73 560 783.46 572.55 783.46 560C783.46 541.28 809.27 526.16 840 497.45C884.2 456.16 909.45 470.4 933.33 420C960.96 361.68 941.41 350.07 943.02 280C944.62 210.07 927.64 206.1 939.75 140' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1462.22 140C1462.22 125.1 1510.53 113.75 1540 113.75C1549.42 113.75 1540 126.88 1540 140C1540 157.22 1551.21 174.43 1540 174.43C1512.32 174.43 1462.22 155.44 1462.22 140' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M554.17 280C554.17 276.87 556.09 273.54 560 273.54C572.13 273.54 586.25 276.97 586.25 280C586.25 283 572.33 285.6 560 285.6C556.29 285.6 554.17 282.9 554.17 280' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1385.64 280C1385.64 254.04 1391.37 224 1400 224C1408.92 224 1420.74 255.37 1420.74 280C1420.74 290.28 1409.75 293.83 1400 293.83C1392.2 293.83 1385.64 288.95 1385.64 280' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1246 420C1246 413.72 1253.21 407.27 1260 407.27C1266.34 407.27 1272.25 413.71 1272.25 420C1272.25 426.13 1266.33 432.1 1260 432.1C1253.2 432.1 1246 426.14 1246 420' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1509.89 420C1509.89 399.81 1531.71 377.58 1540 377.58C1546.76 377.58 1540 398.79 1540 420C1540 436.09 1546.35 452.18 1540 452.18C1531.3 452.18 1509.89 437.11 1509.89 420' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3cpath d='M417.59 560C417.59 559.47 418.79 558.11 420 558.11C421.21 558.11 422.41 559.47 422.41 560C422.41 560.42 421.21 560 420 560C418.79 560 417.59 560.42 417.59 560' stroke='rgba(51%2c 121%2c 194%2c 0.12)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1080' preserveAspectRatio='none' viewBox='0 0 2000 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask39221%26quot%3b)' fill='none'%3e%3crect width='222.48' height='222.48' clip-path='url(%26quot%3b%23SvgjsClipPath39222%26quot%3b)' x='1288.22' y='146.92' fill='url(%23SvgjsPattern39223)' transform='rotate(101.4%2c 1399.46%2c 258.16)'%3e%3c/rect%3e%3crect width='162' height='162' clip-path='url(%26quot%3b%23SvgjsClipPath39224%26quot%3b)' x='1142.11' y='792.08' fill='url(%23SvgjsPattern39225)' transform='rotate(112.3%2c 1223.11%2c 873.08)'%3e%3c/rect%3e%3cpath d='M134.3 962.4L132.38 949.74 144.31 945.08 142.39 932.42 154.32 927.77 152.4 915.11 164.33 910.45M141.23 966.4L139.31 953.74 151.24 949.09 149.32 936.43 161.25 931.77 159.33 919.11 171.26 914.46' stroke='rgba(20%2c 51%2c 81%2c 1)' stroke-width='2.12' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3cpath d='M1555.32 606.07L1549.57 594.63 1559.48 586.51 1553.73 575.06 1563.64 566.95 1557.89 555.5 1567.79 547.38M1563.14 607.73L1557.4 596.29 1567.3 588.17 1561.56 576.73 1571.46 568.61 1565.71 557.16 1575.62 549.05M1570.97 609.4L1565.22 597.95 1575.13 589.84 1569.38 578.39 1579.29 570.27 1573.54 558.83 1583.44 550.71' stroke='rgba(235%2c 94%2c 40%2c 1)' stroke-width='1.02' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='234.24' height='234.24' clip-path='url(%26quot%3b%23SvgjsClipPath39226%26quot%3b)' x='335.02' y='347.43' fill='url(%23SvgjsPattern39227)' transform='rotate(349.17%2c 452.14%2c 464.55)'%3e%3c/rect%3e%3cpath d='M1471.02 1067.07 L1323.5400000000002 1387.15L1204.8612386523992 1034.691238652399z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='1.56'%3e%3c/path%3e%3cpath d='M784.68 469.74a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM799.94 464.91a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM815.19 460.08a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM830.45 455.25a5.6 5.6 0 1 0 10.67-3.38 5.6 5.6 0 1 0-10.67 3.38zM759.01 494.65a5.6 5.6 0 1 0 10.67-3.38 5.6 5.6 0 1 0-10.67 3.38zM774.26 489.82a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM789.51 484.99a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM804.77 480.16a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM733.33 519.57a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM748.58 514.74a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38zM763.84 509.91a5.6 5.6 0 1 0 10.67-3.38 5.6 5.6 0 1 0-10.67 3.38zM779.09 505.08a5.6 5.6 0 1 0 10.68-3.38 5.6 5.6 0 1 0-10.68 3.38z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3crect width='480' height='480' clip-path='url(%26quot%3b%23SvgjsClipPath39228%26quot%3b)' x='1723.62' y='85.55' fill='url(%23SvgjsPattern39229)' transform='rotate(138.55%2c 1963.62%2c 325.55)'%3e%3c/rect%3e%3cpath d='M800.27 566.8a5.6 5.6 0 1 0-2.87 10.83 5.6 5.6 0 1 0 2.87-10.83zM796.17 582.27a5.6 5.6 0 1 0-2.87 10.82 5.6 5.6 0 1 0 2.87-10.82zM792.06 597.73a5.6 5.6 0 1 0-2.87 10.83 5.6 5.6 0 1 0 2.87-10.83zM787.96 613.2a5.6 5.6 0 1 0-2.87 10.82 5.6 5.6 0 1 0 2.87-10.82zM793.01 531.77a5.6 5.6 0 1 0-2.87 10.83 5.6 5.6 0 1 0 2.87-10.83zM788.91 547.23a5.6 5.6 0 1 0-2.87 10.83 5.6 5.6 0 1 0 2.87-10.83zM784.81 562.7a5.6 5.6 0 1 0-2.88 10.83 5.6 5.6 0 1 0 2.88-10.83zM780.7 578.16a5.6 5.6 0 1 0-2.87 10.83 5.6 5.6 0 1 0 2.87-10.83z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask39221'%3e%3crect width='2000' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='222.48' height='12.36' patternUnits='userSpaceOnUse' id='SvgjsPattern39223'%3e%3crect width='222.48' height='6.18' x='0' y='0' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/rect%3e%3crect width='222.48' height='6.18' x='0' y='6.18' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39222'%3e%3ccircle r='55.62' cx='1399.46' cy='258.16'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.5' height='13.5' patternUnits='userSpaceOnUse' id='SvgjsPattern39225'%3e%3cpath d='M0 13.5L6.75 0L13.5 13.5' stroke='rgba(253%2c 165%2c 15%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39224'%3e%3ccircle r='40.5' cx='1223.11' cy='873.08'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.76' height='9.76' patternUnits='userSpaceOnUse' id='SvgjsPattern39227'%3e%3cpath d='M0 9.76L4.88 0L9.76 9.76' stroke='rgba(253%2c 165%2c 15%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39226'%3e%3ccircle r='58.56' cx='452.14' cy='464.55'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern39229'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(253%2c 165%2c 15%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39228'%3e%3ccircle r='120' cx='1963.62' cy='325.55'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M560 66.82C524.65 66.82 502.49 98.97 501.45 140C499.8 205.56 526.74 210.86 554.62 280C556.01 283.45 557.2 285.19 560 285.19C563.07 285.19 563.81 283.21 566.36 280C621.31 210.62 676.8 200.25 675 140C673.62 93.66 611.42 66.82 560 66.82' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M693.64 0C704.37 1.79 697.69 23.33 700 23.33C702.24 23.33 692.52 1.7 702.75 0C762.52 -9.96 771.38 0 840 0C910 0 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1501.86 -31.86 1540 0C1571.86 26.62 1562.6 75.23 1540 116.96C1524.69 145.23 1464.17 128.34 1464.17 140C1464.17 151.68 1524.62 135.24 1540 163.64C1562.53 205.24 1540 221.82 1540 280C1540 350 1540 350 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1108.34 560 1108.08 562.22 1096.67 560C1038.08 548.59 1038.34 532.73 980 532.73C921.66 532.73 921.92 548.59 863.33 560C851.92 562.22 851.66 560 840 560C829.5 560 827.69 565.47 819 560C757.69 521.4 747.72 471.85 700 471.85C669.02 471.85 695.64 538.57 661.61 560C625.64 582.65 610.81 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C133 560 132.82 561.5 126 560C62.82 546.13 34.19 567.26 0 529.27C-28.81 497.26 0 474.63 0 420C0 350 0 350 0 280C0 210 0 210 0 140C0 70 -35 35 0 0C35 -35 70 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C490 0 490 0 560 0C626.82 0 634.37 -9.88 693.64 0' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 210C818.01 210 805 247.51 805 280C805 301.35 819.93 317.69 840 317.69C868.06 317.69 901.25 303.48 901.25 280C901.25 249.63 866.13 210 840 210' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 414.29C135.29 414.29 131.76 415.21 131.76 420C131.76 464.73 131.12 513.33 140 513.33C149.24 513.33 168 458.29 168 420C168 408.77 153.41 414.29 140 414.29' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 61.25C44.89 40.84 73.41 88.71 140 76.36C213.41 62.75 213.49 1.72 280 9.33C353.49 17.74 354.87 54.46 420 108.39C433.78 119.8 431.21 123.15 437.82 140C464.87 208.95 450.94 217.49 487.31 280C512.03 322.49 522.2 350 560 350C601.5 350 606.1 318.19 645.91 280C676.1 251.03 674.81 215.68 700 215.68C723.11 215.68 742.5 247.15 742.5 280C742.5 316.5 723.56 318.72 700 354.38C677.31 388.72 667.05 383.04 650 420C619.63 485.85 639.58 506.45 605.16 560C594.58 576.45 582.58 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C262.5 560 245 568.54 245 560C245 546.14 256.7 530.52 280 515.2C344.2 472.97 351.68 482.7 420 444.89C437.68 435.1 452 433.68 452 420C452 404.26 440.61 395.89 420 386.06C354.61 354.86 351.93 349.03 280 337.93C211.93 327.43 203.88 321.99 140 342.86C78.29 363.02 83.65 380.43 28.82 420C13.65 430.95 8.8 443.9 0 443.9C-5.61 443.9 0 431.95 0 420C0 350 0 350 0 280C0 210 0 210 0 140C0 100.63 -25.11 72.66 0 61.25' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M775 420C775 399.55 808 403.38 840 385C910.5 344.51 918 293.36 980 302.27C1039.8 310.86 1083.6 368.26 1083.6 420C1083.6 460.76 1036.91 475.12 980 487.27C915.11 501.12 904.42 493.14 840 472C801.92 459.5 775 443.05 775 420' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M191.85 140C191.85 109.3 237.52 87.11 280 87.11C315.6 87.11 348 110.12 348 140C348 176.23 316.57 219.33 280 219.33C238.49 219.33 191.85 175.41 191.85 140' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 19.09C911.85 2.05 840 4.79 840 0C840 -4.75 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1388.09 -32.09 1400 0C1414.06 37.91 1359.75 72.89 1311.94 140C1289.75 171.14 1288.69 196.49 1260 196.49C1224.39 196.49 1218.48 171.76 1183.33 140C1148.48 108.52 1159.43 93.45 1120 70C1057.77 32.99 1051.85 37.05 980 19.09' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1540 28.35C1481.59 28.35 1400 7.16 1400 0C1400 -7.02 1481.79 -11.79 1540 0C1551.79 2.39 1551.59 28.35 1540 28.35' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1368.18 280C1368.18 264.38 1379.9 254.41 1400 251.43C1465.81 241.68 1480.77 242.46 1540 254.55C1550.77 256.75 1540 267.27 1540 280C1540 350 1540 350 1540 420C1540 490 1549.83 499.83 1540 560C1538.4 569.83 1520.76 569.64 1517.14 560C1494.51 499.64 1517.87 482.22 1487.5 420C1459.3 362.22 1443.09 370.55 1400 320C1383.43 300.55 1368.18 298.67 1368.18 280' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M552 420C552 415.72 556.11 414.81 560 414.81C563.45 414.81 566.67 416.1 566.67 420C566.67 438.7 563.66 460 560 460C556.32 460 552 438.31 552 420' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M910 420C910 404.37 948.37 381.82 980 381.82C1000.17 381.82 1013.6 403.22 1013.6 420C1013.6 433.22 998.3 441.82 980 441.82C946.5 441.82 910 434.37 910 420' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1256.41 420C1257.2 417.44 1258 416 1260 416C1262.49 416 1264.31 416.85 1265.38 420C1288.76 488.85 1310.91 507.51 1308.89 560C1308.22 577.51 1284.45 560 1260 560C1237.68 560 1215.78 576.4 1215.36 560C1213.99 506.4 1234.88 489.44 1256.41 420' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3cpath d='M362.07 560C362.07 549.86 389.06 522.67 420 522.67C467.43 522.67 518.82 550.36 518.82 560C518.82 569.02 469.41 560 420 560C391.03 560 362.07 568.52 362.07 560' stroke='rgba(51%2c 121%2c 194%2c 0.07)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1080' preserveAspectRatio='none' viewBox='0 0 2000 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask39243%26quot%3b)' fill='none'%3e%3crect width='531.52' height='531.52' clip-path='url(%26quot%3b%23SvgjsClipPath39244%26quot%3b)' x='-48.06' y='651.26' fill='url(%23SvgjsPattern39245)' transform='rotate(95.68%2c 217.7%2c 917.02)'%3e%3c/rect%3e%3cpath d='M1247.45 415.52a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1234.91 405.59a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1222.36 395.66a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1209.82 385.73a5.6 5.6 0 1 0-8.79-6.95 5.6 5.6 0 1 0 8.79 6.95zM1282.48 422.84a5.6 5.6 0 1 0-8.79-6.95 5.6 5.6 0 1 0 8.79 6.95zM1269.93 412.91a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1257.38 402.98a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95zM1244.84 393.05a5.6 5.6 0 1 0-8.78-6.95 5.6 5.6 0 1 0 8.78 6.95z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3crect width='384' height='384' clip-path='url(%26quot%3b%23SvgjsClipPath39246%26quot%3b)' x='21.78' y='555.7' fill='url(%23SvgjsPattern39247)' transform='rotate(170.84%2c 213.78%2c 747.7)'%3e%3c/rect%3e%3crect width='700.04' height='700.04' clip-path='url(%26quot%3b%23SvgjsClipPath39248%26quot%3b)' x='1404.82' y='181.37' fill='url(%23SvgjsPattern39249)' transform='rotate(228.1%2c 1754.84%2c 531.39)'%3e%3c/rect%3e%3crect width='563.2' height='563.2' clip-path='url(%26quot%3b%23SvgjsClipPath39250%26quot%3b)' x='-181.68' y='-186.92' fill='url(%23SvgjsPattern39251)' transform='rotate(88.47%2c 99.92%2c 94.68)'%3e%3c/rect%3e%3crect width='266.4' height='266.4' clip-path='url(%26quot%3b%23SvgjsClipPath39252%26quot%3b)' x='659.52' y='925.5' fill='url(%23SvgjsPattern39253)' transform='rotate(223.46%2c 792.72%2c 1058.7)'%3e%3c/rect%3e%3crect width='648' height='648' clip-path='url(%26quot%3b%23SvgjsClipPath39254%26quot%3b)' x='-8.05' y='-72.13' fill='url(%23SvgjsPattern39255)' transform='rotate(188.7%2c 315.95%2c 251.87)'%3e%3c/rect%3e%3cpath d='M1663.3600000000001 1174 L1823.21 1313.6299999999999L1636.3455103358142 1350.754489664186z' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/path%3e%3cpath d='M1716.38 864.04a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1701.5 869.91a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1686.62 875.78a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1671.73 881.66a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11zM1740.27 837.4a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1725.39 843.28a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1710.51 849.15a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1695.62 855.03a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11zM1764.16 810.77a5.6 5.6 0 1 0-10.42 4.12 5.6 5.6 0 1 0 10.42-4.12zM1749.28 816.65a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1734.4 822.52a5.6 5.6 0 1 0-10.42 4.11 5.6 5.6 0 1 0 10.42-4.11zM1719.51 828.4a5.6 5.6 0 1 0-10.41 4.11 5.6 5.6 0 1 0 10.41-4.11z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask39243'%3e%3crect width='2000' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='12.08' height='12.08' patternUnits='userSpaceOnUse' id='SvgjsPattern39245'%3e%3cpath d='M0 12.08L6.04 0L12.08 12.08' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39244'%3e%3ccircle r='132.88' cx='217.7' cy='917.02'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern39247'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none' stroke-width='1.91'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39246'%3e%3ccircle r='96' cx='213.78' cy='747.7'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.46' height='9.46' patternUnits='userSpaceOnUse' id='SvgjsPattern39249'%3e%3cpath d='M4.73 1L4.73 8.46M1 4.73L8.46 4.73' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='3.49'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39248'%3e%3ccircle r='175.01' cx='1754.84' cy='531.39'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='563.2' height='12.8' patternUnits='userSpaceOnUse' id='SvgjsPattern39251'%3e%3crect width='563.2' height='6.4' x='0' y='0' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/rect%3e%3crect width='563.2' height='6.4' x='0' y='6.4' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39250'%3e%3ccircle r='140.8' cx='99.92' cy='94.68'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='266.4' height='11.1' patternUnits='userSpaceOnUse' id='SvgjsPattern39253'%3e%3crect width='266.4' height='5.55' x='0' y='0' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/rect%3e%3crect width='266.4' height='5.55' x='0' y='5.55' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39252'%3e%3ccircle r='66.6' cx='792.72' cy='1058.7'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='648' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern39255'%3e%3crect width='648' height='3' x='0' y='0' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/rect%3e%3crect width='648' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath39254'%3e%3ccircle r='162' cx='315.95' cy='251.87'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M0 31.96C39.55 4.05 69.93 38.03 140 41.18C209.93 44.32 210.21 47.68 280 44.55C350.21 41.41 349.89 29.78 420 28.64C489.89 27.5 490.02 34.04 560 40C630.02 45.97 640.85 66.53 700 52.5C725.17 46.53 704.18 9.17 728.64 0C774.18 -17.08 784.32 0 840 0C893.85 0 929.43 -30.2 947.69 0C971.75 39.8 915.68 73.58 924.65 140C931.83 193.17 939.53 234.9 980 239.17C1037.21 245.2 1053.27 203.48 1120 160.59C1130.42 153.89 1130.33 151.8 1134.29 140C1157.26 71.51 1134.37 43.97 1173.85 0C1197.23 -26.03 1216.93 0 1260 0C1330 0 1330 0 1400 0C1470 0 1497.86 -27.86 1540 0C1567.86 18.41 1551.3 50.18 1540 92.54C1532.63 120.18 1505.94 111.88 1502.67 140C1495.05 205.61 1502.63 214.34 1518.22 280C1521.29 292.93 1537.99 284.29 1540 297.19C1548.88 354.29 1540 358.6 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 35 595 0 560C-35 525 0 490 0 420C0 389.07 -11.73 385.03 0 358.14C18.81 315.03 61.09 313.16 61.09 280C61.09 256.4 12.31 272.83 0 244.63C-18.24 202.83 0 192.31 0 140C0 85.98 -30.45 53.46 0 31.96' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 246.06C542.96 246.06 526.57 259.91 526.57 280C526.57 315.5 542.72 357.24 560 357.24C577.5 357.24 596.13 315.15 596.13 280C596.13 259.56 577.74 246.06 560 246.06' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 366.38C1088.54 366.38 1053.68 397.59 1053.68 420C1053.68 439.05 1087.59 449.3 1120 449.3C1146.46 449.3 1171.43 438.38 1171.43 420C1171.43 396.92 1147.41 366.38 1120 366.38' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 70C47.09 70 75.15 100.23 137.02 140C145.15 145.23 137.64 160 140 160C142.46 160 137.5 144.09 146.67 140C207.5 112.88 212.41 115.28 280 97.58C349.08 79.49 349.67 70.31 420 68.41C489.67 66.52 490.67 75.88 560 90C630.67 104.39 647.62 148.04 700 125.42C751.82 103.04 721.78 41.78 768.41 0C791.78 -20.93 804.2 0 840 0C874.62 0 908.73 -21.63 909.23 0C910.36 48.37 876 69.89 843.26 140C841.39 144.01 841.84 144.21 840 148.24C809.94 214.21 779.46 223.52 779.46 280C779.46 307.46 811.86 295.04 840 316.13C905.26 365.04 906.21 365.43 966.27 420C976.21 429.03 968.09 437.9 980 443.33C1044.95 472.9 1052.88 495.96 1120 490C1184.31 484.29 1189.86 462.4 1242.86 420C1259.86 406.4 1249.48 378 1260 378C1271.6 378 1275.01 398.15 1287.1 420C1325.36 489.15 1368.98 517.23 1360.7 560C1355.43 587.23 1310.35 560 1260 560C1190 560 1190 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C630 560 630 560 560 560C490 560 490 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 38.62 591.38 0 560C-31.38 534.5 -8.29 500.16 0 446.25C2.48 430.16 11.35 433.58 21.54 420C73.72 350.45 130.62 338.02 124.73 280C119.85 231.92 42.41 255.4 0 207.79C-19.95 185.4 0 173.89 0 140C0 105 -21.42 70 0 70' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1205.71 140C1200.08 74.07 1217.14 61.92 1241.15 0C1244.28 -8.08 1250.57 0 1260 0C1330 0 1330 0 1400 0C1470 0 1483.42 -13.42 1540 0C1553.42 3.19 1548.25 19.47 1540 33.22C1506.25 89.47 1480.44 79.42 1456 140C1430.66 202.81 1459.82 214.99 1440.44 280C1431.82 308.93 1423.25 327.89 1400 327.89C1369.33 327.89 1365.39 305.13 1332.59 280C1295.39 251.49 1291.16 254.99 1260 220.61C1227.72 184.99 1209.5 184.37 1205.71 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M560 193.03C516.32 193.03 482.39 228.82 474.33 280C464.52 342.31 497.31 350.8 524.26 420C540.15 460.8 526.45 489.07 560 500C614.32 517.7 643.23 505.15 700 477.27C724.69 465.15 722.91 447.95 722.91 420C722.91 398.32 710.74 399.37 700 378C675.57 329.37 684.89 322.68 652.58 280C614.89 230.2 605.45 193.03 560 193.03' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1094.55 280C1094.55 272.64 1106.91 263.53 1120 263.53C1135.19 263.53 1151.11 272.71 1151.11 280C1151.11 286.9 1135.34 291.91 1120 291.91C1107.06 291.91 1094.55 286.83 1094.55 280' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 371C253 371 225.56 389.48 225.56 420C225.56 477.89 253.19 547.83 280 547.83C306.66 547.83 332.5 478.18 332.5 420C332.5 389.77 306.47 371 280 371' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1470 420C1470 384.34 1518.91 358.6 1540 358.6C1553.91 358.6 1540 389.3 1540 420C1540 474.69 1556 529.38 1540 529.38C1521 529.38 1470 469.73 1470 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 108.04C21.49 108.04 62.55 124.22 62.55 140C62.55 155.68 21.67 170.95 0 170.95C-9.61 170.95 0 155.48 0 140C0 124.02 -9.78 108.04 0 108.04' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M308 140C358.09 115.43 363.58 108.18 420 108.18C489.58 108.18 559.56 103.73 560 140C560.6 189.64 454.01 198.9 422.09 280C398.91 338.9 430.48 351.53 449.79 420C469.96 491.53 510.7 514.65 501.05 560C495.8 584.65 460.52 560 420 560C385.78 560 355.54 582.28 351.56 560C343.04 512.28 412.26 479.65 395 420C376.48 355.99 340.94 361.59 280 312.67C253.74 291.59 220.61 304.64 220.61 280C220.61 236.73 248.54 227.25 280 176.84C292.23 157.25 288.09 149.76 308 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 63.64C824.3 63.64 808.18 21.99 808.18 0C808.18 -9.83 824.09 0 840 0C855.38 0 870.77 -9.65 870.77 0C870.77 22.17 855.6 63.64 840 63.64' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1336.36 140C1313.03 81.19 1307.07 46.28 1328.11 0C1338.89 -23.72 1364.05 0 1400 0C1444.34 0 1487.01 -24.87 1488.67 0C1491.68 45.13 1444.45 68.24 1409.33 140C1400.11 158.83 1413.05 181.18 1400 181.18C1376.57 181.18 1348.97 171.78 1336.36 140' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M111.28 420C111.28 397.86 127.11 378.52 140 378.52C151.84 378.52 160.74 398.44 160.74 420C160.74 452.12 152.12 485.88 140 485.88C127.39 485.88 111.28 451.54 111.28 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M786.55 420C786.55 393.39 812.83 372.58 840 372.58C868.38 372.58 897.65 393.15 897.65 420C897.65 453.61 868.16 493.5 840 493.5C812.61 493.5 786.55 453.85 786.55 420' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 555.63C5.39 555.63 14 558.88 14 560C14 561.07 5.33 561.67 0 560C-1.67 559.48 -1.61 555.63 0 555.63' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 560C980 552.6 1050.29 546.63 1120 530.7C1190.29 514.63 1201.05 486.37 1260 496C1290.7 501.02 1299.3 538.99 1299.3 560C1299.3 570.99 1279.65 560 1260 560C1190 560 1190 560 1120 560C1050 560 980 567.25 980 560' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3cpath d='M14.55 140C10.18 130.54 1.05 134.94 0 124.86C-6.23 64.94 -31.01 31.42 0 0C30.59 -31.01 64.33 -6.79 123.2 0C134.33 1.28 128.84 15.73 140 16.15C207.24 18.65 211.29 -1.49 280 5.83C351.29 13.42 352.93 18.62 420 45.97C492.93 75.71 491.61 80.63 560 120C573.27 127.64 569.44 133.81 583.33 140C639.44 165.02 639.79 175.12 700 182.42C768.12 190.68 775.14 187.39 840 171.11C859.63 166.18 868.97 155.36 868.97 140C868.97 125.07 859.07 116.38 840 110.53C774.58 90.46 760.04 118.03 700 88.15C649 62.77 617.93 26.21 617.93 0C617.93 -17.86 658.96 0 700 0C770 0 770 0 840 0C910 0 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1450.47 0 1467.75 -24.88 1500.93 0C1537.75 27.62 1525.12 51.66 1540 105C1544.65 121.66 1540 122.5 1540 140C1540 210 1540 210 1540 280C1540 294.85 1545.03 295.96 1540 309.7C1519.4 365.96 1488.73 370.01 1488.73 420C1488.73 448.49 1529.07 436.83 1540 466.67C1554.71 506.83 1568 541.33 1540 560C1498 588 1470 560 1400 560C1343.43 560 1337.37 572.41 1286.85 560C1267.37 555.21 1274.71 525.61 1260 525.61C1243.14 525.61 1246.47 554.41 1223.7 560C1176.47 571.6 1171.85 560 1120 560C1050 560 1050 560 980 560C910 560 910 560 840 560C770 560 770 560 700 560C634.86 560 569.72 583.46 569.72 560C569.72 529.55 630.37 498.54 700 452.18C735.51 428.54 780 442.15 780 420C780 393.5 746.43 364.73 700 354.88C636.43 341.4 615.42 348.95 560 373.33C541.42 381.51 556.16 396.69 552 420C539.5 490.03 564.39 519.99 526.67 560C498.39 589.99 473.34 560 420 560C350 560 350 560 280 560C210 560 210 560 140 560C70 560 40.34 589.66 0 560C-29.66 538.19 -27.68 487.82 0 457.06C35.32 417.82 109.27 461.31 126 420C145.13 372.78 99.47 349.75 71.71 280C43.75 209.75 46.03 208.11 14.55 140' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 107.16C1376.6 107.16 1364.14 116.45 1359.08 140C1345.58 202.87 1348.5 214.6 1362.89 280C1368.96 307.59 1375.78 325.97 1400 325.97C1447.44 325.97 1483.94 322.05 1506.21 280C1533.2 229.06 1529.03 189.65 1498.52 140C1475.92 103.23 1446.32 107.16 1400 107.16' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 372.7C938.74 372.7 892.5 393.24 892.5 420C892.5 449.29 939.9 484.81 980 484.81C1011.43 484.81 1035.56 450.22 1035.56 420C1035.56 394.17 1010.27 372.7 980 372.7' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M60 140C34.27 105.43 15.82 114.49 0 77.57C-14.18 44.49 -19.26 19.52 0 0C19 -19.26 43.98 -14.19 76.53 0C113.98 16.33 100.91 45.9 140 61.03C202.65 85.28 210.06 69.46 280 78.75C350.06 88.05 353.72 78.42 420 98.21C456.28 109.04 469.52 107.93 485.12 140C513.73 198.82 516.45 212.15 508.42 280C499.89 352.15 481.77 350.69 452 420C437.56 453.63 433.52 451.95 420 485.88C405.63 521.95 424.31 545.14 396.23 560C354.31 582.2 338.12 560 280 560C210 560 210 560 140 560C70 560 0 578.59 0 560C0 538.59 74.48 525.86 140 480C174.48 455.86 197.39 456.55 200 420C204.53 356.55 180.67 347.84 154.29 280C150.67 270.69 145.63 274.07 140 265.71C98.49 204.07 104.27 199.5 60 140' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 49.12C795.84 16.47 740 12.94 740 0C740 -11.62 790 0 840 0C910 0 910 0 980 0C1050 0 1050 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1430.11 0 1460.23 -13.01 1460.23 0C1460.23 18.97 1432.52 34.58 1400 63.95C1355.02 104.58 1323.59 89.97 1305.23 140C1283.95 197.99 1295.73 217.18 1320.72 280C1343.11 336.29 1359.21 330.11 1400 378.21C1418.57 400.11 1418.65 400.2 1439.44 420C1488.65 466.86 1502.93 459.93 1540 511.54C1553.21 529.93 1558 553.77 1540 560C1488 578 1470 560 1400 560C1367.39 560 1359.23 576.73 1334.79 560C1289.23 528.83 1300.98 464.21 1260 464.21C1213.03 464.21 1213.61 522.56 1158.89 560C1143.61 570.45 1139.45 560 1120 560C1050 560 1050 560 980 560C958.46 560 936.92 562.56 936.92 560C936.92 557.37 964.11 564.05 980 549.63C1041.21 494.05 1091.11 480.45 1091.11 420C1091.11 368.34 1042.68 338.35 980 325.41C917.12 312.43 904.81 379.25 840 368.15C772.18 356.54 714.74 315.41 714.74 280C714.74 249.3 786.01 271.16 840 235.93C893.29 201.16 929.31 187.36 929.31 140C929.31 93.96 890.5 86.47 840 49.12' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1120 46.67C1082.66 46.67 1045.33 91.42 1045.33 140C1045.33 196.02 1082.66 255.86 1120 255.86C1157.34 255.86 1194.67 196.02 1194.67 140C1194.67 91.42 1157.34 46.67 1120 46.67' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M618.33 560C618.33 540.91 656.44 492.41 700 492.41C754.92 492.41 815.29 541.86 815.29 560C815.29 575.65 757.64 560 700 560C659.16 560 618.33 574.71 618.33 560' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M105.45 140C105.45 121 118.44 105.9 140 105.9C193.54 105.9 201.2 117.27 255.65 140C271.2 146.49 263.9 160.06 280 164.35C346.08 181.94 371.09 149.88 420 183.75C454.6 207.71 447.02 233.11 447.02 280C447.02 308.74 440.15 312.65 420 335C377.05 382.65 342.48 365.76 320.83 420C297.57 478.26 345.23 508.44 330.19 560C324.81 578.44 305.1 560 280 560C210 560 210 560 140 560C124.69 560 109.38 564.07 109.38 560C109.38 555.32 127.05 554.34 140 542.5C203.61 484.34 239.15 491.5 262.5 420C282.01 360.25 259.05 341.42 225.71 280C197.8 228.57 179.28 240.01 140 194.29C119.15 170.01 105.45 165.19 105.45 140' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M29.87 0C29.87 8.89 8.72 30.27 0 30.27C-6.21 30.27 -7.52 7.62 0 0C7.42 -7.52 29.87 -6.24 29.87 0' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 105C1215.17 100.51 1192.8 34.11 1192.8 0C1192.8 -18.39 1226.4 0 1260 0C1330 0 1330 0 1400 0C1409.76 0 1419.53 -4.22 1419.53 0C1419.53 6.15 1411.84 12.95 1400 20.74C1332.08 65.45 1318.77 110.88 1260 105' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1210.32 280C1210.32 229.6 1242.18 177.33 1260 177.33C1276.3 177.33 1278.55 228.83 1278.55 280C1278.55 322.94 1276.02 365.56 1260 365.56C1241.9 365.56 1210.32 323.72 1210.32 280' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M666.94 560C666.94 552.27 682.37 532.64 700 532.64C722.23 532.64 746.67 552.66 746.67 560C746.67 566.34 723.34 560 700 560C683.47 560 666.94 565.95 666.94 560' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1382.74 560C1382.74 522.13 1371.87 470.64 1400 470C1450.5 468.85 1471.49 512.37 1540 556.41C1541.49 557.37 1541.75 559.96 1540 560C1471.75 561.75 1470 560 1400 560C1391.37 560 1382.74 567.13 1382.74 560' stroke='rgba(235%2c 94%2c 40%2c 0.27)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    ${"" /* background-position: 30% 30%; */}
    background-repeat: no-repeat;
    background-repeat: repeat;
    ${"" /* background-position: 50% 0; */}
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
  }

  ${
    "" /* &::after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1237%26quot%3b)' fill='none'%3e%3cpath d='M203.68 505.52L203.58 492.72 216.05 489.81 215.94 477 228.42 474.09 228.31 461.28 240.78 458.37' stroke='rgba(20%2c 51%2c 81%2c 1)' stroke-width='2.76' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='186.56' height='186.56' clip-path='url(%26quot%3b%23SvgjsClipPath1238%26quot%3b)' x='712.79' y='161.68' fill='url(%23SvgjsPattern1239)' transform='rotate(41.6%2c 806.07%2c 254.96)'%3e%3c/rect%3e%3cpath d='M442.14 454.4a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM455.01 463.9a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM467.88 473.4a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66zM480.75 482.91a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM406.89 448.26a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM419.76 457.77a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM432.64 467.27a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM445.51 476.77a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='1.04'%3e%3c/path%3e%3crect width='259.48' height='259.48' clip-path='url(%26quot%3b%23SvgjsClipPath1240%26quot%3b)' x='943.55' y='33.39' fill='url(%23SvgjsPattern1241)' transform='rotate(253.86%2c 1073.29%2c 163.13)'%3e%3c/rect%3e%3cpath d='M919.01 97.12a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM934.91 95.28a5.6 5.6 0 1 0 11.12-1.28 5.6 5.6 0 1 0-11.12 1.28zM950.8 93.45a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM966.69 91.62a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM889.05 116.68a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM904.95 114.85a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM920.84 113.01a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM936.74 111.18a5.6 5.6 0 1 0 11.12-1.29 5.6 5.6 0 1 0-11.12 1.29z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.54' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3ccircle r='85.6191390004179' cx='1147.09' cy='14.49' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/circle%3e%3crect width='251.52' height='251.52' clip-path='url(%26quot%3b%23SvgjsClipPath1242%26quot%3b)' x='1021.72' y='194.3' fill='url(%23SvgjsPattern1243)' transform='rotate(224.08%2c 1147.48%2c 320.06)'%3e%3c/rect%3e%3crect width='250.92' height='250.92' clip-path='url(%26quot%3b%23SvgjsClipPath1244%26quot%3b)' x='-42' y='125.05' fill='url(%23SvgjsPattern1245)' transform='rotate(43.38%2c 83.46%2c 250.51)'%3e%3c/rect%3e%3crect width='107.4' height='107.4' clip-path='url(%26quot%3b%23SvgjsClipPath1246%26quot%3b)' x='1201.16' y='260.72' fill='url(%23SvgjsPattern1247)' transform='rotate(61.76%2c 1254.86%2c 314.42)'%3e%3c/rect%3e%3crect width='268.4' height='268.4' clip-path='url(%26quot%3b%23SvgjsClipPath1248%26quot%3b)' x='-38.02' y='-38.09' fill='url(%23SvgjsPattern1249)' transform='rotate(62.34%2c 96.18%2c 96.11)'%3e%3c/rect%3e%3cpath d='M47.81 445.67999999999995 L65.9 380.74L89.19204155662925 445.5470415566292z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3cpath d='M1142.93 318.84L1151 328.78 1143.08 338.84 1151.15 348.78 1143.22 358.84 1151.3 368.78 1143.37 378.84M1134.93 318.9L1143 328.84 1135.08 338.9 1143.15 348.84 1135.22 358.9 1143.3 368.84 1135.37 378.9' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.83' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1237'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.48' height='8.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1239'%3e%3cpath d='M0 8.48L4.24 0L8.48 8.48' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1238'%3e%3ccircle r='46.64' cx='806.07' cy='254.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.98' height='9.98' patternUnits='userSpaceOnUse' id='SvgjsPattern1241'%3e%3cpath d='M4.99 1L4.99 8.98M1 4.99L8.98 4.99' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1240'%3e%3ccircle r='64.87' cx='1073.29' cy='163.13'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.48' height='10.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1243'%3e%3cpath d='M0 10.48L5.24 0L10.48 10.48' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1242'%3e%3ccircle r='62.88' cx='1147.48' cy='320.06'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.94' height='13.94' patternUnits='userSpaceOnUse' id='SvgjsPattern1245'%3e%3cpath d='M0 13.94L6.97 0L13.94 13.94' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1244'%3e%3ccircle r='62.73' cx='83.46' cy='250.51'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='107.4' height='10.74' patternUnits='userSpaceOnUse' id='SvgjsPattern1247'%3e%3crect width='107.4' height='5.37' x='0' y='0' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/rect%3e%3crect width='107.4' height='5.37' x='0' y='5.37' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1246'%3e%3ccircle r='26.85' cx='1254.86' cy='314.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.2' height='12.2' patternUnits='userSpaceOnUse' id='SvgjsPattern1249'%3e%3cpath d='M6.1 1L6.1 11.2M1 6.1L11.2 6.1' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none' stroke-width='1.11'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1248'%3e%3ccircle r='67.1' cx='96.18' cy='96.11'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  } */
  }
`;


export const LeftSide = styled.div`
  grid-column: leftSide-start / leftSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;

export const RightSide = styled.div`
  grid-column: rightSide-start / rightSide-end;
  grid-row: first-line / last-line;
  background: linear-gradient(
    -180deg,
    rgb(242, 243, 247),
    rgb(242, 223, 247),
    rgb(234, 241, 249),
    rgb(242, 223, 237),
    rgb(242, 223, 227),
    rgb(234, 241, 249)
  );
`;



export const ScrollContainerFlex = styled.div`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background-color: ${colors.secondary.lightest};
    background-color: #0ae;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }
  ${"" /* padding: 2rem 1rem; */}
  width: 100vw;
  height: 100px;
  height: min-content;
  grid-column: full-start/ full-end;
  grid-column: cover-start/ cover-end;
  font-size: 20px;

  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap; // Allow continuing into the white space.
  overflow: auto;
  ${"" /* justify-content: center; */}

  ${respond.pc.min`
  grid-column: full-start/ full-end;
  width: 100%;
  padding: 5rem 1rem; 
 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  `}
`;

// export const ScrollItemFlex = styled.div`
//   border: 2px solid #b85b14;
//   background-color: #fc7307;
//   width: 120px;

//   flex: 0 0 auto;

// `;


export const ScrollCardContainer = styled.div`
  margin: 11.1111vw 5.555555vw;
  margin: 4rem 6rem 4rem 2rem;
  margin: 4rem 2rem 4rem 2rem;
  margin: 13.333333vw 6.6666666vw;
  

  ${respond.pc.min`
   margin: 4rem 2rem;
   margin: 3.90625vw 1.953125vw;
   margin: clamp(2rem,1.953125vw,1.953125vw);
  `}

  transition: all 0.4s;
  &:last-child {
    padding-right: clamp(5rem, 16.5555vw, 16.66666vw);

    ${respond.pc.min`
    padding-right: 0;
    `}
  }
  &:first-child {
    margin-left: clamp(5rem, 16.5555vw, 16.66666vw);

    & > * {
      background-color: ${colors.neutrals.lighter} !important;
    }

    ${respond.pc.min`
    margin: clamp(2rem,1.953125vw,1.953125vw);
    `}
  }
`;




export const ScrollCardItem = styled.div`
  ${"" /* transform: scale(0.9); */}
  white-space: normal;
  flex: 0 0 auto;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  flex-direction: column;
  justify-items: flex-start;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: keep-all;
  width: 12rem;
  width: 33.33333vw;
  padding: 2rem 1rem 3rem;
  padding: 5.5555555vw 2.7777777vw 8.3333333vw;
  padding: 5.5555555vw 2.7777777vw 3.5555555vw;
  border-radius: 15px;
  border-radius: 5vw;
  border-radius: clamp(15px, 5vw, 20px);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.22);
  ${shadows.mixins.neumorphic.original}
  transition: all 0.4s;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .technologies {
    align-self: flex-end;
    margin-top: 1rem;
    margin-top: 3.3333333vw;
    ${"" /* background: lightgray; */}
    width: min-content;
    ${"" /* width: 80%; */}
    padding: 0.4rem 0;
    padding: 1.3333333vw 0;

    display: flex;
    justify-content: flex-end;

    ${respond.pc.min`
      margin-top: 1rem;
      margin-top: 0.9765625vw;
    `}

    height: 1rem;
    & > * {
      font-size: 12px;
      font-size: 4vw;

      ${respond.pc.min`
      font-size: 20px;
      font-size: 1.953125vw;
      `}
    }
    & > * {
      margin: 0 1px;
      margin: 0 0.3333333333vw;
      ${respond.pc.min`
      margin: 0 0.1333333333vw;
      `}
    }
  }
  ${respond.pc.min`
  padding: 2rem 1rem 3rem;
  padding: 1.953125vw 0.9765625vw 0.9296875vw;
  width: 15rem;
  width: clamp(15rem, 14.6484375vw, 14.6484375vw);
  `}
  ${
    "" /* figure {
    &::before {
      content: "";
      display: block;
      height: 40px;
      height: 13.3333333vw;
      width: 40px;
      width: 13.3333333vw;
      border-radius: 50%;
      position: absolute;
      background: white;
      z-index: -1;
      top: 12px;
      top: 4vw;

      left: 6px;
      left: 2vw;
    }
  } */
  }
  .iconTest {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    margin-bottom: 1rem;

    &::before {
      content: "";
      display: block;

      height: 40px;
      height: 13.3333333vw;
      height: 120%;
      width: 40px;
      width: 13.3333333vw;
      width: 120%;
      border-radius: 50%;
      position: absolute;
      ${"" /* background: white; */}
      z-index: -1;
      ${"" /* top: 12px; */}
      ${"" /* top: 4vw; */}

      ${"" /* left: 6px;
      left: 2vw; */}
    }
  }
  i {
    font-size: 4rem;
    font-size: 11.1111111vw;
    line-height: 0;
    ${"" /* margin-right: 0.5rem; */}
    ${"" /* width: min-content; */}
    display: inline-block;
    display: block;
    -webkit-background-clip: text;
    color: transparent;
    color: ${colors.accent.darkest};
    background-image: linear-gradient(
      to right,
      ${colors.accent.lightest},
      ${colors.accent.darkest}
    );

    ${respond.pc.min`
    font-size: 4rem;
    font-size: 3.90625vw;
    `}
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: ${colors.accent.darkest};
    height: 4px;
    height: 1.1111111vw;
    border: none;
    width: 50%;
    left: 0;

    ${respond.pc.min`
     height: 4px;
     height: 0.390625vw;
    `}
  }

  h3 {
    font-size: clamp(10px, 3vw, 3vw);
    font-size: 15px;
    font-size: 3vw;
    font-family: "Rubik Mono One", Cambria, "Times New Roman", Times, sans-serif;
    line-height: 1.5;
    margin-bottom: 0.4rem;
    margin-bottom: 0.390625vw;

    ${respond.pc.min`
    font-size: 15px;
    font-size: 1.46484375vw;
    `}
  }

  p {
    font-size: clamp(10px, 3vw, 30px);
    font-size: 10px;
    font-size: 2.77777777vw;
    text-align: justify;

    ${respond.pc.min`
    font-size: 10px;
    font-size: 0.9765625vw;
    `}
  }

  &:hover {
    background: ${colors.neutrals.lighter};
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.52);
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.highlights.lightest};
  }
  &:active {
    transition: all 0.4s;
    box-shadow: 4px 4px 10px 0px ${colors.shadows.dark},
      -4px -4px 10px 0px ${colors.accent.lightest};
    box-shadow: ${shadows.neumorphic.original};
  }
`;




export const Phone = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  background: #5a32a0;
  background-color: ${colors.accent.ochreFire};
  background-color: ${colors.accent.ochreOxide};
  background-color: ${colors.accent.ochrePale};
`;

const openStyles = css`
  transform: translateX(100px) scale(0.95);
  border-radius: 10vw;
`;

export const Content = styled.main`
  ${"" /* height: 800px; */}
  width: 100%;
  ${"" /* padding: 2rem 1.5rem; */}

  border-radius: 0px;
  overflow: hidden;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s ${(p) => p.open && openStyles};
`;

export const Burger = styled.button`
  position: fixed;
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  top: 2rem;
  left: 2rem;
  z-index: 100;
  background: transparent;
  border: 0;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${"" /* background: red; */}
  top: 50vh;
  transform: translateY(-50%);
`;

export const NavButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  background: transparent;
  color: ${rgba("white", 0.5)};
  &:focus,
  &:hover,
  &:active {
    border: none;
    outline: none;
  }
`;

export const NavIcon = styled.span`
  font-size: 3.5rem;
  color: ${colors.accent.new3};
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
  border: none;
  outline: none;

  &:focus,
  &:active {
    color: red;
  }
`;

export const NavText = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
`;

{
  /* <link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v3.0.3/css/line.css"
/>; */
}
























































export const ScrollContainer = styled.div`
  ${"" /* display: flex;
  grid-row: 5 / span 1; */}

  grid-column: full-start/ full-end;
  font-size: 20px;
  background-color: lime;

  position: relative;
  top: -30px; // Hide the horizontal scrollbar.
  left: 0;
  width: 1000px;
  ${"" /* width: 10vw; */}
  height: calc(100vw);
  height: calc(30vh);
  ${"" /* height: calc(10vh); */}

  overflow: scroll;
  transform: rotate(-90deg);
  transform-origin: center calc(50vh);

  &::-webkit-scrollbar {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }

  &::-webkit-scrollbar-button {
    width: $scrollBarHeight;
    height: $scrollBarHeight;
  }
`;

export const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  padding: 2em;
  width: 100px;
  height: 50px;
  transform: rotate(90deg);
  border: 1px solid #333;
  box-shadow: 3px 3px 6px rgba(#333, 0.3);
  text-align: center;
`;













export const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content min-content 40rem repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(
      8,
      [col-start] minmax(min-content, 12rem) [col-end]
    ) [center-end] minmax(6rem, 1fr)
    [full-end];

  @include respond(large-2) {
    grid-template-rows: 6rem 80vh min-content min-content 40rem repeat(
        3,
        min-content
      );
    grid-template-columns:
      [full-start] minmax(6rem, 1fr) [center-start] repeat(
        8,
        [col-start] minmax(min-content, 12rem) [col-end]
      )
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  @include respond(medium-1) {
    grid-template-rows:
      6rem calc(100vh - 6rem) min-content min-content minmax(15rem, min-content)
      repeat(5, min-content);
  }
`;


export const SampleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr)) [last-col] 35%;
  grid-template-rows: [first-line] repeat(10, auto) [last-line];
`;



export const HorizontalScroll = styled.div`
  $finalHeight: 50px;
  $finalWidth: 3 * $finalHeight;
  $scrollBarHeight: 10px;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: calc(#{$finalHeight} + #{$scrollBarHeight});
  max-height: $finalWidth;
  margin: 0;
  padding-top: $scrollBarHeight;
  background: #abc;
  overflow-y: hidden;
  overflow-x: auto;
  transform: rotate(90deg) translateY(-$finalHeight);
  transform-origin: right top;
  & > div {
    display: block;
    padding: 5px;
    background: #cab;
    transform: rotate(90deg);
    transform-origin: right top;
  }

  padding: $finalHeight 0 0 0;
  & > div {
    width: $finalHeight;
    height: $finalHeight;
    margin: 10px 0;
  }
`;