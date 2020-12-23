import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as doneData from "./doneloading.json";
// import ReactLoading from "react-loading";
// import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
  
export const Loading = (state) => {

    return (
      <div>        
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              <h1>fetching pizza</h1>
                <Lottie options={defaultOptions2} height={120} width={120} />  
            </div>
          </FadeIn>
      </div>
    );
  
}

export default (Loading);
