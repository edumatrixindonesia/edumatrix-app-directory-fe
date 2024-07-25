import React from "react";
import "./PromoHomepage.css"
import promoDesktop from "../../assets/promo_bimbel_terbaik.jpeg";
import promoMoble from "../../assets/Banner July Back to School.jpg";

const PromoHomepage = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      <div className="parent-promo-home">
        <img className="child-promo-home" src={promoDesktop} alt="Promo Bimbel Terbaik" />
      </div>
      {/* MOBILE */}
      <div className="parent-promo-home-mobile">
        <img className="child-promo-home-mobile" src={promoMoble} alt="Promo Bimbel Terbaik" />
      </div>
    </React.Fragment>
  );
};

export default PromoHomepage;
