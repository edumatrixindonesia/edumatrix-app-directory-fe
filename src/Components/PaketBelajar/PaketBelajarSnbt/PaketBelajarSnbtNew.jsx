import React from "react";
import "./PaketBelajarSnbtNew.css";
import paketSnbtUtama from "../../../assets/pricelist_snbt/paket_utama.png";
import paketSnbtPrima from "../../../assets/pricelist_snbt/paket_prima.png";
import paketSnbtMaster from "../../../assets/pricelist_snbt/paket_master.png";
import { useNavigate } from "react-router-dom";

const PaketBelajarSnbtNew = () => {
  return (
    <React.Fragment>
      <div className="top-parent-paket-snbt-new">
        <h1 className="title-paket-snbt-new">PILIHAN PAKET BELAJAR</h1>
        <div className="super-parent-paket-snbt-new">
          <div className="parent-paket-snbt-new">
            <a
              className="parent-paket-snbt-new"
              href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20Utama%20bimbel%20UTBK%20SNBT."
            >
              <img src={paketSnbtUtama} alt="" className="img-paket-snbt-new" />
            </a>
            <a
              className="parent-paket-snbt-new"
              href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20Prima%20bimbel%20UTBK%20SNBT."
            >
              <img src={paketSnbtPrima} alt="" className="img-paket-snbt-new" />
            </a>
            <a
              className="parent-paket-snbt-new"
              href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20daftar%20Paket%20Master%20bimbel%20UTBK%20SNBT."
            >
              <img
                src={paketSnbtMaster}
                alt=""
                className="img-paket-snbt-new"
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarSnbtNew;
