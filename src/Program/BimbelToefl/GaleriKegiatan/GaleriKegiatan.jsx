import React from "react";
import "./GaleriKegiatan.css";
import belajarOfflinePrivat1 from "../../../assets/kegiatan_belajar/privat/3 (2).jpg";
import belajarOfflinePrivat2 from "../../../assets/kegiatan_belajar/privat/6.jpg";
import belajarOnlinePrivat1 from "../../../assets/kegiatan_belajar/privat/4 (1).jpg";
import belajarOnlinePrivat2 from "../../../assets/kegiatan_belajar/privat/5 (1).jpg";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const GaleriKegiatan = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-toefl">
        <h1 className="title-kegiatan-belajar-toefl">{t("kegiatanBelajar.title")}</h1>
        <div className="parent-kegiatan-belajar-toefl">
          <img
            className="child-kegiatan-belajar-privat"
            src={belajarOfflinePrivat1}
            alt="Galeri Belajar Privat - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-privat"
            src={belajarOfflinePrivat2}
            alt="Galeri Belajar Privat - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-privat"
            src={belajarOnlinePrivat1}
            alt="Galeri Belajar Privat - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-privat"
            src={belajarOnlinePrivat2}
            alt="Galeri Belajar Privat - Edumatrix Indonesia"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
