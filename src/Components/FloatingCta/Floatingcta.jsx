import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Floatingcta.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Floatingcta = () => {
  return (
    <div className="box-float-main">
      <a href="https://edulink-indonesia.com/lead/edm/call">
        <div className="main-parent-call">
          <button className="btn-float-tlp">
            <span className="parent-icon-tlp">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </button>
        </div>
      </a>
      <div className="main-parent-wa">
        <a
          className="parent-btn-wa"
          href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
        >
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
