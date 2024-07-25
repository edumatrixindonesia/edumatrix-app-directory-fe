import React from "react";
import belajarOffline1 from "../../../assets/kegiatan_belajar/lpdp/bimbel_privat_lpdp.jpeg";
import belajarOffline2 from "../../../assets/kegiatan_belajar/lpdp/bimbel_privat_lpdp_2.jpeg";
import belajarOnline1 from "../../../assets/kegiatan_belajar/lpdp/bimbel_privat_lpdp_online.jpeg";
import belajarOnline2 from "../../../assets/kegiatan_belajar/lpdp/bimbel_privat_lpdp_online_2.jpeg";
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-lpdp">
        <h1 className="title-kegiatan-belajar-lpdp">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-lpdp">
          <img
            className="child-kegiatan-belajar-lpdp"
            src={belajarOffline1}
            alt="Galeri Belajar Bimbel Terbaik - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-lpdp"
            src={belajarOffline2}
            alt="Galeri Belajar Bimbel Terbaik - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-lpdp"
            src={belajarOnline1}
            alt="Galeri Belajar Bimbel Terbaik - Edumatrix Indonesia"
          />
          <img
            className="child-kegiatan-belajar-lpdp"
            src={belajarOnline2}
            alt="Galeri Belajar Bimbel Terbaik - Edumatrix Indonesia"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
