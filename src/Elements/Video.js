import YouTube from 'react-youtube';
export function Video() {
    
  return (
    <div style={{backgroundColor: "#EF775D", width: '100%', height: '100%', display: "flex",
    // justifyContent: "center",
    alignItems: "center"}}>
{/* 
        <div onMouseOver={() => }>

        </div> */}
      <YouTube videoId="3tHkKDZ9c4Y" style={{width: '20%'}}/>
      <YouTube videoId="CTTPoFZ1XZg" style={{width: '20%'}}/>
      <YouTube videoId="hArkMpeZk3g" style={{width: '20%'}}/>
    </div>
  );
}
