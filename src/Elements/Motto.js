import mottoSticker from "../Image/motto.png";
import cambodia from "../Image/cambodia.jpeg";
import everland from "../Image/Everland.jpeg";
import skt from "../Image/Skt.jpg";
import { useState } from "react";
export function Motto() {
  const text = "나의 모토는";
  const [cambodiaVis, setCambodiaVis] = useState(false);
  const [everlandVis, setEverlandVis] = useState(false);
  const [sktVis, setSktVis] = useState(false);
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
      
        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            color: "white",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={skt}
            onMouseOver={() => setSktVis(true)}
            onMouseOut={() => setSktVis(false)}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
            }}
          />
          {sktVis ? "SKT DEVOCEAN YOUNG\n라이브 방송 진행" : null}
        </div>

        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            color: "white",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={cambodia}
            onMouseOver={() => setCambodiaVis(true)}
            onMouseOut={() => setCambodiaVis(false)}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
            }}
          />
          {cambodiaVis ? "WFK KOICA 환경 봉사단\n캄보디아 현장 답사" : null}
        </div>
        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            color: "white",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={everland}
            onMouseOver={() => setEverlandVis(true)}
            onMouseOut={() => setEverlandVis(false)}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
            }}
          />
          {everlandVis ? "에버랜드 캐스트\n입문 교육 명찰" : null}
        </div>
      
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
