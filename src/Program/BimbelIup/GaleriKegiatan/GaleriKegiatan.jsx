import React from "react";
import "./GaleriKegiatan.css";
import kegiatanBelajarIup1 from "../../../assets/kegiatan_belajar/iup/iup_1.jpg";
import kegiatanBelajarIup2 from "../../../assets/kegiatan_belajar/iup/iup_2.jpg";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-iup">
        <h1 className="title-kegiatan-belajar-iup">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-iup">
          <img
            className="child-kegiatan-belajar-iup"
            src={kegiatanBelajarIup1}
            alt="Kegiatan Belajar Bimbel IUP Terbaik"
          />
          <img
            className="child-kegiatan-belajar-iup"
            src={kegiatanBelajarIup2}
            alt="Kegiatan Belajar Bimbel IUP Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
