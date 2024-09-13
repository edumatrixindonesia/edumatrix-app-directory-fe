import React from "react";
import "./PenjelasanIgcse.css";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMateri from "../../../assets/PRIVAT.png";
import iconProgramIgcse from "../../../assets/OSN.png";
import "../../../Components/Translator/i18n";
import { useTranslation } from "react-i18next";

const PenjelasanIgcse = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="container-penjelasan-igcse">
        <div className="penjelasan-igcse">
          <h3 className="title-penjelasan-igcse">{t("text.whatIgcse")}</h3>
          <p className="desk-penjelasan-igcse">{t("text.deskWhatIgcse")}</p>
        </div>

        <div className="penjelasan-igcse">
          <h3 className="title-penjelasan-igcse">{t("text.whatAlevel")}</h3>
          <p className="desk-penjelasan-igcse">{t("text.deskAlevel")}</p>
        </div>
      </div>

      <div className="penjelasan-ib">
        <h3 className="title-penjelasan-ib">{t("text.whatIB")}</h3>
        <p className="desk-penjelasan-ib">{t("text.deksIB")}</p>
      </div>

      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            <img className="img-materi-lpdp" src={iconProgramIgcse} alt="" />{" "}
            {t("whatDoesIGCSE.title")}
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("whatDoesIGCSE.subTitle_1")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("whatDoesIGCSE.desk_1")}
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("whatDoesIGCSE.subTitle_2")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("whatDoesIGCSE.desk_2")}
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("whatDoesIGCSE.subTitle_3")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("whatDoesIGCSE.desk_3")}
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("whatDoesIGCSE.subTitle_4")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("whatDoesIGCSE.desk_4")}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PenjelasanIgcse;
