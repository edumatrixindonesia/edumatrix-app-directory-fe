import React from "react";
import iconMateri from "../../../assets/PRIVAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import "./MateriLpdp.css";

const MateriLpdp = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            <img className="img-materi-lpdp" src={iconMateri} alt="" /> MATERI
            PERSIAPAN LPDP DI EDUMATRIX
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> Tes
            Bakat Skolastik
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon className="icon-list-materi-lpdp" icon={faCircle} />
            <span className="list-materi-lpdp">
              Tes Kemampuan Verbal: Melatih diri dalam kemampuan memahami teks
              dan menguji kemampuan berbahasa.
            </span>
          </div>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon className="icon-list-materi-lpdp" icon={faCircle} />
            <span className="list-materi-lpdp">
              Tes Kemampuan Kuantitatif: Mengukur kemampuan dalam memahami,
              menganalisis, dan menyelesaikan masalah matematika.
            </span>
          </div>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon className="icon-list-materi-lpdp" icon={faCircle} />
            <span className="list-materi-lpdp">
              Tes Kemampuan Pemecahan Masalah: Mengukur kemampuan Pemecahan
              Masalah dari informasi dan menyusun argumen secara logis.
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Pendampingan Essay/Proposal
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon className="icon-list-materi-lpdp" icon={faCircle} />
            <span className="list-materi-lpdp">
              Kamu akan didampingi dalam pembuatan essay dari nol yang pastinya
              menarik dan terstruktur.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> Tes
            Substansi Pendampingan Persiapan Wawancara
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon className="icon-list-materi-lpdp" icon={faCircle} />
            <span className="list-materi-lpdp">
              Program ini akan memberikan kamu banyak informasi mengenai seputar
              pertanyaan yang sering muncul pada saat wawancara serta tips dan
              trik menjawab pertanyaan dengan mudah dan tepat.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MateriLpdp;
