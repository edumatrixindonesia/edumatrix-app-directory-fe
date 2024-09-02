import React from "react";
import "./SubtesSnbt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import iconMateri from "../../../assets/PRIVAT.png";

const SubtesSnbt = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-tni-polri">
            <img className="img-materi-tni-polri" src={iconMateri} alt="" />{" "}
            MATERI SUBTES UTBK SNBT
          </button>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Penalaran umum
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Pemahaman bacaan dan menulis
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Pengetahuan & pemahaman umum
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Pengetahuan kuantitatif
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Literasi dalam bahasa indonesia
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Literasi dalam bahasa inggris
          </h4>
          <h4 className="title-list-materi-tni-polri">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-tni-polri" />{" "}
            Penalaran matematika
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubtesSnbt;
