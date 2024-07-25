import React from "react";
import kegiatanBelajarOsn1 from "../../../assets/kegiatan_belajar/osn/2 (1).jpg";
import kegiatanBelajarOsn2 from "../../../assets/kegiatan_belajar/osn/1 (3).jpg";
import kegiatanBelajarOsn3 from "../../../assets/kegiatan_belajar/osn/osn_1.png";
import kegiatanBelajarOsn4 from "../../../assets/kegiatan_belajar/osn/osn_2.png";
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-osn">
        <h1 className="title-kegiatan-belajar-osn">KEGIATAN BELAJAR</h1>
        <div className="parent-kegiatan-belajar-osn">
          <img
            className="child-kegiatan-belajar-osn"
            src={kegiatanBelajarOsn1}
            alt="Kegiatan Belajar Bimbel OSN Terbaik"
          />
          <img
            className="child-kegiatan-belajar-osn"
            src={kegiatanBelajarOsn2}
            alt="Kegiatan Belajar Bimbel OSN Terbaik"
          />
          <img
            className="child-kegiatan-belajar-osn"
            src={kegiatanBelajarOsn3}
            alt="Kegiatan Belajar Bimbel OSN Terbaik"
          />
          <img
            className="child-kegiatan-belajar-osn"
            src={kegiatanBelajarOsn4}
            alt="Kegiatan Belajar Bimbel OSN Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
