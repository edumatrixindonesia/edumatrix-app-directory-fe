import React, { useEffect, useState } from "react";
import modelTanyaProgram from "../../../assets/ask_program.png";
import hotProgram from "../../../assets/8 maret 2024.png";
import cardIgcse from "../../../assets/best_program/igcse/IGCSE (2).png";
import cardOlevel from "../../../assets/best_program/igcse/O_LEVEL (1).png"
import cardAlevel from "../../../assets/best_program/igcse/A_LEVEL (1).png"
import cardIB from "../../../assets/best_program/igcse/IB (1).png"

import { useTranslation } from "react-i18next";
import "../../Translator/i18n";

const BestProgramIgcse = () => {
  // const [program, setProgram] = useState([]);

  // useEffect(() => {
  //   fetchProgram();
  // }, []);

  // const fetchProgram = () => {
  //   fetch("https://api.edulink-indonesia.com/bestprogramprivat")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProgram(data);
  //       data;
  //     });
  // };

  const { t, i18n } = useTranslation();
  
  return (
    <React.Fragment>
      <div className="main-box">
        <div className="main-best-program">
          <h1 className="title-best-program">
            {/* INTERNATIONAL <br /> PROGRAMS WE OFFER */}
            {t("text.titleProgram")}
          </h1>
          <h3 className="hot-program">
            <img
              className="icon-hot-program"
              src={hotProgram}
              alt="Bimbel Masuk TNI - Polri"
            />{" "}
            HOTS PROGRAM
          </h3>
          <div className="parent-best-program">
            <div className="box-best-program">
              {/* {program.map((item, index) => ( */}
              <div className="card-best-program">
                <a href={t("text.ctaUmum")}>
                  <img
                    className="best-program-img"
                    src={cardIgcse}
                    alt="Bimbel Masuk TNI - Polri"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("text.ctaUmum")}>
                  <img
                    className="best-program-img"
                    src={cardOlevel}
                    alt="Bimbel Masuk TNI - Polri"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("text.ctaUmum")}>
                  <img
                    className="best-program-img"
                    src={cardAlevel}
                    alt="Bimbel Masuk TNI - Polri"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("text.ctaUmum")}>
                  <img
                    className="best-program-img"
                    src={cardIB}
                    alt="Bimbel Masuk TNI - Polri"
                  />
                </a>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
        <a
          className="parent-img-modeltanya-program"
          href={t("text.ctaUmum")}
        >
          <img
            className="model-tanya-program"
            src={modelTanyaProgram}
            alt="Bimbel Sekolah Kedinasa Terbaik"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default BestProgramIgcse;
