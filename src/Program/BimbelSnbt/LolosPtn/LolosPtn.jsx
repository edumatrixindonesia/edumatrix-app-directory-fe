import React from "react";
import lolosPtnSalma from "../../../assets/success_story/snbt/salma_kedokteran_ipb_snbt.png";
import lolosPtnRegina from "../../../assets/success_story/snbt/regina_biologi_ugm_snbt.png";
import lolosPtnZaidan from "../../../assets/success_story/snbt/zaidan_tek_industri_itb.png";
import "./LolosPtn.css";

const LolosPtn = () => {
  return (
    <React.Fragment>
      <div className="super-parent-lolos-ptn">
        <h1 className="title-lolos-ptn">ALUMNI TERBAIK KAMI</h1>
        <div className="parent-lolos-ptn">
          <img src={lolosPtnSalma} alt="" className="img-lolos-ptn" />
          <img src={lolosPtnRegina} alt="" className="img-lolos-ptn" />
          <img src={lolosPtnZaidan} alt="" className="img-lolos-ptn" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LolosPtn;
