import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PaketBelajarIgcse = () => {
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">IGCSE STUDY PLAN</h1>
        <div className="container-paket-snbt">
          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PRIORITY</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Flexible schedule
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> 120
              minutes lesson
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Includes e-books with materials, questions, and explanations
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Access to practice question drills
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Monthly progress report
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free registration fee
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free assessment (Pre-Test and Post-Test)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free academic consultation
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Language of instruction available In Indonesia, English, Bilingual
              (English-Indonesian)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Session recording
            </p>
            <a href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Priority%20Package%20International%20Curriculum%20tutoring.">
              <button className="btn-paket-snbt">SELECT PACKAGE</button>
            </a>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">DELUXE</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Flexible schedule
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} /> 90
              minutes lesson
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Includes e-books with materials, questions, and explanations
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Access to practice question drills
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Monthly progress report
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free registration fee
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free assessment (Pre-Test and Post-Test)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Free academic consultation
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Language of instruction available In Indonesia, English, Bilingual
              (English-Indonesian)
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              Session recording
            </p>
            <a href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Deluxe%20Package%20International%20Curriculum%20tutoring.">
              <button className="btn-paket-snbt">SELECT PACKAGE</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarIgcse;
