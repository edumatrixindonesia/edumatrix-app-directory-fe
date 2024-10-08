import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import Navbar from "../Navbar/Navbar";
import modelAbout from "../../assets/aboutus/model_about_us.png";
import imgIsiAbout from "../../assets/aboutus/colase_learning_methode.png";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import tanyaProgram from "../../assets/tanya_program.png";
import ourMission from "../../assets/aboutus/our_mission.png";
import ourPhilosophy from "../../assets/aboutus/our_philosophy.png";
import ourPromise from "../../assets/aboutus/Our_promise.png";
import ourValue from "../../assets/aboutus/our_values.png";

const Aboutus = ({setProgress}) => {
  // const [aboutus, setAboutUs] = useState([]);

  // useEffect(() => {
  //   fetchAboutUs();
  // }, []);

  // const fetchAboutUs = () => {
  //   fetch("https://api.edulink-indonesia.com/aboutus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAboutUs(data);
  //       (data);
  //     });
  // };

  useEffect(() => {
    setProgress(60)
    setTimeout(() => {
      setProgress(100)
    }, 50)
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tentang Kami - #1 Edumatrix Indonesia</title>
        <link rel="canonical" href="https://app.edumatrix-indonesia.com/tentang-kami" />
      </Helmet>
      <Navbar />
      <div className="container-aboutus">
        <div className="parent-box-about">
          <div className="text-about">
            <h1 className="title-about">ABOUT US</h1>
            <div className="desk-about">
              <p className="perkenalan">
                EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk
                Persiapan Masuk Kedokteran, PTN dan Kedinasan. Program ini
                menjadi solusi terbaik untuk siswa agar sukses masuk UI ITB UGM
                IPB Unpad dan Perguruan Tinggi Negeri Favorit serta Sekolah
                Tinggi Kedinasan.
                <br />
                <a href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Edumatrix.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?">
                  <button className="btn-about">JOIN US</button>
                </a>
              </p>
            </div>
          </div>
          <img className="model-about" src={modelAbout} alt="Edumatrix Indonesia - Bimbel Terbaik" />
        </div>
        <div className="bg-isi-about">
          <img className="colase-about" src={imgIsiAbout} alt="Edumatrix Indonesia - Bimbel Terbaik" />
          <div className="content-about">
            <h1 className="title-content">Learning Methode</h1>
            <p className="paragraf-about">
              Metode Belajar yang digunakan yaitu personal one on one (1 siswa 1
              mentor) dan juga tersedia Small Class. Program belajar didesain
              secara sistematis, terstruktur, terukur dan teruji. Pembelajaran
              Tematik berdasar Statistik Soal yang diujikan. Fokus menerapkan
              Pola Sukses yang sudah proven.
              <br />
              <br />
              Pastikan pilih partner terbaik untuk kesuksesan dan masa depanmu,
              EDUMATRIX Indonesia!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="parent-moto">
        {aboutus.map((item, index) => (
          <img
            key={index}
            className="image-moto"
            src={"https://api.edulink-indonesia.com/images/" + item.image}
            alt="Edumatrix Indonesia - Bimbel Terbaik"
          />
        ))}
      </div> */}
      <div className="parent-moto">
        <img className="image-moto" src={ourMission} alt="Edumatrix Indonesia - Bimbel Terbaik" />
        <img className="image-moto" src={ourPhilosophy} alt="Edumatrix Indonesia - Bimbel Terbaik" />
        <img className="image-moto" src={ourPromise} alt="Edumatrix Indonesia - Bimbel Terbaik" />
        <img className="image-moto" src={ourValue} alt="Edumatrix Indonesia - Bimbel Terbaik" />
      </div>
      <a
        className="parent-img-modeltanya-program"
        href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
      >
        <img className="model-program-kota" src={tanyaProgram} alt="Edumatrix Indonesia - Bimbel Terbaik" />
      </a>
      <Floatingcta />
      <Bottombar />
      <Footer />
    </React.Fragment>
  );
};

export default Aboutus;
