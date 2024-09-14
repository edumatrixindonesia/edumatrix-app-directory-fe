import React from "react";
import "./SistemBelajarToefl.css";
import online from "../../../assets/sistem_belajar/zoom.png";
import offline from "../../../assets/sistem_belajar/offline.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const SistemBelajarToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <h1 className="super-title-sistem-belajar">{t("sistemBelajar.title")}</h1>
      <div className="flip-container">
        <div className="flip-box">
          <div className="flip-box-front">
            <img src={online} alt="" className="icon-sistem-belajar" />
            <div className="parent-desk-online">
              <h1 className="title-sistem-belajar">ONLINE</h1>
              <p className="desk-sistem-belajar">{t("sistemBelajar.desk_1")}</p>
              <p className="desk-sistem-belajar-selengkapnya">
                {t("sistemBelajar.link")}
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
          <div className="flip-box-back">
            <a
              href={t("sistemBelajar.ctaOn")}
              className="btn-regist-now-sistem-belajar"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-front">
            <img src={offline} alt="" className="icon-sistem-belajar" />
            <div className="parent-desk-online">
              <h1 className="title-sistem-belajar">OFFLINE</h1>
              <p className="desk-sistem-belajar">{t("sistemBelajar.desk_2")}</p>
              <p className="desk-sistem-belajar-selengkapnya">
                {t("sistemBelajar.link")}
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
          <div className="flip-box-back">
            <a
              href={t("sistemBelajar.ctaOff")}
              className="btn-regist-now-sistem-belajar"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SistemBelajarToefl;
