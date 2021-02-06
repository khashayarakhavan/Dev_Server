//Framework
import React, { useState, useEffect } from "react";
//Styles
import {Button, Loader, Inner} from './loadingButton.styles';


const LoadingButton = ({isError, isComplete, isLoading, handleSubmit, toggleIsComplete}) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isComplete, setIsComplete] = useState(isCompletes);
  // const [isError, setIsError] = useState(isErrors);
  
  useEffect(() => {  
    if(isComplete === true) setTimeout(() => {
      console.log("I was called from UseEffect loadingButton");
        toggleIsComplete();
      }, 4000);
  }, [isComplete]);


  //LEGACY
  // const handleClick = async () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setIsComplete(true);
  //     setTimeout(() => {
  //       setIsComplete(false);
  //     }, 4000);
  //   }, 5000);
  // };

  // const handleClick = async () => {
  //   try {
  //     setIsLoading(true);
      
  //   } catch(e) {
  //     console.log('oops, we hit an error!', e);
      
  //   }
  // };

  return (
    <div className="buttons">
      <Button
        className="blob-btn"
        isComplete={isComplete}
        isError={isError}
        disabled={isLoading || isComplete}
      >
        {!isComplete && !isLoading && "mailMe"}
        {isComplete && !isError && "Tnx😊 I'll res ASAP"}
        {isComplete && isError && "Oops☹️ plz try again."}
        {!isComplete && isLoading && (
          <>
            Mailing
            <Loader />
          </>
        )}
        <Inner
          className="blob-btn__inner"
          isComplete={isComplete}
          isError={isError}
          disabled={isLoading || isComplete}
        >
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </Inner>
      </Button>
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
  // return (
  //   <Button
  //     // onClick={() => handleSubmit()}
  //     // onSubmit={() => handleSubmit()}
  //     // type="submit"
  //     isComplete={isComplete}
  //     isError={isError}
  //     disabled={isLoading || isComplete}
  //   >
  //     {!isComplete && !isLoading && "mailMe"}
  //     {isComplete && !isError && "Tnx😊 I'll res ASAP"}
  //     {isComplete && isError && "Oops☹️ plz try again."}
  //     {!isComplete && isLoading && (
  //       <>
  //         Mailing
  //         <Loader />
  //       </>
  //     )}
  //   </Button>
  // );
};

export default LoadingButton;