import ET from "../Image/ET.png";
import blogIcon from "../Image/blogIcon.png";
import githubIcon from "../Image/github-mark.png";
export function ContactMe() {
  const text = "Contact Me";

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

        <div style={{ fontSize: 20, marginBottom: 10, }}>jisoolee1126@dankook.ac.kr</div>
        <div style={{ fontSize: 20, marginBottom: 20}}>@2_tothenth_power</div>

        <div style={{display: "flex"}}>
          <img
            src={blogIcon}
            style={{ width: 40, marginRight: 20}}
            onClick={() => window.open("https://blog.naver.com/windylung")}
          ></img>

          <img
            src={githubIcon}
            style={{ width: 40, marginRight: 20}}
            onClick={() => window.open("https://blog.naver.com/windylung")}
          ></img>
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
