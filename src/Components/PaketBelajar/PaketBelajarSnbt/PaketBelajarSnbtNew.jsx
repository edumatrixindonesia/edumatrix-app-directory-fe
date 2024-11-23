import React from "react";
import "./PaketBelajarSnbtNew.css";
import paketSnbtUtama from "../../../assets/pricelist_snbt/paket_utama.png";
import paketSnbtPrima from "../../../assets/pricelist_snbt/paket_prima.png";
import paketSnbtMaster from "../../../assets/pricelist_snbt/paket_master.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PaketBelajarSnbtNew = () => {
  return (
    <React.Fragment>
      <div className="top-parent-paket-snbt-new">
        <h1 className="title-paket-snbt-new">PILIHAN PAKET BELAJAR</h1>
        <div className="super-parent-paket-snbt-new">
          <div className="parent-paket-snbt-new">
            <div className="child-paket-snbt-new">
              <h1 className="child-title-paket-snbt-new">OPTIMA</h1>
              <p className="child-subtitle-paket-snbt-new">
                Free Tryout 1 Paket
              </p>
              <hr className="garis-paket-snbt-new" />
              <ul className="parent-rincian-paket">
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> 14
                  Sesi pertemuan
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  <b>Free pendaftaran</b>
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Durasi belajar 90 menit
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Sistem Belajar Privat
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Jadwal Belajar Fleksibel
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Modul SNBT
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  E-Book Latihan & Pembahasan PDF
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> TDR
                  (Tutoring Daily Report) Harian
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Progres Report Berkala
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Drilling Soal
                </li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20OPTIMA%20bimbel%20UTBK%20SNBT.">
                <button className="btn-parent-paket-snbt-new-2">
                  Pilih Paket
                </button>
              </a>
            </div>
            <div className="parent-special-label-paket-snbt-maxima">
            <h3 className="special-label-paket-snbt-maxima">PALING LARIS</h3>
            <div className="child-paket-snbt-new-maxima">
              <h1 className="child-title-paket-snbt-new">MAXIMA</h1>
              <p className="child-subtitle-paket-snbt-new">
                Free Tryout 3 Paket
              </p>
              <hr className="garis-paket-snbt-new" />
              <ul className="parent-rincian-paket">
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> 21
                  Sesi pertemuan
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  <b>Free pendaftaran</b>
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Durasi belajar 90 menit
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Sistem Belajar Privat
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Jadwal Belajar Fleksibel
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Modul SNBT
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  E-Book Latihan & Pembahasan PDF
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> TDR
                  (Tutoring Daily Report) Harian
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Progres Report Berkala
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Drilling Soal
                </li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20MAXIMA%20bimbel%20UTBK%20SNBT.">
                <button className="btn-parent-paket-snbt-new">
                  Pilih Paket
                </button>
              </a>
            </div>
            </div>
            <div className="child-paket-snbt-new">
              <h1 className="child-title-paket-snbt-new">ULTIMA</h1>
              <p className="child-subtitle-paket-snbt-new">
                Free Tryout 5 Paket
              </p>
              <hr className="garis-paket-snbt-new" />
              <ul className="parent-rincian-paket">
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> 35
                  Sesi pertemuan
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  <b>Free pendaftaran</b>
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Durasi belajar 90 menit
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Sistem Belajar Privat
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Jadwal Belajar Fleksibel
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Modul SNBT
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  E-Book Latihan & Pembahasan PDF
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} /> TDR
                  (Tutoring Daily Report) Harian
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Progres Report Berkala
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Drilling Soal
                </li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20ULTIMA%20bimbel%20UTBK%20SNBT.">
                <button className="btn-parent-paket-snbt-new-2">
                  Pilih Paket
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarSnbtNew;
