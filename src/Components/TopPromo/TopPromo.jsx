import React from "react";
import "./TopPromo.css";
import designPromo from "../../assets/promosi/top_promo/supercamp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const TopPromo = () => {
  return (
    <div className="floating-banner">
      <div className="banner-content">
        <img src={designPromo} alt="" className="design-promo-top" />
        <div className="parent-text-promo">
          <span className="promo-text">Buruan Daftar Kursi Terbatas</span>
          <span className="promo-text-2">Sampai Februari 2025</span>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20Supercamp%20yang%20ada%20di%20Edumatrix."
          className="cta-button"
        >
          Daftar Sekarang
          <span class="material-symbols-outlined icon-open">open_in_new</span>
        </a>
      </div>
    </div>
  );
};

export default TopPromo;
