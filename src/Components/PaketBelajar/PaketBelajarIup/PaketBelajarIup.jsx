import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import "./PaketBelajarIup.css";

const PaketBelajarIup = () => {
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">PAKET BELAJAR IUP - KKI</h1>
        <div className="container-paket-iup">
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP UGM</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20UGM.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <h4 className="title-list-materi-lpdp">
              <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
              Tahap 1
            </h4>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">
                GMST (Gadjah Mada Scholastic Test)
              </span>
            </div>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">
                AcEPT (Academic English Proffiency Test)
              </span>
            </div>

            <h4 className="title-list-materi-lpdp">
              <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
              Tahap 2
            </h4>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">Interview Preparation</span>
            </div>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">
                MMPI (Minnesota Multiphasic Personality Inventory)
              </span>
            </div>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">
                SJT (Situational Judgement Test)
              </span>
            </div>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">Motivation letter</span>
            </div>
            <div className="parent-list-materi-lpdp">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              <span className="list-materi-lpdp">FGD/LGD</span>
            </div>
          </div>

          {/* 2 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR SIMAK KKI UI</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20SIMAK%20KKI%20UI.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />

            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Jurusan IPS : Tes Basic Mathematics, Sociology, Economy, Indonesia
              and World History & Geography
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Jurusan IPA: Tes Mathematics Physics, Biology & Chemistry
            </p>
            <i>
              *Tersedia juga bimbingan tes khusus kedokteran yaitu MMPI dan/ SJT
            </i>
          </div>

          {/* 3 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP UNAIR</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20UNAIR.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />

            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Academic Potential Test (Verbal, Numerical, Reasoning, Figural)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              TOEFL/IELTS
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Interview
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Motivation Letter
            </p>
          </div>

          {/* 4 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP UNDIP</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20UNDIP.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />

            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Scholastic Test (Verbal, Numerical, Logical, Figural)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Diponegoro English Test
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Interview
            </p>
          </div>

          {/* 5 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP UNPAD</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20UNPAD.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p>Seleksi IUP UNPAD menerima tes akademis dari :</p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Bappenas
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> UI
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              UNAIR
            </p>
          </div>

          {/* 6 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP IPB</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20IPB.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Scholastic Test yang bersifat HOTS
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Veterinary Test (Khusus bagi calon mahasiswa yang memilih Program
              Studi Kedokteran Hewan)
            </p>
          </div>

          {/* 7 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>PAKET BELAJAR IUP ITS</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20IUP%20ITS.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p>IUP ITS menerima seleksi dari jenis tes :</p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Cambridge IGCSE (untuk Mathematics, Physics dan Chemistry)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> SAT
              College Board
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              UTBK, Tes Akademik ITS (terdiri dari TPA dan Saintek/Soshum)
            </p>
          </div>

          {/* 8 */}
          <div className="card-paket-iup">
            <div className="title-paket-snbt">
              <h3>Persiapan Tes SAT College Board</h3>
              <h4>Materi yang dipelajari</h4>
              <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20saya%20ingin%20daftar%20Bimbel%20Program%20Persiapan%20Tes%20SAT%20College%20Board.%20Mohon%20info%20selengkapnya%20...">
                <button className="btn-paket-snbt">PILIH PAKET</button>
              </a>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p>IUP ITS menerima seleksi dari jenis tes :</p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> SAT
              Mathematics (Heart of Algebra, Problem Solving and Data Analysis,
              Passport to Advanced Math)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> SAT
              Reading
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> SAT
              Writing & Language
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarIup;
