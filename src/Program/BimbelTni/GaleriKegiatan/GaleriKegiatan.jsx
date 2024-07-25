import React, { useEffect, useState } from "react";
import "./GaleriKegiatan.css";
import kegiatanBelajarTni1 from "../../../assets/kegiatan_belajar/tni_polri/tni_polri_1.png";
import kegiatanBelajarTni2 from "../../../assets/kegiatan_belajar/tni_polri/tni_polri_2.png";
import kegiatanBelajarTni3 from "../../../assets/kegiatan_belajar/tni_polri/tni_polri_3.png";
import kegiatanBelajarTni4 from "../../../assets/kegiatan_belajar/tni_polri/tni_polri_4.png";

const GaleriKegiatan = () => {
  const [galeriKegiatan, setGaleriKegiatan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/galerikegiatantni")
      .then((res) => res.json())
      .then((data) => {
        setGaleriKegiatan(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-galeri-kegiatan">
        <h1 className="title-kegiatan">GALERI KEGIATAN</h1>
        <div className="parent-card-kegiatan">
          {galeriKegiatan.map((item, index) => (
            <img
              key={index}
              className="kegiatan-img"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Galeri Kegiatan Bimbel TNI  Polri"
            />
          ))}
          <img
            className="kegiatan-img"
            src={kegiatanBelajarTni1}
            alt="Galeri Kegiatan Bimbel TNI  Polri"
          />
          <img
            className="kegiatan-img"
            src={kegiatanBelajarTni2}
            alt="Galeri Kegiatan Bimbel TNI  Polri"
          />
          <img
            className="kegiatan-img"
            src={kegiatanBelajarTni3}
            alt="Galeri Kegiatan Bimbel TNI  Polri"
          />
          <img
            className="kegiatan-img"
            src={kegiatanBelajarTni4}
            alt="Galeri Kegiatan Bimbel TNI  Polri"
          />
        </div>
        <div className="parent-video">
          <embed
            className="video-kegiatan"
            src="https://www.youtube.com/embed/g6jSRjry8mM"
          ></embed>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
