//Framework
import React, { useState, useEffect } from "react";
//Styles
import {Button, Loader, Inner, RequestStatusColor } from './loadingButton.styles';
//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Textfit } from "react-textfit";
import { CSSTransition, TransitionGroup, Transition } from "react-transition-group";
import uuid from "uuid";

import "./styles.css";


const duration = 300;

const defaultStyle = {
  // transition: `opacity ${duration}ms ease-in-out`,
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  // padding: 20,

  display: "inline-block",
  // background: "#8787d8",
};

const transitionStyles = {
  entering: { opacity: 1, background: "" },
  entered: { opacity: 1, background: "" },
  exiting: {
    opacity: 1,
    color: "",
    transform: "translateY(10px)",
  },
  exited: {
    opacity: 1,
    color: "",
    transform: "translateY(-40px) translateX(20px) ",
  },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <FontAwesomeIcon icon={faPaperPlane} style={{ color: "" }} />
        <FontAwesomeIcon icon={faDownload} style={{ color: "" }} />
      </div>
    )}
  </Transition>
);




const LoadingButton = ({isError, isComplete, isLoading, handleSubmit, toggleIsComplete}) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isComplete, setIsComplete] = useState(isCompletes);
  const [show, setShow] = useState(!isLoading);
  
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
        <Fade in={!isComplete && !isLoading} />
        {/* {!isComplete && !isLoading && (
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "" }} />
        )} */}

        {!isComplete && !isLoading && "mailMe"}
        {isComplete && !isError && (
          <div style={{ width: `100%`}}>
          
            😊 I'll res ASAP
          </div>
        )}
        {isComplete && isError && (
          <div style={{ width: `100%`, textAlign: "center" }}>
            <Textfit mode="single" forceSingleModeWidth={true} max={"12"}>
              <RequestStatusColor isComplete={isComplete} isError={isError}>
                Ooops
              </RequestStatusColor>
              ☹️ plz try again.
            </Textfit>
          </div>
        )}

        {/* {isComplete && isError && "Oops☹️ plz try again."} */}
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
      {/* <br /> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
      </svg> */}
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