import React from "react";
import "./PromoLpdp.css"
import promoLpdpDesktop from "../../../assets/promosi/lpdp/promo_LPDP_WEB.jpg"
import promoLpdpMobile from "../../../assets/promosi/lpdp/promo_LPDP_Mobile.jpg"

const PromoLpdp = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className="parent-promo-home">
        <img className="child-promo-home" src={promoLpdpDesktop} alt="Promo Bimbel LPDP" />
      </div>
      {/* MOBILE */}
      <div className="parent-promo-home-mobile">
        <img className="child-promo-home-mobile" src={promoLpdpMobile} alt="Promo Bimbel LPDP" />
      </div>
    </React.Fragment>
  );
};

export default PromoLpdp;
