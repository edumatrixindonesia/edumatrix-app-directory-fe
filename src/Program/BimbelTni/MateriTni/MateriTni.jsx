import React from "react";
import "./MateriTni.css";
import iconMateri from "../../../assets/TNI POLRI.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const MateriTni = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-tni-polri">
            <img className="img-materi-tni-polri" src={iconMateri} alt="" /> MATERI KHUSUS AKPOL
          </button>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Tes Potensi Akademik (TPA)
          </h4>
          <div className="parent-list-materi-tni-polri">
            <li className="list-materi-tni-polri">Bahasa Indonesia</li>
            <li className="list-materi-tni-polri">Penalaran Numerik</li>
            <li className="list-materi-tni-polri">Wawasan Kebangsaan</li>
            <li className="list-materi-tni-polri">
              Pengetahuan Umum (termasuk UU Kepolisian)
            </li>
            <li className="list-materi-tni-polri">Bahasa Inggris (TOEFL)</li>
          </div>

          <h4 className="title-list-materi-tni-polri"><FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Psikotes</h4>
          <h4 className="title-list-materi-tni-polri"><FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Kesamaptaan Jasmani</h4>
          <h4 className="title-list-materi-tni-polri"><FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Mental Ideologi</h4>
        </div>

        <div className="box-materi-akpol">
          <button className="title-materi-tni-polri">
            <img className="img-materi-tni-polri" src={iconMateri} alt="" /> MATERI KHUSUS AKADEMI TNI
          </button>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Tes Kompetensi Dasar (TKD)
          </h4>
          <div className="parent-list-materi-tni-polri">
            <li className="list-materi-tni-polri">Tes Intelegensi Umum (TIU)</li>
            <li className="list-materi-tni-polri">Tes Wawasan Kebangsaan (TWK)</li>
            <li className="list-materi-tni-polri">Tes Karakteristik Pribadi (TKP)</li>
            <li className="list-materi-tni-polri">Bahasa Inggris (TOEFL)</li>
          </div>

          <h4 className="title-list-materi-tni-polri"><FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Psikotes</h4>
          <h4 className="title-list-materi-tni-polri"><FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" /> Kesamaptaan Jasmani</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MateriTni;
