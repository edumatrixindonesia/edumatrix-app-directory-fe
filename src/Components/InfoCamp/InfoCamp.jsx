import React from "react";
import "./InfoCamp.css";
import jadwal1 from "../../assets/jadwal_camp/jadwal_supercamp_bimbel_utbk_snbt_1.jpg";
import jadwal2 from "../../assets/jadwal_camp/jadwal_supercamp_bimbel_utbk_snbt_2.jpg";
import lokasiCamp from "../../assets/icon_supercamp/location.png";
import waktuProgram from "../../assets/icon_supercamp/calendar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const InfoCamp = () => {
  return (
    <React.Fragment>
      <div className="parent-box-info-camp">
        <h1 className="main-title-info-camp">INFORMASI SUPERCAMP <br /> UTBK SNBT 2025</h1>
        <div className="child-box-info-camp-lokasi">
          {/* LOKASI */}
          <div className="box-lokasi-program">
            <img className="img-lokasi" src={lokasiCamp} alt="" />
            <div className="parent-text-lokasi-camp">
              <button className="title-lokasi-camp">
                <h4>Lokasi Program</h4>
              </button>
              <li className="list-lokasi-camp">
                <FontAwesomeIcon icon={faCheck} />
                Jabodetabek dilaksanakan di Evencioo Apartment
              </li>
              <li className="list-lokasi-camp">
                <FontAwesomeIcon icon={faCheck} />
                Yogyakarta dilaksanakan di Wisma MM UGM
              </li>
            </div>
          </div>

          {/* WAKTU */}
          <div className="box-waktu-program">
            <img className="img-waktu" src={waktuProgram} alt="" />
            <div className="parent-text-waktu-camp">
              <button className="title-waktu-camp">
                <h4>Waktu Program</h4>
              </button>
              <li className="list-waktu-camp">
                <FontAwesomeIcon icon={faCheck} />
                Program INTENSIF dapat dimulai SEKARANG
              </li>
              <li className="list-waktu-camp">
                <FontAwesomeIcon icon={faCheck} />
                Gelombang 1 - Supercamp 2025 pada bulan April
              </li>
              <li className="list-waktu-camp">
                <FontAwesomeIcon icon={faCheck} />
                Gelombang 2 - Supercamp 2025 pada bulan Mei
              </li>
            </div>
          </div>
        </div>

        <div className="box-infocamp">
          <h1 className="title-jadwal-kegiatan-camp">Jadwal Kegiatan</h1>
          <div className="child-infocamp">
            <img className="img-jadwal-camp" src={jadwal1} alt="" />
            <img className="img-jadwal-camp" src={jadwal2} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoCamp;
