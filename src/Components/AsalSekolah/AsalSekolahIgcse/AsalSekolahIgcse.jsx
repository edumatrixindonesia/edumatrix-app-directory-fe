import React from 'react'
import logoSekolah from "../../../assets/scroll.png";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const AsalSekolahIgcse = () => {
  const { t } = useTranslation();
  return (
    <div className="container-asal-sekolah">
    <div className="parent-title-asal-sekolah">
      <h1 className="title-asal-sekolah">{t("asalSekolahIgcse.title")}</h1>
      <div className="parent-card-asalsekolah">
        <div className="marquee">
          <div className="track">
            <div className="content">
              <img className="logo-school" src={logoSekolah} alt="Bimbel dan Les Privat UTBK SNBT, Bimbel Privat TK-SD-SMP-SMA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AsalSekolahIgcse