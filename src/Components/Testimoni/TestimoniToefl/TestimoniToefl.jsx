import React from "react";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";

const TestimoniToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="super-parent-testimoni-cpns">
        <h1 className="title-testimoni">{t("testimoni.title")}</h1>
        <div className="parent-testimoni-cpns">
          <img
            className="img-testimoni-cpns"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/12/ELma-Toefl.jpeg"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestimoniToefl;
