import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faBars,
  faSchool,
  faSignIn,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import iconSupercamp from "../../assets/supercamp.png";
import iconLiveClass from "../../assets/live_class.png";
import iconTrainingCamp from "../../assets/training_camp.png";

const Navbar = () => {
  const navigate = useNavigate();

  const goToKelas = () => {
    navigate("/pilihan-kelas");
  };

  const goToAbout = () => {
    navigate("/tentang-kami");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <ul className="menu-items">
            <li>
              <a onClick={() => goToHome()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} /> Home
              </a>
            </li>
            {/* <li class="services">
              <a className="menu-nav">
                Program
                <FontAwesomeIcon
                  className="icon-navbar"
                  icon={faArrowCircleDown}
                />
              </a>
              <ul className="dropdown">
                <li>
                  <a
                    className="child-dropdown"
                    href="https://app.edumatrix-indonesia.com/camp-edumatrix"
                  >
                    <img className="icon-dropdown" src={iconSupercamp} alt="" />
                    Supercamp/Karantina - Sukses Masuk PTN 2024
                  </a>
                </li>
                <li>
                  <a
                    className="child-dropdown"
                    href="https://app.edumatrix-indonesia.com/"
                  >
                    <img className="icon-dropdown" src={iconLiveClass} alt="" />
                    Live Class - Sukses Masuk PTN 2024
                  </a>
                </li>
                <li>
                  <a
                    className="child-dropdown"
                    href="https://app.edumatrix-indonesia.com/bimbel-tni-polri-dan-sekolah-kedinasan-terbaru-2024/"
                  >
                    <img
                      className="icon-dropdown"
                      src={iconTrainingCamp}
                      alt=""
                    />
                    Training Camp - Sukses Masuk TNI/POLRI & Sekolah Kedinasan
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <a onClick={() => goToAbout()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                About Us
              </a>
            </li>
            {/* <li>
              <a onClick={() => goToKelas()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Program
              </a>
            </li> */}
            <li>
              <a onClick={() => goToKelas()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Kelas
              </a>
            </li>
            <li>
              <a
                className="menu-nav-daftar"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
              >
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} />{" "}
                DAFTAR
              </a>
            </li>
          </ul>
          <img
            onClick={() => goToHome()}
            alt="Logo Edumatrix Indonesia"
            className="logo"
            src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png"
          />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
