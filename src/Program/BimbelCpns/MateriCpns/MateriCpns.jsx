import React from "react";
import iconMateri from "../../../assets/PRIVAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const MateriCpns = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            <img className="img-materi-lpdp" src={iconMateri} alt="" />{" "}
            RANGKAIAN TES UNTUK CPNS DAN PASSING GRADE
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> SKD
            (Seleksi Kompetensi Dasar)
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Tes Wawasan Kebangsaan (TWK)
              <br />
              <strong>Passing grade: 65 (Minimal 16 dari 35 soal benar)</strong>
            </span>
          </div>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Tes Intelegensia Umum (TIU)
              <br />
              <strong>Passing grade: 80 (Minimal 13 dari 30 soal benar)</strong>
            </span>
          </div>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Tes Karakteristik Pribadi (TKP)
              <br />
              <strong>
                Passing grade: 166 (Minimal 34 soal mendapatkan 5 poin)
              </strong>
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> SKB
            (Seleksi Kompetensi Bidang)
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              CAT (Computer Assisted Test)
            </span>
          </div>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">Non CAT</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MateriCpns;
