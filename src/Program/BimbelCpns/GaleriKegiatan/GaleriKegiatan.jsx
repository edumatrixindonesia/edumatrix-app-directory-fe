import React from "react";
import "./GaleriKegiatan.css";
import kegiatanBelajarCpns1 from "../../../assets/kegiatan_belajar/cpns/cpns_1.png";
// import kegiatanBelajarCpns2 from "../../../assets/kegiatan_belajar/cpns/cpns_2.png";

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
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/Dwi-prasasti-cpns-600x337.jpeg"
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
          <img
            className="child-kegiatan-belajar-cpns"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/testi-4-600x337.jpeg"
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
          <img
            className="child-kegiatan-belajar-cpns"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/Mela-Hermin-RSPAU-CPNS-2-600x337.jpeg"
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
          <img
            className="child-kegiatan-belajar-cpns"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/Dwi-prasasti-cpns-3-600x337.jpeg"
            alt="Kegiatan Belajar Bimbel cpns Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
