import { useState } from "react";
import nameSticker from "../Image/Group.png";
import blog from "../Image/blog.png";
import github from "../Image/github.png";
export function IntroductionLeft() {
  const text1 = "나의 닉네임은";
  const text2 = "이다";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div>
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
          {text1}
        </div>
        <div>
          <img src={nameSticker} style={{ width: 457.48, heigt: 150.93 }} />
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 60,
            color: "white",
            WebkitTextStrokeWidth: 1.6,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",
          }}
        >
          {text2}
        </div>
      </div>
    </div>
  );
}

export function IntroductionRight() {
  const [blogVis, setBlogVis] = useState(false);
  const [githubVis, setGithubVis] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <div
        style={{
          width: "80%",
          marginRight: 20,
          marginLeft: 20,
          textAlign: "center",
          fontWeight: "bolder",
          fontFamily: "GabiaHeuldot",
          marginBottom: 40
        }}
      >
        <img
          src={blog}
          onMouseOver={() => setBlogVis(true)}
          onMouseOut={() => setBlogVis(false)}
          // onClick={() => {}}
          style={{
            width: "100%",
            // borderRadius: 300,
            marginBottom: 20,
          }}
        />
        {blogVis ? "바람찬 허파 네이버 블로그" : null}
      </div>
      <div
        style={{
          width: "80%",
          marginRight: 20,
          marginLeft: 20,
          textAlign: "center",
          fontWeight: "bolder",
          fontFamily: "GabiaHeuldot",
        }}
      >
        <img
          src={github}
          onMouseOver={() => setGithubVis(true)}
          onMouseOut={() => setGithubVis(false)}
          // onClick={() => {}}
          style={{
            width: "100%",

            marginBottom: 20,
          }}
        />
        {githubVis ? "바람찬 허파 깃허브" : null}
      </div>
    </div>
  );
}
