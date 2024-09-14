import React from "react";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconProgramIgcse from "../../../assets/OSN.png";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const OnlyIgcseEdm = () => {
  const { t } = useTranslation();
  return (
    <div className="container-materi-tni">
      <div className="box-materi-akpol">
        <button className="title-materi-lpdp">{t("onlyAtEDM.title")}</button>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          {t("onlyAtEDM.subTitle_1")}
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          {t("onlyAtEDM.subTitle_2")}
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          {t("onlyAtEDM.subTitle_3")}
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          {t("onlyAtEDM.subTitle_4")}
        </h4>
        <h4 className="title-list-materi-lpdp">
          <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
          {t("onlyAtEDM.subTitle_5")}
        </h4>
      </div>
    </div>
  );
};

export default OnlyIgcseEdm;
