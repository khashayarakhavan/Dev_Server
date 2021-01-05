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
    ${'' /* background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='4000' height='2500' preserveAspectRatio='none' viewBox='0 0 4000 2500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1105%26quot%3b)' fill='none'%3e%3crect width='4000' height='2500' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M0%2c1216.948C225.853%2c1204.695%2c440.145%2c1096.293%2c605.064%2c941.499C755.224%2c800.558%2c816.08%2c596.466%2c872.183%2c398.313C921.325%2c224.747%2c919.68%2c49.41%2c908.62%2c-130.64C896.6%2c-326.309%2c942.097%2c-557.425%2c804.872%2c-697.426C667.277%2c-837.805%2c431.557%2c-774.509%2c238.965%2c-813.841C66.134%2c-849.137%2c-93.908%2c-936.585%2c-269.19%2c-916.775C-464.564%2c-894.694%2c-654.611%2c-824.717%2c-803.282%2c-696.048C-965.2%2c-555.914%2c-1149.526%2c-377.685%2c-1139.22%2c-163.795C-1128.775%2c52.965%2c-836.861%2c143.737%2c-753.169%2c343.961C-664.773%2c555.439%2c-798.509%2c835.978%2c-648.782%2c1009.525C-497.403%2c1184.987%2c-231.398%2c1229.502%2c0%2c1216.948' fill='%230a1d31'%3e%3c/path%3e%3cpath d='M4000 4196.197C4318.842 4200.244 4646.347 4084.34 4876.083 3863.2110000000002 5091.17 3656.182 5122.968 3335.4880000000003 5195.161 3045.812 5255.229 2804.7889999999998 5253.5779999999995 2566.979 5261.007 2318.695 5270.131 2013.796 5405.624 1680.826 5243.742 1422.291 5080.0830000000005 1160.919 4743.301 1054.355 4438.8 1005.585 4154.44 960.0409999999999 3888.428 1101.029 3606.562 1160.075 3295.531 1225.23 2937.1040000000003 1162.902 2696.549 1370.553 2448.95 1584.284 2317.1440000000002 1933.45 2332.117 2260.195 2346.3469999999998 2570.718 2632.782 2782.975 2773.965 3059.9120000000003 2907.1549999999997 3321.17 2923.011 3641.816 3138.093 3841.1530000000002 3370.701 4056.734 3682.88 4192.1720000000005 4000 4196.197' fill='%2312375d'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1105'%3e%3crect width='4000' height='2500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */}
    background-color: ${colors.neutrals.light};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1237%26quot%3b)' fill='none'%3e%3cpath d='M203.68 505.52L203.58 492.72 216.05 489.81 215.94 477 228.42 474.09 228.31 461.28 240.78 458.37' stroke='rgba(20%2c 51%2c 81%2c 1)' stroke-width='2.76' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='186.56' height='186.56' clip-path='url(%26quot%3b%23SvgjsClipPath1238%26quot%3b)' x='712.79' y='161.68' fill='url(%23SvgjsPattern1239)' transform='rotate(41.6%2c 806.07%2c 254.96)'%3e%3c/rect%3e%3cpath d='M442.14 454.4a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM455.01 463.9a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM467.88 473.4a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66zM480.75 482.91a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM406.89 448.26a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM419.76 457.77a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM432.64 467.27a5.6 5.6 0 1 0 9.01 6.65 5.6 5.6 0 1 0-9.01-6.65zM445.51 476.77a5.6 5.6 0 1 0 9.01 6.66 5.6 5.6 0 1 0-9.01-6.66z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='1.04'%3e%3c/path%3e%3crect width='259.48' height='259.48' clip-path='url(%26quot%3b%23SvgjsClipPath1240%26quot%3b)' x='943.55' y='33.39' fill='url(%23SvgjsPattern1241)' transform='rotate(253.86%2c 1073.29%2c 163.13)'%3e%3c/rect%3e%3cpath d='M919.01 97.12a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM934.91 95.28a5.6 5.6 0 1 0 11.12-1.28 5.6 5.6 0 1 0-11.12 1.28zM950.8 93.45a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM966.69 91.62a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM889.05 116.68a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM904.95 114.85a5.6 5.6 0 1 0 11.13-1.29 5.6 5.6 0 1 0-11.13 1.29zM920.84 113.01a5.6 5.6 0 1 0 11.13-1.28 5.6 5.6 0 1 0-11.13 1.28zM936.74 111.18a5.6 5.6 0 1 0 11.12-1.29 5.6 5.6 0 1 0-11.12 1.29z' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.54' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3ccircle r='85.6191390004179' cx='1147.09' cy='14.49' fill='rgba(253%2c 165%2c 15%2c 1)'%3e%3c/circle%3e%3crect width='251.52' height='251.52' clip-path='url(%26quot%3b%23SvgjsClipPath1242%26quot%3b)' x='1021.72' y='194.3' fill='url(%23SvgjsPattern1243)' transform='rotate(224.08%2c 1147.48%2c 320.06)'%3e%3c/rect%3e%3crect width='250.92' height='250.92' clip-path='url(%26quot%3b%23SvgjsClipPath1244%26quot%3b)' x='-42' y='125.05' fill='url(%23SvgjsPattern1245)' transform='rotate(43.38%2c 83.46%2c 250.51)'%3e%3c/rect%3e%3crect width='107.4' height='107.4' clip-path='url(%26quot%3b%23SvgjsClipPath1246%26quot%3b)' x='1201.16' y='260.72' fill='url(%23SvgjsPattern1247)' transform='rotate(61.76%2c 1254.86%2c 314.42)'%3e%3c/rect%3e%3crect width='268.4' height='268.4' clip-path='url(%26quot%3b%23SvgjsClipPath1248%26quot%3b)' x='-38.02' y='-38.09' fill='url(%23SvgjsPattern1249)' transform='rotate(62.34%2c 96.18%2c 96.11)'%3e%3c/rect%3e%3cpath d='M47.81 445.67999999999995 L65.9 380.74L89.19204155662925 445.5470415566292z' fill='rgba(20%2c 51%2c 81%2c 1)'%3e%3c/path%3e%3cpath d='M1142.93 318.84L1151 328.78 1143.08 338.84 1151.15 348.78 1143.22 358.84 1151.3 368.78 1143.37 378.84M1134.93 318.9L1143 328.84 1135.08 338.9 1143.15 348.84 1135.22 358.9 1143.3 368.84 1135.37 378.9' stroke='rgba(253%2c 165%2c 15%2c 1)' stroke-width='2.83' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1237'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.48' height='8.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1239'%3e%3cpath d='M0 8.48L4.24 0L8.48 8.48' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1238'%3e%3ccircle r='46.64' cx='806.07' cy='254.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.98' height='9.98' patternUnits='userSpaceOnUse' id='SvgjsPattern1241'%3e%3cpath d='M4.99 1L4.99 8.98M1 4.99L8.98 4.99' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1240'%3e%3ccircle r='64.87' cx='1073.29' cy='163.13'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.48' height='10.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1243'%3e%3cpath d='M0 10.48L5.24 0L10.48 10.48' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1242'%3e%3ccircle r='62.88' cx='1147.48' cy='320.06'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.94' height='13.94' patternUnits='userSpaceOnUse' id='SvgjsPattern1245'%3e%3cpath d='M0 13.94L6.97 0L13.94 13.94' stroke='rgba(235%2c 94%2c 40%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1244'%3e%3ccircle r='62.73' cx='83.46' cy='250.51'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='107.4' height='10.74' patternUnits='userSpaceOnUse' id='SvgjsPattern1247'%3e%3crect width='107.4' height='5.37' x='0' y='0' fill='rgba(235%2c 94%2c 40%2c 1)'%3e%3c/rect%3e%3crect width='107.4' height='5.37' x='0' y='5.37' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1246'%3e%3ccircle r='26.85' cx='1254.86' cy='314.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.2' height='12.2' patternUnits='userSpaceOnUse' id='SvgjsPattern1249'%3e%3cpath d='M6.1 1L6.1 11.2M1 6.1L11.2 6.1' stroke='rgba(20%2c 51%2c 81%2c 1)' fill='none' stroke-width='1.11'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1248'%3e%3ccircle r='67.1' cx='96.18' cy='96.11'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    ${'' /* opacity: 0.5; */}
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
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