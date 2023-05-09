import ET from "../Image/ET.png";
export function ContactMe() {
  const text = "Contact Me";
  const url = "https://blog.naver.com/windylung";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div style={{ width: "50%", paddingLeft: 20 }}>
        <div
          style={{
            fontSize: 60,
            color: "white",
            WebkitTextStrokeWidth: 1.6,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",
            marginBottom: 20,
          }}
        >
          {text}
        </div>

        <div style={{ fontSize: 20 }}>jisoolee1126@dankook.ac.kr</div>
        <div style={{ fontSize: 20 }}>@2_tothenth_power</div>
        <div style={{ fontSize: 20 }}>
          https://blog.naver.com/windylung
        </div>
        <div style={{ fontSize: 20 }}>
        https://github.com/windylung
        </div>
      </div>
      <div
        style={{
          width: "30%",
          height: "100%",
        }}
      >
        <img src={ET} style={{ height: "100%" }}></img>
      </div>
    </div>
  );
}
