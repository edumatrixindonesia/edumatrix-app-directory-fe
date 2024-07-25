import React from "react";
import "./GaleriKegiatan.css";
import kegiatanBelajarCpns1 from "../../../assets/kegiatan_belajar/cpns/cpns_1.png";
import kegiatanBelajarCpns2 from "../../../assets/kegiatan_belajar/cpns/cpns_2.png";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-cpns">
        <h1 className="title-kegiatan-belajar-cpns">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-cpns">
          <img
            className="child-kegiatan-belajar-cpns"
            src={kegiatanBelajarCpns1}
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
          <img
            className="child-kegiatan-belajar-cpns"
            src={kegiatanBelajarCpns2}
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
