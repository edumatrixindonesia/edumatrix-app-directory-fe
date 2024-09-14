import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../../Translator/i18n";

const PaketBelajarToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">
          {t("paketToeflPriority.title")}
        </h1>
        <div className="container-paket-snbt">
          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PRIORITY</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_1")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              {t("paketToeflPriority.point_2")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_3")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_4")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_5")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_6")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_7")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_8")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_9")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_10")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflPriority.point_11")}
            </p>
            <a href={t("paketToeflPriority.cta")}>
              <button className="btn-paket-snbt">{t("paketToeflPriority.button")}</button>
            </a>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">DELUXE</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_1")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />
              {t("paketToeflDeluxe.point_2")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_3")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_4")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_5")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_6")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_7")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_8")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_9")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_10")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketToeflDeluxe.point_11")}
            </p>
            <a href={t("paketToeflDeluxe.cta")}>
              <button className="btn-paket-snbt">{t("paketToeflDeluxe.button")}</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarToefl;
