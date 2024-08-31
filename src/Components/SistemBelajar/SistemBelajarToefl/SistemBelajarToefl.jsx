import React from "react";
import "./SistemBelajarToefl.css";
import online from "../../../assets/sistem_belajar/zoom.png";
import offline from "../../../assets/sistem_belajar/offline.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SistemBelajarToefl = () => {
  return (
    <React.Fragment>
    <h1 className="super-title-sistem-belajar">EDUMATRIX LEARNING SYSTEM</h1>
    <div className="flip-container">
      <div className="flip-box">
        <div className="flip-box-front">
          <img src={online} alt="" className="icon-sistem-belajar" />
          <div className="parent-desk-online">
            <h1 className="title-sistem-belajar">ONLINE</h1>
            <p className="desk-sistem-belajar">
              Learn through Zoom meetings, making it easy for students to record
              study sessions.
            </p>
            <p className="desk-sistem-belajar-selengkapnya">
              Read more
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
        </div>
        <div className="flip-box-back">
          <a
            href="https://api.whatsapp.com/send?phone=6285600422188&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20TOEFL,%20TOEIC,%20&%20IELTS%20Online%20tutoring%20center."
            className="btn-regist-now-sistem-belajar"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-front">
          <img src={offline} alt="" className="icon-sistem-belajar" />
          <div className="parent-desk-online">
            <h1 className="title-sistem-belajar">OFFLINE</h1>
            <p className="desk-sistem-belajar">
              Tutors come to the student's home/ Study comfortably in the Office
              Edumatrix.
            </p>
            <p className="desk-sistem-belajar-selengkapnya">
              Read more
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
        </div>
        <div className="flip-box-back">
          <a
            href="https://api.whatsapp.com/send?phone=6285600422188&text=Halo%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20TOEFL,%20TOEIC,%20&%20IELTS%20Offline%20tutoring%20center."
            className="btn-regist-now-sistem-belajar"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default SistemBelajarToefl;
