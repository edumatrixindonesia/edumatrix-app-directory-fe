import React from "react";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconProgramIgcse from "../../../assets/OSN.png";

const OnlyIgcseEdm = () => {
  return (
    <div className="container-materi-tni">
      <div className="box-materi-akpol">
        <button className="title-materi-lpdp"> {" "}Only at Edumatrix</button>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> You
          can Learn directly with expert tutors.
        </h4>

        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          Flexible learning: choose when and where you study.
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          Students across Indonesia.
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          Accurate and high-quality teaching materials.
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> We
          provide precise and top-quality resources, assessments, and practice
          questions.
        </h4>
      </div>
    </div>
  );
};

export default OnlyIgcseEdm;
