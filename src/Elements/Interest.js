import InterestSticker from "../Image/Interest.png";
import floppy from "../Image/Floppy.jpeg";
import floppyAward from "../Image/floppy2.jpeg";
import orihamgae from "../Image/OriHamgae.png";
import orihamgaeAward from "../Image/OriHamgae2.jpeg";
import { useState } from "react";

export function Interest() {
  const text = "나의 분야는";
  const [floppyVis, setFloppyVis] = useState(false);
  const [floppyAwardVis, setfloppyAwardVis] = useState(false);
  const [orihamgaeVis, setorihamgaeVis] = useState(false);
  const [orihamgaeAwardVis, setorihamgaeAwardVis] = useState(false);

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
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={floppy}
            onMouseOver={() => setFloppyVis(true)}
            onMouseOut={() => setFloppyVis(false)}
            // onClick={() => {}}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
            }}
          />
          {floppyVis ? "단국대 경소톤 FLOPPY" : null}
        </div>

        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={floppyAward}
            onMouseOver={() => setfloppyAwardVis(true)}
            onMouseOut={() => setfloppyAwardVis(false)}
            // onClick={() => {}}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
            }}
          ></img>
          {floppyAwardVis ? "경소톤 우수상 수상" : null}
        </div>
        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={orihamgae}
            onMouseOver={() => setorihamgaeVis(true)}
            onMouseOut={() => setorihamgaeVis(false)}
            // onClick={() => {}}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
              
            }}
          ></img>
          {orihamgaeVis ? "가정폭력 가정 대상 어플리케이션\n '오리함께' 스토어 업로드" : null}
        </div>
        <div
          style={{
            width: "20%",
            marginRight: 20,
            marginLeft: 20,
            textAlign: "center",
            fontWeight: "bolder",
            fontFamily: "GabiaHeuldot",
            fontSize: 20,
            whiteSpace: "pre-line",
            lineHeight: 1.3
          }}
        >
          <img
            src={orihamgaeAward}
            onMouseOver={() => setorihamgaeAwardVis(true)}
            onMouseOut={() => setorihamgaeAwardVis(false)}
            // onClick={() => {}}
            style={{
              width: "100%",
              borderRadius: 300,
              marginBottom: 20,
              
            }}
          ></img>
          {orihamgaeAwardVis ? "현대오토에버 배리어프리\n앱 개발 공모전" : null}
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
        <img
          src={InterestSticker}
          style={{ width: 457, marginLeft: -20 }}
        ></img>
      </div>
    </div>
  );
}
