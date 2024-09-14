import React from "react";
import "./PenjelasanToefl.css";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";


const PenjelasanToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="container-penjelasan-toefl">
        <div className="penjelasan-toefl-1">
          <h3 className="title-penjelasan-toefl">{t("penjelasanToefl.title_1")}</h3>
          <p className="desk-penjelasan-toefl">
          {t("penjelasanToefl.desk_1")}
          </p>
        </div>

        <div className="penjelasan-toefl-1">
          <h3 className="title-penjelasan-toefl">{t("penjelasanToefl.title_2")}</h3>
          <p className="desk-penjelasan-toefl">
          {t("penjelasanToefl.desk_2")}
          </p>
        </div>
      </div>

      <div className="container-penjelasan-toefl-1">
        <div className="penjelasan-toefl">
          <h3 className="title-penjelasan-toefl">{t("penjelasanToefl.title_3")}</h3>
          <p className="desk-penjelasan-toefl">
          {t("penjelasanToefl.desk_3")}
          </p>
        </div>

        <div className="penjelasan-toefl">
          <h3 className="title-penjelasan-toefl">{t("penjelasanToefl.title_4")}</h3>
          <p className="desk-penjelasan-toefl">
          {t("penjelasanToefl.desk_4")}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PenjelasanToefl;
