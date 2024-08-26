import React from "react";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconProgramIgcse from "../../../assets/OSN.png";

const BenefitIgcse = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            Benefits of Choosing Us :
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Private Learning System
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              One student on One Master Teacher for a personalized learning
              experience.
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Monthly Progress Reports
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Our Master Teachers assess student strengths and weaknesses and
              provide a summary each month.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            E-Book Exercises & Answers Key
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Access a variety of exercises and answers anytime, anywhere.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> Free
            Registration
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              No registration fee is required.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Personal Consultation
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Unsure about which course or programme to choose? We offer free
              consultations to help guide you.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BenefitIgcse;
