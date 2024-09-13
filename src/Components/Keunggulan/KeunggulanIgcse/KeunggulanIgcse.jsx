import React, { useEffect, useState } from "react";
import keunggulanIcon from "../../../assets/keunggulan.png";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const KeunggulanIgcse = () => {
  const [keunggulan, setKeunggulan] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/keunggulan")
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-keunggulan">
        <h1 className="title-keunggulan">
          <img
            className="icon-keunggulan"
            src={keunggulanIcon}
            alt="Bimbel Privat Masuk PTN - Edumatrix Indonesia"
          />
          {t("keunggulan.title")}
        </h1>
        <div className="parent-card-keunggulan">
          {keunggulan.map((item, index) => (
            <img
              key={index}
              className="keunggulan-img"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default KeunggulanIgcse;
