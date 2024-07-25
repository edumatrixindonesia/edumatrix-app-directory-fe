import React from "react";
import "./GaleriKegiatan.css";
import kegiatanBelajarToefl1 from "../../../assets/kegiatan_belajar/toefl/toefl_1.jpg"

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-toefl">
        <h1 className="title-kegiatan-belajar-toefl">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-toefl">
          <img
            className="child-kegiatan-belajar-toefl"
            src={kegiatanBelajarToefl1}
            alt="Kegiatan Belajar Bimbel toefl Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
