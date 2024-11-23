import React, { useEffect, useState } from "react";
import "./SuccessStory.css";
import imgSalma from "../../assets/success_story/snbt/new/Salma Nisrina.png";
import imgRegina from "../../assets/success_story/snbt/new/Regina.png";
import imgZaidan from "../../assets/success_story/snbt/new/zaidan.png";
import imgSalmaFitria from "../../assets/success_story/snbt/new/Salma Fitria.png";
import imgCharisa from "../../assets/success_story/snbt/new/Charisa.png";
import noImgMan from "../../assets/success_story/snbt/new/no_name_cowok.png";
import noImgWoman from "../../assets/success_story/snbt/new/No_Name_cewek.png";
import ipb from "../../assets/logo_ptn/ipb.png";
import ugm from "../../assets/logo_ptn/ugm.png";
import itb from "../../assets/logo_ptn/itb.png";
import undip from "../../assets/logo_ptn/undip (1).png";
import unair from "../../assets/logo_ptn/unair.png";
import ui from "../../assets/logo_ptn/ui.png";
import unj from "../../assets/logo_ptn/unj.png";
import unesa from "../../assets/logo_ptn/unesa.png";
import unand from "../../assets/logo_ptn/unand.png";
import ub from "../../assets/logo_ptn/ub.png";
import um from "../../assets/logo_ptn/um.png";
import unri from "../../assets/logo_ptn/unri.png";
import uny from "../../assets/logo_ptn/uny.png";
import uinSuka from "../../assets/logo_ptn/uin.png";
import uinSg from "../../assets/logo_ptn/uin sg.png";
import unila from "../../assets/logo_ptn/unila.png";
import syakKuala from "../../assets/logo_ptn/unsyiah.png";
import Marquee from "react-fast-marquee";
import SuccessOsn from "../../Program/BimbelOsn/SuccessOsn/SuccessOsn";
import SuccessTni from "../../Program/BimbelTni/SuccessTni/SuccessTni";

const SuccessStory = () => {
  const [successSnbt, setSuccessSnbt] = useState([]);
  const [successOsn, setSuccessOsn] = useState([]);
  const [successTni, setSuccessTni] = useState([]);

  useEffect(() => {
    fetchSuccessSnbt();
    fetchSuccessOsn();
    fetchSuccessTni();
  }, []);

  const fetchSuccessSnbt = () => {
    fetch("https://api.edulink-indonesia.com/successsnbt")
      .then((res) => res.json())
      .then((data) => {
        setSuccessSnbt(data);
      });
  };

  const fetchSuccessOsn = () => {
    fetch("https://api.edulink-indonesia.com/successosn")
      .then((res) => res.json())
      .then((data) => {
        setSuccessOsn(data);
      });
  };

  const fetchSuccessTni = () => {
    fetch("https://api.edulink-indonesia.com/successtni")
      .then((res) => res.json())
      .then((data) => {
        setSuccessTni(data);
      });
  };

  return (
    <React.Fragment>
      <div className="box-success-story-all">
        <h1 className="title-success-story-all">SUCCESS STORY</h1>
        <div className="parent-success-story-all">
          {/* SNBT */}
          <h2 className="subtitle-all-success-story">UTBK - SNBT</h2>
          <div
            className="parent-child-marquee-success-snbt"
            style={{ marginTop: "20px" }}
          >
            <Marquee className="package-marquee" gradient={false} speed={100}>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={imgSalma}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Salma Nisrina
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Institut Pertanian Bogor
                  </h3>
                  <img
                    src={ipb}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={imgRegina}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Regina Keshi
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos CBT UGM
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Gadjah Mada
                  </h3>
                  <img
                    src={ugm}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={imgZaidan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Zaidan hafiq Abid
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Institut Teknologi Bandung
                  </h3>
                  <img
                    src={itb}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={imgSalmaFitria}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Salma Fitria Nuriz
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos CBT UGM
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Gadjah Mada
                  </h3>
                  <img
                    src={ugm}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={imgCharisa}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Charisa Qolby El Karomy
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UM UNDIP
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Diponegoro
                  </h3>
                  <img
                    src={undip}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgWoman}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Sheval Haevani Ardita
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos CBT UGM
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Gadjah Mada
                  </h3>
                  <img
                    src={ugm}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Khristofer Abimanyu
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Lampung
                  </h3>
                  <img
                    src={unila}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgWoman}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alifia Zaneta Nugroho
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos Ujian Mandiri
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Airlangga
                  </h3>
                  <img
                    src={unair}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Indonesia
                  </h3>
                  <img
                    src={ui}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Negeri Jakarta
                  </h3>
                  <img
                    src={unj}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Airlangga
                  </h3>
                  <img
                    src={unair}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Negeri Surabaya
                  </h3>
                  <img
                    src={unesa}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Andalas
                  </h3>
                  <img
                    src={unand}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Institut Pertanian Bogor
                  </h3>
                  <img
                    src={ipb}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Brawijaya
                  </h3>
                  <img
                    src={ub}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Negeri Malang
                  </h3>
                  <img
                    src={um}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Alvito Danish Septiano
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Riau
                  </h3>
                  <img
                    src={unri}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Ibrahim Varkan Syahrafi
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos Ujian Mandiri
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Airlangga
                  </h3>
                  <img
                    src={unair}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Ibrahim Varkan Syahrafi
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos Ujian Mandiri
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Negeri Yogyakarta
                  </h3>
                  <img
                    src={uny}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Jose Evander Perdana
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos SIMAK KKI
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Indonesia
                  </h3>
                  <img
                    src={ui}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Abdul Hamid Ahmad
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UMPTKIN
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    UIN Sunan Kalijaga
                  </h3>
                  <img
                    src={uinSuka}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgWoman}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Naura Sasikirana
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UMPTKIN
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    UIN Sunan Kalijaga
                  </h3>
                  <img
                    src={uinSuka}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Naufal Ammar Rahhadatul A
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UMPTKIN
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    UIN Sunan Gunung Djati
                  </h3>
                  <img
                    src={uinSg}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgWoman}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Fatimah Az Zahra
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    UIN Sunan Gunung Djati
                  </h3>
                  <img
                    src={uinSg}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
              {/* === */}
              <div className="parent-lolos-ptn-success-story-new">
                <img
                  src={noImgMan}
                  className="image-lolos-ptn-success-story-new"
                />
                <div className="parent-name-lolos-ptn-success-story-new">
                  <h2 className="name-lolos-ptn-success-story-new">
                    Fadil Arvia Albahrin
                  </h2>
                  <p className="desk-lolos-ptn-success-story-new">
                    Lolos UTBK SNBT
                  </p>
                  <h3 className="nama-univ-success-story-new">
                    Universitas Syiah Kuala
                  </h3>
                  <img
                    src={syakKuala}
                    alt=""
                    className="image-logo-ptn-success-story-new"
                  />
                </div>
              </div>
            </Marquee>
          </div>

          {/* OSN */}
          <SuccessOsn />
          {/* <h2 className="subtitle-all-success-story">
            OLIMPIADE SAINS NASIONAL
          </h2>
          <div className="parent-child-success-story-all">
            {successOsn.map((item, index) => (
              <img
                key={index}
                className="child-success-story-all"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
              />
            ))}
          </div> */}
          {/* TNI POLRI */}
          <SuccessTni />
          {/* <h2 className="subtitle-all-success-story">
            TNI - POLRI & SEKOLAH KEDINASAN
          </h2>
          <div className="parent-child-success-story-all">
            {successTni.map((item, index) => (
              <img
                key={index}
                className="child-success-story-all"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
              />
            ))}
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessStory;
