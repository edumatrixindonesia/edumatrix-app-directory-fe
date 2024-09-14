import React from "react";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const WhyChooseIgcse = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">
            {t("mengapaMemilihKami.title")}
          </button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("mengapaMemilihKami.subTitle_1")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("mengapaMemilihKami.desk_1")}
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("mengapaMemilihKami.subTitle_2")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("mengapaMemilihKami.desk_2")}
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("mengapaMemilihKami.subTitle_3")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("mengapaMemilihKami.desk_3")}
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            {t("mengapaMemilihKami.subTitle_4")}
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              {t("mengapaMemilihKami.desk_4")}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyChooseIgcse;
