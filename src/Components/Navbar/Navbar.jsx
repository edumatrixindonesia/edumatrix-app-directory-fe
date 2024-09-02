import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faBars,
  faSchool,
  faSignIn,
  faStar,
  faAnglesRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import iconSupercamp from "../../assets/supercamp.png";
import iconLiveClass from "../../assets/live_class.png";
import iconTrainingCamp from "../../assets/training_camp.png";
import LoadingBar from 'react-top-loading-bar'


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

  const goToBimbelSnbt = () => {
    navigate("/bimbel-snbt-terbaik");
  };

  const goToBimbelSupercamp = () => {
    navigate("/bimbel-supercamp-edumatrix");
  };

  const goToBimbelTni = () => {
    navigate("/bimbel-tni-polri-dan-sekolah-kedinasan");
  };

  const goToBimbelPrivat = () => {
    navigate("/bimbel-privat-tk-sd-smp-sma-mahasiswa");
  };

  const goToBimbelLpdp = () => {
    navigate("/bimbel-persiapan-seleksi-lpdp");
  };

  const goToBimbelCpns = () => {
    navigate("/bimbel-cpns-dan-pppk");
  };

  const goToBimbelBumn = () => {
    navigate("/bimbel-seleksi-bumn");
  };

  const goToBimbelIgcse = () => {
    navigate("/bimbel-kurikulum-igcse");
  };

  const goToBimbelIup = () => {
    navigate("/bimbel-iup-kki");
  };

  const goToBimbelOsn = () => {
    navigate("/bimbel-osn");
  };

  const goToBimbelToefl = () => {
    navigate("/bimbel-toefl-toeic-ielts-dan-english-conversation");
  };

  const goToBimbelKedokteran = () => {
    navigate("/bimbel-masuk-kedokteran");
  };

  const goToProduk = () => {
    navigate("/produk");
  };

  const goToBimbelKsn = () => {
    navigate("/pelatihan-osn-ksn");
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

          <img
            onClick={() => goToHome()}
            alt="Logo Edumatrix Indonesia"
            className="logo-edumatrix"
            src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png"
          />

          <ul className="menu-items">
            <li>
              <a onClick={() => goToHome()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} /> Home
              </a>
            </li>
            <li className="services">
              <a className="menu-nav">
                Program
                <FontAwesomeIcon
                  className="icon-navbar-1"
                  icon={faChevronDown}
                />
              </a>
              <ul className="dropdown">
                <div className="fill-dropdown">
                  <li onClick={() => goToBimbelKedokteran()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel Kedokteran
                    </a>
                  </li>
                  <li onClick={() => goToBimbelSupercamp()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Supercamp UTBK SNBT
                    </a>
                  </li>
                  <li onClick={() => goToBimbelSnbt()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel UTBK SNBT
                    </a>
                  </li>
                  <li onClick={() => goToBimbelTni()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel TNI - POLRI
                    </a>
                  </li>
                  <li onClick={() => goToBimbelPrivat()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat TK - SD - SMP - SMA
                    </a>
                  </li>
                  <li onClick={() => goToBimbelLpdp()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel LPDP
                    </a>
                  </li>
                  <li onClick={() => goToBimbelCpns()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel CPNS & PPPK
                    </a>
                  </li>
                  <li onClick={() => goToBimbelBumn()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel BUMN
                    </a>
                  </li>
                  <li onClick={() => goToBimbelIgcse()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      IGCSE, O Level, A Level & IB Tutor
                    </a>
                  </li>
                  <li onClick={() => goToBimbelIup()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel IUP - KKI
                    </a>
                  </li>
                  <li onClick={() => goToBimbelOsn()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel OSN
                    </a>
                  </li>
                  <li onClick={() => goToBimbelKsn()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Pelatihan OSN/KSN
                    </a>
                  </li>
                  <li onClick={() => goToBimbelToefl()}>
                    <a className="child-dropdown" href="">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Bimbel TOEFL - TOEIC - IELTS
                    </a>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <a onClick={() => goToProduk()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Produk
              </a>
            </li>
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
            <li className="parent-btn-daftar">
              <a
                className="menu-nav-daftar"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
              >
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} />{" "}
                DAFTAR
              </a>
            </li>
          </ul>
          {/* <img
            onClick={() => goToHome()}
            alt="Logo Edumatrix Indonesia"
            className="logo"
            src="https://edumatrix-education.vercel.app/static/media/logo_edm.d190f8a81fb23ea9ea9b.png"
          /> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
