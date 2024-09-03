import React from "react";
import promoSnbt from "../../../assets/promosi/snbt/promo masuk ptn.jpeg"
import "./PromoSnbt.css"

const PromoSnbt = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className="parent-promo-snbt">
        <img
          className="child-promo-snbt"
          src={promoSnbt}
          alt="Promo Bimbel SNBT Terbaik"
        />
      </div>
    </React.Fragment>
  );
};

export default PromoSnbt;
