import React from "react";
// import kegiatanBelajarBumn1 from "../../../assets/kegiatan_belajar/bumn/bumn_1.jpg"
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-bumn">
        <h1 className="title-kegiatan-belajar-bumn">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-bumn">
          <img
            className="child-kegiatan-belajar-bumn"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/belajar3-600x695.jpeg"
            alt="Kegiatan Belajar Bimbel bumn Terbaik"
          />
          <img
            className="child-kegiatan-belajar-bumn"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/belajar4-600x695.jpeg"
            alt="Kegiatan Belajar Bimbel bumn Terbaik"
          />
          <img
            className="child-kegiatan-belajar-bumn"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/belajar1-600x337.png"
            alt="Kegiatan Belajar Bimbel bumn Terbaik"
          />
          <img
            className="child-kegiatan-belajar-bumn"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/belajar2-600x337.png"
            alt="Kegiatan Belajar Bimbel bumn Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
