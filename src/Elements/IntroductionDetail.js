import blog from "../Image/blog2.png";
import blog2 from "../Image/blog3.png";
import github from "../Image/github.png";
export function IntroductionDetail() {
  const text =
    "'허파에 바람찼어' 가사에서 ​바람찬 허파라는 닉네임을 사용하게 되었습니다.\n해당 닉네임의 깃허브와 네이버 블로그를 운영하고 있습니다\n​지난 3월부터 일상과, 영화 리뷰, 간단한 생각 등을 기록하고 있습니다. ";
  return (
    <div
      style={{
        backgroundColor: "#EF775D",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          whiteSpace: "pre-line",
          fontSize: 35,
          color: "white",
          padding: 30,
          fontFamily: "GabiaHeuldot",
          fontWeight: "bold",
          lineHeight: 1.3,
        }}
      >
        {text}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={blog} style={{ width: "45%", marginRight: "5%" }} />
        <img src={github} style={{ width: "45%" }} />
      </div>
    </div>
  );
}
