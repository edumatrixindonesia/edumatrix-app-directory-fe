import React, { useEffect, useState } from "react";
import hotProgram from "../../../../assets/8 maret 2024.png";
import cardToefl from "../../../../assets/best_program/toefl/TOEFL (1).png";
import cardToeic from "../../../../assets/best_program/toefl/TOEIC.png";
import cardIelts from "../../../../assets/best_program/toefl/IELTS.png";
import cardEC from "../../../../assets/best_program/toefl/ENGLISH_CONVERSATION.png";
import cardIgcse from "../../../../assets/best_program/igcse/IGCSE (2).png";
import cardIB from "../../../../assets/best_program/igcse/IB (1).png"
import { useTranslation } from "react-i18next";
import "../../../../Components/Translator/i18n";

const BestProgramToefl2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="main-best-program-2">
        <h1 className="title-best-program-2">{t("program.title")}</h1>
        <h3 className="hot-program-2">
          <img
            className="icon-hot-program-2"
            src={hotProgram}
            alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
          />{" "}
          HOTS PROGRAM
        </h3>
        <div className="box-flex-best-program">
          <a
            className="box-flex-best-program"
            href={t("program.ctaUmumToefl")}
          >
              <img
                className="best-program-img-2"
                src={cardToefl}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
              <img
                className="best-program-img-2"
                src={cardToeic}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
              <img
                className="best-program-img-2"
                src={cardIelts}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
              <img
                className="best-program-img-2"
                src={cardEC}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
              <img
                className="best-program-img-2"
                src={cardIgcse}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
              <img
                className="best-program-img-2"
                src={cardIB}
                alt="Bimbel Les Privat Terbaik - Edumatrix Indonesia"
              />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BestProgramToefl2;
