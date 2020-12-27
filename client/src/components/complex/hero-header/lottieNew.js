import React, { useState } from "react";
import Lottie from "lottie-web-react";
// import * as lottieCreateRobot from "../assets/Lottie/createRobot";
import * as lottieCreateRobot from "../../../assets/Lottie/createRobot";
// let watchAnimationData = require("./stopwatch.json");
const renderer = "svg";
const rendererSettings = {
  preserveAspectRatio: "xMinYMin slice",
};

function MyAnimation() {
  const [playingState, setPlayingState] = useState("play");
  const [autoplay, setAutoplay] = useState(false);
  const [loop, setLoop] = useState(true);
  const [path, setPath] = useState(
    "https://assets2.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"
  );
//   const [animationData, setAnimationData] = useState(watchAnimationData);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);
  return (
    <Lottie
      options={{
        renderer: renderer,
        loop: loop,
        autoplay: autoplay,
        // path: path,
        animationData: lottieCreateRobot.default,
        rendererSettings: rendererSettings,
      }}
      playingState={playingState}
      speed={speed}
      direction={direction}
    />
  );
}
export default MyAnimation;
