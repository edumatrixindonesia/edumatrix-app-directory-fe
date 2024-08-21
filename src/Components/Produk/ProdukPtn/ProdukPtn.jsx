import React from "react";
import "../Produk.css";
import modulUtbk from "../../../assets/produk_digital/modul_utbk_snbt.png";
import modulPengayaan from "../../../assets/produk_digital/modul_pengayaan_utbk_snbt.png";
import modulSimakUi from "../../../assets/produk_digital/modul_simak_ui.png";
import ratting from "../../../assets/produk_digital/ratting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProdukPtn = () => {
  return (
    <React.Fragment>
      <div className="super-parent-produk">
        <h2 className="super-title-produk">
          MODUL LOLOS KEDOKTERAN & PTN FAVORIT
        </h2>
        <div className="parent-card-ptn">
          <div className="card-produk">
            <img src={modulUtbk} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul UTBK - SNBT <br /> 2025
              </h2>
              <h3 className="harga-produk">Rp225.000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">80 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20UTBK%20SNBT%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_utbk_snbt.3bee47450aba40a0a2cd.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={modulPengayaan} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul Bab Pengayaan <br /> UTBK - SNBT
              </h2>
              <h3 className="harga-produk">Rp225.000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">15 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20Pengayaan%20UTBK%20SNBT%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_pengayaan_utbk_snbt.bb0a2b9c83a9552b4015.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={modulSimakUi} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul SIMAK UI Update <br /> Mei - 2024
              </h2>
              <h3 className="harga-produk">Rp175.000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">78 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20SIMAK%20UI%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_simak_ui.4f9363d0646c2b7a04ef.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProdukPtn;
