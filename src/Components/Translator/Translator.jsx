import React from "react";
import "./i18n";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import "./Translator.css";

const Translator = () => {
  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <div className="super-parent-translator">
        <p className="text-terjemahkan">Pilih bahasa</p>
        <div className="parent-btn-translator">
          <button
            className="btn-toogle"
            onClick={() => {
              i18n.changeLanguage("bn");
            }}
          >
            <img
              className="img-toogle"
              src="https://api.edulink-indonesia.com/images/83f28d0f0e07d67867af2845e98a050a.png"
              alt=""
            />
            Indonesia
          </button>

          <button
            className="btn-toogle"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            <img
              className="img-toogle"
              src="https://api.edulink-indonesia.com/images/8d9b74e67e37144f3f32ff48a85ae4c0.png"
              alt=""
            />
            Inggris
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Translator;
