import React from "react";
import lolosPtnSalma from "../../../assets/success_story/snbt/Salma Nisrina - IPB.png";
import lolosPtnRegina from "../../../assets/success_story/snbt/Regina - UGM.png";
import lolosPtnZaidan from "../../../assets/success_story/snbt/Zaidan - ITB.png";
import lolosPtnSalmaNuriz from "../../../assets/success_story/snbt/Salma Nuriz - UGM.png";
import lolosPtnCharisa from "../../../assets/success_story/snbt/Charisa - UNDIP.png";
import lolosPtnFhariz from "../../../assets/success_story/snbt/Fariz Anugrah - STPN.png";
import Marquee from "react-fast-marquee";
import "./LolosPtn.css";

const LolosPtn = () => {
  return (
    <React.Fragment>
      <div className="super-parent-lolos-ptn">
        <h1 className="title-lolos-ptn">IKUTI KISAH SUKSES MEREKA</h1>
        <div style={{ marginTop: "20px" }}>
          <Marquee gradient={false} speed={100}>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnSalma} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Salma Nisrina</h1>
                <h3 className="desk-lolos-ptn">Lolos Kedokteran - IPB</h3>
              </div>
            </div>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnRegina} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Regina Keshi Ramadhani</h1>
                <h3 className="desk-lolos-ptn">Lolos Biologi - UGM</h3>
              </div>
            </div>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnZaidan} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Zaidan Shafiq Abid</h1>
                <h3 className="desk-lolos-ptn">Lolos Teknologi Industri - ITB</h3>
              </div>
            </div>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnSalmaNuriz} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Salma Fitria Nuriz</h1>
                <h3 className="desk-lolos-ptn">Lolos Perencanaan Kota & Wilayah - UGM</h3>
              </div>
            </div>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnCharisa} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Charisa Qolby El Karomy</h1>
                <h3 className="desk-lolos-ptn">Lolos Bahasa Asing - UNDIP</h3>
              </div>
            </div>
            <div className="parent-lolos-ptn">
              <img src={lolosPtnFhariz} className="image-lolos-ptn" />
              <div className="parent-name-lolos-ptn">
                <h1 className="name-lolos-ptn">Fhariz Anugrah</h1>
                <h3 className="desk-lolos-ptn">Lolos - STPN</h3>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LolosPtn;
