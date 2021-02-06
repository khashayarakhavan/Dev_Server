//Framework
import React, { useState, useEffect } from "react";
//Styles
import {
  BlobBtn,
  BlobBtnInner,
  BlobBtnBlobs,
  BlobBtnBlob,
} from "./loadingButtonBlobs.styles";

import "./blobButton.css";


const LoadingButtonBlobs = () => {
  return (
    <div class="buttons">
      <button class="blob-btn">
        its mine
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <br />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

// const LoadingButtonBlobs = () => {
//   return (
//     <div className="buttons">
//       <BlobBtn className="blob-btn__inner">
//         its mine
//         <BlobBtnInner className="blob-btn__inner">
//           <BlobBtnBlobs className="blob-btn__blobs">
//             <BlobBtnBlob className="blob-btn__blob" />
//             <BlobBtnBlob className="blob-btn__blob" />
//             <BlobBtnBlob className="blob-btn__blob" />
//             <BlobBtnBlob className="blob-btn__blob" />
//           </BlobBtnBlobs>
//         </BlobBtnInner>
//       </BlobBtn>
//       <br />

//       <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur
//               in="SourceGraphic"
//               result="blur"
//               stdDeviation="10"
//             ></feGaussianBlur>
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
//               result="goo"
//             ></feColorMatrix>
//             <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// };

export default LoadingButtonBlobs;