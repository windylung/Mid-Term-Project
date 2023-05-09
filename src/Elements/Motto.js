import mottoSticker from "../Image/motto.png";
import cambodia from "../Image/cambodia.jpeg";
import everland from "../Image/Everland.jpeg";
import skt from "../Image/Skt.jpg";
import { useState } from "react";
export function Motto() {

  const text = "나의 모토는";
  const [cambodiaVisable,setCambodiaVisable] = useState(false);
  const [everlandVisable,setEverlandVisable] = useState(false);
  const [sktVisable,setSktVisable] = useState(false);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5%",
        }}
      >
        
        <img
          src={skt}
          style={{
            width: "20%",
            // height: window.innerWidth * 0.2,
            borderRadius: 300,
            backgroundColor: "red",
            marginRight: 20,
            marginLeft: 20,
          }}
        ></img>
        <img
          onMouseOver={()=>{}}
          src={cambodia}
          style={{
            width: "20%",
            // height: window.innerWidth * 0.2,
            borderRadius: 300,
            backgroundColor: "red",
            marginRight: 20,
            marginLeft: 20,
          }}
        ></img>
        <img
          src={everland}
          style={{
            width: "20%",
            // height: window.innerWidth * 0.2,
            borderRadius: 300,
            marginRight: 20,
            marginLeft: 20,
          }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40%",
        }}
      >
        <div
          style={{
            fontSize: 60,
            color: "white",
            WebkitTextStrokeWidth: 1.6,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",
          }}
        >
          {text}
        </div>
        <img src={mottoSticker} style={{ width: 457, marginLeft: 20 }}></img>
      </div>
    </div>
  );
}
