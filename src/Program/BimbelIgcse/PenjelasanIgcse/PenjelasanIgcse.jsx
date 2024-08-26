import React from "react";
import "./PenjelasanIgcse.css";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMateri from "../../../assets/PRIVAT.png";
import iconProgramIgcse from "../../../assets/OSN.png"

const PenjelasanIgcse = () => {
  return (
    <React.Fragment>
      <div className="container-penjelasan-igcse">
        <div className="penjelasan-igcse">
          <h3 className="title-penjelasan-igcse">What is IGCSE?</h3>
          <p className="desk-penjelasan-igcse">
            The IGCSE is an international qualification for students aged 14-16.
            It uses the Cambridge Curriculum, which features more challenging
            questions.
          </p>
        </div>

        <div className="penjelasan-igcse">
          <h3 className="title-penjelasan-igcse">What is A Level?</h3>
          <p className="desk-penjelasan-igcse">
            A Level is a subject-based qualification used for university
            admissions, higher education, training, and employment.
          </p>
        </div>
      </div>

      <div className="penjelasan-ib">
        <h3 className="title-penjelasan-ib">
          What is International Baccalaureate (IB)?
        </h3>
        <p className="desk-penjelasan-ib">
          The International Baccalaureate (IB) is a global educational program
          for students aged 16-19 that emphasizes a broad, holistic approach to
          learning. It is designed to develop inquiring, knowledgeable, and
          caring young people who are motivated to succeed and make a
          difference.
        </p>
      </div>

      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            <img className="img-materi-lpdp" src={iconProgramIgcse} alt="" /> What
            does the IB program include?
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> Six
            Subject Groups
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Students choose one subject from each group, including languages,
              social studies, experimental sciences, mathematics, and the arts.
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Theory of Knowledge (TOK)
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              A course that explores the nature of knowledge and how we know
              what we claim to know.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Extended Essay (EE)
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              A 4,000-word independent research paper on a topic of the
              student's choice.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Creativity, Activity, Service (CAS)
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              A component that encourages students to engage in artistic,
              athletic, and community service activities.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PenjelasanIgcse;
