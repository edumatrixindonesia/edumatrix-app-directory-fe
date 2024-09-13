import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMateri from "../../../assets/PRIVAT.png";
import React from "react";
import "../../../Components/Translator/i18n";
import { useTranslation } from "react-i18next";

const MateriIgcse = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            <img className="img-materi-lpdp" src={iconMateri} alt="" />{" "}
            {t("materiIgcse.title")}
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_1")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_2")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_3")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_4")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_5")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_6")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_7")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_8")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_9")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_10")}
          </h4>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("materiIgcse.pointMapel_11")}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MateriIgcse;
