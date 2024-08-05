import React from "react";
import kegiatanBelajarSnbt1 from "../../../assets/kegiatan_belajar/snbt/snbt_1.png";
import kegiatanBelajarSnbt2 from "../../../assets/kegiatan_belajar/snbt/snbt_2.png";
import kegiatanBelajarSnbt3 from "../../../assets/kegiatan_belajar/snbt/snbt_3.png";
import kegiatanBelajarSnbt4 from "../../../assets/kegiatan_belajar/snbt/24.jpg";
import kegiatanBelajarSnbt5 from "../../../assets/kegiatan_belajar/snbt/27.jpg";
import kegiatanBelajarSnbt6 from "../../../assets/kegiatan_belajar/snbt/29.jpg";
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-snbt">
        <h1 className="title-kegiatan-belajar-snbt">KEGIATAN BELAJAR</h1>

        <div className="parent-text-belajar-online">
          <hr className="garis-kegiatan-belajar" />
          <h3 className="text-belajar-online">Online</h3>
          <hr className="garis-kegiatan-belajar" />
        </div>
        <div className="parent-kegiatan-belajar-snbt">
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt1}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt2}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt3}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
        </div>

        <div className="parent-text-belajar-online">
          <hr className="garis-kegiatan-belajar" />
          <h3 className="text-belajar-online">Offline</h3>
          <hr className="garis-kegiatan-belajar" />
        </div>
        <div className="parent-kegiatan-belajar-snbt">
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt4}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt5}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt6}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
