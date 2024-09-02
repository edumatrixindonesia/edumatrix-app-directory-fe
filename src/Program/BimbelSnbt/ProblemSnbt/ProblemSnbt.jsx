import React from "react";
import "./ProblemSnbt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import mengapa from "../../../assets/mengapa_.png";

const ProblemSnbt = () => {
  return (
    <React.Fragment>
      <div className="super-parent-accordion-snbt">
        {/* <h1 className="super-title-problem-snbt">MENGAPA BANYAK ORANG <span className="block-problem-snbt">GAGAL SNBT?</span></h1> */}
        <div className="parent-img-title">
          <img src={mengapa} alt="" className="img-mengapa-gagal" />
        </div>
        <div className="parent-accordion-snbt">
          <div className="accordion-item-snbt">
            <input type="checkbox" id="accordion1" />
            <label htmlFor="accordion1" className="accordion-header-snbt">
              <FontAwesomeIcon icon={faAnglesRight} /> Soal yang Sulit
            </label>
            <div className="accordion-content-snbt">
              <p className="desk-problem-snbt">
                Soal-soal yang diberikan dalam UTBK SNBT diketahui cukup sulit
                dan memerlukan pemahaman yang mendalam tentang konsep dan teori.
                Hal ini bisa membuat beberapa peserta merasa kesulitan dalam
                menjawab soal-soal tersebut.
              </p>
            </div>
          </div>
          <div className="accordion-item-snbt">
            <input type="checkbox" id="accordion2" />
            <label htmlFor="accordion2" className="accordion-header-snbt">
              <FontAwesomeIcon icon={faAnglesRight} /> Waktu yang Terbatas
            </label>
            <div className="accordion-content-snbt">
              <p className="desk-problem-snbt">
                UTBK SNBT memiliki waktu yang sangat terbatas, yaitu 195 menit
                untuk 155 soal tes. Waktu yang singkat ini bisa membuat beberapa
                peserta merasa kesulitan untuk menjawab semua soal dengan tepat
                dan teratur.
              </p>
            </div>
          </div>
          <div className="accordion-item-snbt">
            <input type="checkbox" id="accordion3" />
            <label htmlFor="accordion3" className="accordion-header-snbt">
              <FontAwesomeIcon icon={faAnglesRight} /> Persaingan yang Ketat
            </label>
            <div className="accordion-content-snbt">
              <p className="desk-problem-snbt">
                Karena UTBK SNBT digunakan sebagai salah satu acuan dalam
                seleksi mahasiswa, persaingan antara peserta sangatlah ketat.
                Hal ini bisa membuat beberapa peserta merasa tertekan dan kurang
                percaya diri.
              </p>
            </div>
          </div>
          <div className="accordion-item-snbt">
            <input type="checkbox" id="accordion4" />
            <label htmlFor="accordion4" className="accordion-header-snbt">
              <FontAwesomeIcon icon={faAnglesRight} /> Materi yang Luas
            </label>
            <div className="accordion-content-snbt">
              <p className="desk-problem-snbt">
                UTBK SNBT mencakup dua domain tes utama yakni Tes Potensi
                Skolastik (TPS) dan Literasi. Untuk Tes Potensi Skolastik
                terdiri dari 4 sub test yaitu Kemampuan Penalaran Umum, PPU
                (Pengetahuan dan Pemahaman Umum), PBM (Pengetahuan Baca dan
                Menulis) dan Pengetahuan Kuantitatif. Sedangkan untuk Literasi
                terdiri dari 3 sub test yaitu Literasi dalam Bahasa Indonesia,
                Literasi Bahasa Inggris dan Penalaran Matematika. Jika peserta
                tidak terbiasa dengan materi tersebut atau kurang persiapan,
                mereka pasti kesulitan dalam menjawab soal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProblemSnbt;
