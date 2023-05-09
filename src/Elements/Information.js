import nameSticker from "../Image/name.png";
import numberSticker from "../Image/number.png";
import numberStickerBefore from "../Image/initial.png";
import ClassSticker from "../Image/class.png";
import ClassStickerBefore from "../Image/ClassBefore.png";
import AnimalSticker from "../Image/Animal.png";
import AnimalStickerBefore from "../Image/AnimalBefore.png";
import MBTISticker from "../Image/ENFP.png";
import MBTIStickerBefore from "../Image/ENFPBefore.png";
import PhotoSticker from "../Image/Photo.png";
import PhotoStickerBefore from "../Image/PhotoBefore.png";

import { useState } from "react";
export function Information() {
  const text1 = "나의 이름은";
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
            marginBottom: 10,
          }}
        >
          {text1}
        </div>
        <div>
          <img src={nameSticker} style={{ width: 457.48, heigt: 150.93 }} />
        </div>
        <div
          style={{
            marginTop: 10,
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

export function InformationDetail() {
  const [numberVis, setNumberVis] = useState(false);
  const [classnum, setClassnum] = useState(false);
  const [animal, setAnimal] = useState(false);
  const [mbti, setMbti] = useState(false);
  const [photo, setPhoto] = useState(false);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        paddingLeft: "10%",
        paddingTop: "10%",
      }}
    >
      <div style={{fontFamily: "GabiaHeuldot", marginBottom: 30,}}>* 스티커에 마우스를 올려 내용을 확인해보세요.</div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <div
          style={{
            fontSize: 50,
            color: "white",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",

            marginRight: 30,
          }}
        >
          학번
        </div>
        <div>
          <img
            src={numberVis ? numberSticker : numberStickerBefore}
            style={{ width: 355, heigt: 94 }}
            onMouseOver={() => {
              setNumberVis(true);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <div
          style={{
            fontSize: 50,
            color: "white",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",

            marginRight: 30,
          }}
        >
          오픈소스
        </div>
        <div>
          <img
            src={classnum ? ClassSticker : ClassStickerBefore}
            style={{ width: 355.62, heigt: 94 }}
            onMouseOver={() => {
              setClassnum(true);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <div
          style={{
            fontSize: 50,
            color: "white",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",

            marginRight: 30,
          }}
        >
          MBTI
        </div>
        <div>
          <img
            src={mbti ? MBTISticker : MBTIStickerBefore}
            style={{ width: 296, heigt: 65 }}
            onMouseOver={() => {
              setMbti(true);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <div
          style={{
            fontSize: 50,
            color: "white",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",
            marginRight: 30,
          }}
        >
          애완동물
        </div>
        <div>
          <img
            src={animal ? AnimalSticker : AnimalStickerBefore}
            style={{ width: 296, heigt: 65 }}
            onMouseOver={() => {
              setAnimal(true);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <div
          style={{
            fontSize: 50,
            color: "white",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
            fontWeight: "bold",
            fontFamily: "Inter",
            marginRight: 30,
          }}
        >
          사진
        </div>
        <div>
          <img
            src={photo ? PhotoSticker : PhotoStickerBefore}
            style={{ width: 288, heigt: 64 }}
            onMouseOver={() => {
              setPhoto(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
