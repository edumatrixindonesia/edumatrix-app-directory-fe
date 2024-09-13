import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../Components/Translator/i18n";
import { useTranslation } from "react-i18next";

const PaketBelajarIgcse = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="parent-container-paket-snbt">
        <h1 className="main-title-paket-snbt">
          {t("paketIGCSEPriority.title")}
        </h1>
        <div className="container-paket-snbt">
          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">PRIORITY</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_1")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_2")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_3")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_4")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_5")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_6")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_7")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_8")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_9")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEPriority.point_10")}
            </p>
            <a href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Priority%20Package%20International%20Curriculum%20tutoring.">
              <button className="btn-paket-snbt">
                {t("paketIGCSEPriority.button")}
              </button>
            </a>
          </div>

          <div className="card-paket-snbt">
            <div className="title-paket-snbt">
              <h1 className="nama-paket-lpdp">DELUXE</h1>
            </div>
            <hr className="garis-pembatas-paket-snbt" />
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_1")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_2")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_3")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_4")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_5")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_6")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_7")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_8")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_9")}
            </p>
            <p className="isi-paket-snbt">
              <FontAwesomeIcon className="icon-paket-snbt" icon={faCheck} />{" "}
              {t("paketIGCSEDeluxe.point_10")}
            </p>
            <a href="https://api.whatsapp.com/send?phone=6285600422188&text=Hello%20Miss%20Sari%20https://app.edumatrix-indonesia.com,%20I%20want%20to%20register%20for%20the%20Deluxe%20Package%20International%20Curriculum%20tutoring.">
              <button className="btn-paket-snbt">
                {t("paketIGCSEPriority.button")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarIgcse;
