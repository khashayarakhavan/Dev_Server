//Framework
import React, { useState, useEffect } from "react";
//Styles
import {Button, Loader} from './loadingButton.styles';


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
    <Button
      onClick={() => handleSubmit()}
      // onSubmit={() => handleSubmit()}
      // type="submit"
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
    </Button>
  );
};

export default LoadingButton;