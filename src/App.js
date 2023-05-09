import logo from "./logo.svg";
import "./App.css";
import SplitPane from "react-split-pane";
import { useEffect, useState } from "react";
import { GreetingsLeft, GreetingsRight } from "./Elements/Greetings";
import {
  Introduction,
  IntroductionLeft,
  IntroductionRight,
} from "./Elements/Introduction";
import { Motto } from "./Elements/Motto";
import { IntroductionDetail } from "./Elements/IntroductionDetail";
import { Interest } from "./Elements/Interest";
import { ContactMe } from "./Elements/ContactMe";
import { Information, InformationDetail } from "./Elements/Information";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeListener);
  });

  console.log("innerWidth", innerWidth);
  console.log("innerWidth", innerHeight);
  return (
    <div>
      
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: innerWidth / 2,
            height: innerHeight,
          }}
        >
          <GreetingsRight />
        </div>
        <div
          style={{
            width: innerWidth / 2,
            height: innerHeight,
            backgroundColor: "#EF775D",
          }}
        >
          <GreetingsLeft />
        </div>
      </div>
      <div style={{ height: innerHeight * 0.2, width: "100%" }}></div>
      <div style={{ display: "flex" }}>
        <div style={{ width: innerWidth / 2, height: innerHeight }}>
          <Information />
        </div>
        <div style={{ width: innerWidth / 2, height: innerHeight }}>
          <InformationDetail />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: innerWidth / 2, height: innerHeight }}>
          <IntroductionLeft />
        </div>
        <div style={{ width: innerWidth / 2, height: innerHeight }}>
          <IntroductionRight />
        </div>
      </div>

      <div
        style={{
          width: innerWidth,
          height: innerHeight,
          backgroundColor: "#EF775D",
        }}
      >
        <Motto />
      </div>
      <div style={{ height: innerHeight * 0.2 }}></div>
      <div style={{ width: innerWidth, height: innerHeight }}>
        <Interest />
      </div>

      <div style={{ width: innerWidth, height: innerHeight }}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
