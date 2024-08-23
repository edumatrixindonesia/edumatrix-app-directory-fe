import React, { useEffect, useState } from "react";
import kegiatanBelajarSnbt1 from "../../../assets/kegiatan_belajar/snbt/snbt_1.png";
import kegiatanBelajarSnbt2 from "../../../assets/kegiatan_belajar/snbt/snbt_2.png";
import kegiatanBelajarSnbt3 from "../../../assets/kegiatan_belajar/snbt/snbt_3.png";
import "./GaleriKegiatan.css";

const GaleriKegiatan = () => {
  const [galeriKegiatan, setGaleriKegiatan] = useState([]);

  useEffect(() => {
    fetchKegiatan();
  }, []);

  const fetchKegiatan = () => {
    fetch("https://api.edulink-indonesia.com/galerikegiatansnbt")
      .then((res) => res.json())
      .then((data) => {
        setGaleriKegiatan(data);
      });
  };
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-snbt">
        <h1 className="title-kegiatan-belajar-snbt">KEGIATAN BELAJAR</h1>

        <div className="parent-text-belajar-online">
          <hr className="garis-kegiatan-belajar" />
          <h3 className="text-belajar-online">Online</h3>
          <hr className="garis-kegiatan-belajar" />
        </div>
        <div className="parent-kegiatan-belajar-snbt">
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt1}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt2}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
          <img
            className="child-kegiatan-belajar-snbt"
            src={kegiatanBelajarSnbt3}
            alt="Kegiatan Belajar Bimbel snbt Terbaik"
          />
        </div>

        <div className="parent-text-belajar-online">
          <hr className="garis-kegiatan-belajar" />
          <h3 className="text-belajar-online">Offline</h3>
          <hr className="garis-kegiatan-belajar" />
        </div>
        <div className="parent-kegiatan-belajar-snbt">
          {galeriKegiatan.map((item, index) => (
            <img
              key={index}
              className="child-kegiatan-belajar-snbt"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Galeri Kegiatan Bimbel TNI  Polri"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
