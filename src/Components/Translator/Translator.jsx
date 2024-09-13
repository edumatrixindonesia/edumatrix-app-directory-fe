import React from "react";
import "./i18n";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import "./Translator.css";

const Translator = () => {
  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <div className="parent-btn-translator">
        <button
          className="btn-translator"
          onClick={() => {
            i18n.changeLanguage("bn");
          }}
        >
          Indoesia
        </button>

        <button
          className="btn-translator"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          Inggris
        </button>
      </div>
    </React.Fragment>
  );
};

export default Translator;
