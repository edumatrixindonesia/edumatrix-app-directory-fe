import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingCtaToefl = () => {
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <a
          className="parent-btn-wa"
          href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20would%20like%20to%20ask%20about%20the%20TOEFL,%20TOEIC%20IELTS,%20English%20Conversation%20program%20at%20Edumatrix.%20What%20are%20the%20course%20types%20and%20session%20package%20options?"
        >
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default FloatingCtaToefl;
