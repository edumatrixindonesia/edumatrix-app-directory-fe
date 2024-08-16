import React, { useEffect, useState } from "react";
import "./GaleriKegiatan.css";

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
        </div>
        <div className="parent-video">
          {/* <embed
            className="video-kegiatan"
            src="https://www.youtube.com/embed/g6jSRjry8mM"
          ></embed> */}
          <div class="video-container">
            <iframe
            className="video-tni-polri"
              width="1236"
              height="695"
              src="https://www.youtube.com/embed/g6jSRjry8mM"
              title="EKSKLUSIF!!! Training Camp Persiapan masuk TNI-POLRI dan Sekolah Kedinasan 2024"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div class="video-container">
            <iframe
            className="video-tni-polri"
              width="1236"
              height="695"
              src="https://www.youtube.com/embed/XKtZARuCTH0"
              title="EKSKLUSIF!!! Training Camp Persiapan masuk TNI-POLRI dan Sekolah Kedinasan 2024"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GaleriKegiatan;
