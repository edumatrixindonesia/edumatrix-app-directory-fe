import React from "react";
import kegiatanBelajarBumn1 from "../../../assets/kegiatan_belajar/bumn/bumn_1.jpg"
import "./GaleriKegiatan.css"

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-bumn">
        <h1 className="title-kegiatan-belajar-bumn">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-bumn">
          <img
            className="child-kegiatan-belajar-bumn"
            src={kegiatanBelajarBumn1}
            alt="Kegiatan Belajar Bimbel bumn Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
