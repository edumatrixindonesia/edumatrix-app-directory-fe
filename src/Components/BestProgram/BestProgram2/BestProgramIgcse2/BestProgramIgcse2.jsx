import React, { useEffect, useState } from "react";
import hotProgram from "../../../../assets/8 maret 2024.png";
import cardIgcse from "../../../../assets/best_program/igcse/IGCSE (2).png";
import cardOlevel from "../../../../assets/best_program/igcse/O_LEVEL (1).png";
import cardAlevel from "../../../../assets/best_program/igcse/A_LEVEL (1).png";
import cardIB from "../../../../assets/best_program/igcse/IB (1).png";
import cardOverseas from "../../../../assets/best_program/igcse/OVERSEAS_STUDENT_PREPARATION (1).png"
import cardAP from "../../../../assets/best_program/igcse/AP 1.png";
import { useTranslation } from "react-i18next";
import "../../../Translator/i18n";

const BestProgramIgcse2 = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* <div className="main-box-2"> */}
      <div className="main-best-program-2">
        <h1 className="title-best-program-2">
        {t("text.titleProgram")}
        </h1>
        <h3 className="hot-program-2">
          <img
            className="icon-hot-program-2"
            src={hotProgram}
            alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
          />{" "}
          HOTS PROGRAM
        </h3>
        {/* <div className="parent-best-program-2"> */}
        {/* <div className="box-best-program-2"> */}
        <div className="box-flex-best-program">
          <a
            className="box-flex-best-program"
            href={t("text.ctaUmum")}
          >
            <img
              className="best-program-img-2"
              src={cardIgcse}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
            <img
              className="best-program-img-2"
              src={cardOlevel}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
            <img
              className="best-program-img-2"
              src={cardAlevel}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
            <img
              className="best-program-img-2"
              src={cardIB}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
            <img
              className="best-program-img-2"
              src={cardOverseas}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
            <img
              className="best-program-img-2"
              src={cardAP}
              alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default BestProgramIgcse2;
