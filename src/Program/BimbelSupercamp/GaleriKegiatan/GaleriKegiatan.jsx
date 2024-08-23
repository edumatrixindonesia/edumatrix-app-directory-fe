import React, { useEffect, useState } from "react";
import "./GaleriKegiatan.css";
import kegiatanSupercamp1 from "../../../assets/kegiatan_belajar/supercamp/23.jpg";

const GaleriKegiatan = () => {
  const [galeriKegiatan, setGaleriKegiatan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/galerikegiatansnbt")
      .then((res) => res.json())
      .then((data) => {
        setGaleriKegiatan(data);
      });
  };
  return (
    <React.Fragment>
      <div className="box-kegiatan-belajar-supercamp">
        <h1 className="title-kegiatan-belajar-supercamp">GALERI KEGIATAN</h1>
        <div className="parent-kegiatan-belajar-supercamp">
          {galeriKegiatan.map((item, index) => (
            <img
              key={index}
              className="child-kegiatan-belajar-supercamp"
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
