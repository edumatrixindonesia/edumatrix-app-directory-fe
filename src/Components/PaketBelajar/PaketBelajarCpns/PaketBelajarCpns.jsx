import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./PaketBelajarCpns.css";
import DesainPaket from "./DesainPaket/DesainPaket";

const PaketBelajarCpns = () => {
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">PROGRAM BELAJAR CPNS & PPPK</h1>
        <DesainPaket/>
        <div className="container-paket-snbt">
          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PAKET INTENSIF CPNS</h1>
              {/* <h4 className="harga-paket-lpdp">Rp3,850,000</h4>
              <h4 className="harga-paket-lpdp-2">Rp2,520,000</h4>
              <p className="note-paket-live-class-cpns">
                Special Price
              </p> */}
              <img
                className="img-garansi-lpdp"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/garansi-cpns-400x59.png"
                alt=""
              />
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Gratis 3 Paket Tryout
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> 12
              Sesi Pembelajaran
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Program pendampingan belajar 1 guru 1 Siswa
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Jadwal fleksibel durasi belajar 90 menit
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Driling Soal terbaru
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Progress report bulanan
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free assessment
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tutor Kompeten
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              E-book soal & e-book pembahasan
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Recording pembelajaran yang bisa diakses unlimited
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Progress Report Statistik nilai & skor Peserta
            </p>
            <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20Daftar%20Paket%20Intensif%20CPNS%20Bimbel%20CPNS.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
              <button className="btn-paket-snbt">PILIH PAKET</button>
            </a>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PAKET PASTI CPNS</h1>
              {/* <h4 className="harga-paket-cpns-2">Rp149,000</h4> */}
              <img
                className="img-garansi-lpdp"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/garansi-cpns-400x59.png"
                alt=""
              />
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> 5
              Paket Tryout CAT Premium
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Pembahasan Soal
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tryout sesuai dengan ketentuan terbaru
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Soal akurat sesuai dengan kisi-kisi PAN-RB
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tersedia total 110 soal dengan komposisi TWK (30), TIU (35), TKP
              (45)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Durasi mengerjakan soal 100 menit
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Bisa dikerjakan kapan dan dimanapun
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Support akses Laptop, komputer, mac book & Mobile Phone Friendly
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Akses Tryout seumur hidup
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Progress Report Statistik nilai & skor Peserta
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Melatih manajemen waktu
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Mengukur kemampuan diri
            </p>
            <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20Daftar%20Paket%20Pasti%20CPNS%20Bimbel%20CPNS.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
              <button className="btn-paket-snbt">PILIH PAKET</button>
            </a>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PAKET LIVE CLASS</h1>
              {/* <h4 className="harga-paket-lpdp">Rp2,350,000</h4>
              <h4 className="harga-paket-lpdp-2">Rp1,800,000</h4>
              <p className="note-paket-live-class-cpns">
                Periode 28 Agustus s/d 15 September 2024
              </p> */}
              <img
                className="img-garansi-lpdp"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/garansi-cpns-400x59.png"
                alt=""
              />
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Sistem Belajar Small Class
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> 12
              Sesi Pembelajaran
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Driling Soal terbaru
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Jadwal fleksibel durasi belajar 60 menit
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Kecocokan belajar antara guru & siswa
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Progress report bulanan
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free assessment
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tryout akurat
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              E-book soal & e-book pembahasan
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Recording pembelajaran yang bisa diakses unlimited
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Progress Report Statistik nilai & skor Peserta
            </p>
            <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20Daftar%20Paket%20Live%20Class%20Bimbel%20CPNS.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
              <button className="btn-paket-snbt">PILIH PAKET</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarCpns;
