import YouTube from "react-youtube";
export function Video() {
  return (
    <div
      style={{
        backgroundColor: "#EF775D",
        width: "100%",
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <YouTube
        videoId="3tHkKDZ9c4Y"
        opts={{
          width: window.innerWidth * 0.3,
          height: (360 / 640) * window.innerWidth * 0.3,
        }}
      />
      <YouTube
        videoId="CTTPoFZ1XZg"
        opts={{
          width: window.innerWidth * 0.3,
          height: (360 / 640) * window.innerWidth * 0.3,
        }}
      />
      <YouTube
        videoId="hArkMpeZk3g"
        opts={{
          width: window.innerWidth * 0.3,
          height: (360 / 640) * window.innerWidth * 0.3,
        }}
      />
      
    </div>
  );
}
