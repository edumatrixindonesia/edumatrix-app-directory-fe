import React from "react";
import "./PromoBumn.css";
import imgpromoBumn from "../../../assets/promosi/bumn/prmo-bumn-5-1200x675.jpeg"

const PromoBumn = () => {
  return (
    <React.Fragment>
      <div className="parent-promo-bumn">
        <img className="child-promo-bumn" src={imgpromoBumn} />
      </div>
    </React.Fragment>
  );
};

export default PromoBumn;
