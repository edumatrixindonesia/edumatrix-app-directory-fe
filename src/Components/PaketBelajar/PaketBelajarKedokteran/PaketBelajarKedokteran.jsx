import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaketBelajarKedokteran = () => {
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">
          PROGRAM BELAJAR MASUK KEDOKTERAN
        </h1>
        <div className="container-paket-snbt">
          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h3>BIMBEL INTENSIF</h3>
              <h4 className="text-subtitle-prog-unggulan">Layanan yang didapatkan</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Program%20Intensif,%20Bimbel%20Masuk%20Kedokteran%202025.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PROGRAM</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Sistem belajar small class 4 sesi per hari
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Ruang belajar nyaman
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tryout setiap hari
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Belajar lebih interaktif di Kantor Edumatrix
            </p>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h3>SUPERCAMP KARANTINA</h3>
              <h4 className="text-subtitle-prog-unggulan">Layanan yang didapatkan</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Program%20Supercamp%20Kedokteran,%20Bimbel%20Masuk%20Kedokteran%202025.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PROGRAM</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Sistem belajar eksklusif 5 sesi per hari selama 4 minggu
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Full akomodasi (makan, laundry dan tempat tinggal di hotel)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Tryout setiap hari
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Konsultasi akademik personal
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free Pendaftaran SNBT & Ujian Mandiri
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Antar Jemput ke Lokasi SNBT
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free Pendaftaran program
            </p>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h3>PRIVAT MASUK KEDOKTERAN</h3>
              <h4 className="text-subtitle-prog-unggulan">Layanan yang didapatkan</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Program%20Privat%20Kedokteran,%20Bimbel%20Masuk%20Kedokteran%202025.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PROGRAM</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Sistem belajar 1 on 1
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Jadwal fleksibel
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Konsultasi gratis
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarKedokteran;
