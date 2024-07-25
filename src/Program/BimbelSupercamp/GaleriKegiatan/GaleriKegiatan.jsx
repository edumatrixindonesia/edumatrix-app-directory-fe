import React from "react";
import "./GaleriKegiatan.css";
import kegiatanSupercamp1 from "../../../assets/kegiatan_belajar/supercamp/23.jpg";
import kegiatanSupercamp2 from "../../../assets/kegiatan_belajar/supercamp/24.jpg";
import kegiatanSupercamp3 from "../../../assets/kegiatan_belajar/supercamp/27.jpg";
import kegiatanSupercamp4 from "../../../assets/kegiatan_belajar/supercamp/28.jpg";
import kegiatanSupercamp5 from "../../../assets/kegiatan_belajar/supercamp/29.jpg";
import kegiatanSupercamp6 from "../../../assets/kegiatan_belajar/supercamp/38.jpg";
import kegiatanSupercamp7 from "../../../assets/kegiatan_belajar/supercamp/22.jpg";
import kegiatanSupercamp8 from "../../../assets/kegiatan_belajar/supercamp/10.jpg";
import kegiatanSupercamp9 from "../../../assets/kegiatan_belajar/supercamp/21.jpg";

const GaleriKegiatan = () => {
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-supercamp">
        <h1 className="title-kegiatan-belajar-supercamp">GALERI KEGIATAN</h1>
        <div className="parent-kegiatan-belajar-supercamp">
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp1}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp2}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp3}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp4}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp5}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp6}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp7}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp8}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
          <img
            className="child-kegiatan-belajar-supercamp"
            src={kegiatanSupercamp9}
            alt="Kegiatan Belajar Bimbel supercamp Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
