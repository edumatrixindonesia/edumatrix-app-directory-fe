import React, { useEffect, useState } from "react";
import modelTanyaProgram from "../../../assets/ask_program.png";
import hotProgram from "../../../assets/8 maret 2024.png";
import cardToefl from "../../../assets/best_program/toefl/TOEFL (1).png";
import cardToeic from "../../../assets/best_program/toefl/TOEIC.png";
import cardIelts from "../../../assets/best_program/toefl/IELTS.png";
import cardEC from "../../../assets/best_program/toefl/ENGLISH_CONVERSATION.png";
import { useTranslation } from "react-i18next";
import "../../Translator/i18n";


const BestProgramToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="main-box">
        <div className="main-best-program">
          <h1 className="title-best-program">
            {/* OUR PROGRAMS <br /> TOEFL-TOEIC-IELTS */}
            {t("program.title")}
          </h1>
          <h3 className="hot-program">
            <img
              className="icon-hot-program"
              src={hotProgram}
              alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
            />{" "}
            HOTS PROGRAM
          </h3>
          <div className="parent-best-program">
            <div className="box-best-program">
              <div className="card-best-program">
                <a href={t("program.ctaUmumToefl")}>
                  <img
                    className="best-program-img"
                    src={cardToefl}
                    alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("program.ctaUmumToefl")}>
                  <img
                    className="best-program-img"
                    src={cardToeic}
                    alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("program.ctaUmumToefl")}>
                  <img
                    className="best-program-img"
                    src={cardIelts}
                    alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
                  />
                </a>
              </div>
              <div className="card-best-program">
                <a href={t("program.ctaUmumToefl")}>
                  <img
                    className="best-program-img"
                    src={cardEC}
                    alt="Bimbel UTBK SNBT Terbaik - Edumatrix Indonesia"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="parent-img-modeltanya-program"
          href={t("program.ctaUmumToefl")}
        >
          <img
            className="model-tanya-program"
            src={modelTanyaProgram}
            alt="Bimbel Masuk PTN Terbaik"
          />
        </a>
      </div>
    </React.Fragment>
  );
};

export default BestProgramToefl;
