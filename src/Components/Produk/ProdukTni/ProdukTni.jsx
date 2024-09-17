import React from "react";
import "../Produk.css";
import modulPolri from "../../../assets/produk_digital/modul_polri.png";
import modulTni from "../../../assets/produk_digital/modul_tni.png";
import ratting from "../../../assets/produk_digital/ratting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProdukTni = () => {
  return (
    <React.Fragment>
      <div className="super-parent-produk-tni">
        <h2 className="super-title-produk">MODUL LOLOS TNI - POLRI</h2>
        <div className="parent-card-ptn">
          <div className="card-produk">
            <img src={modulPolri} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul Lolos POLRI <br />
              </h2>
              <h3 className="harga-produk">Rp.150,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">131 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20Lolos%20POLRI%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_polri.ded6a1d545a3d3c5e82d.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={modulTni} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul Lolos TNI
                <br />
              </h2>
              <h3 className="harga-produk">Rp.150,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">97 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20Lolos%20TNI%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_tni.0bc5736da92d23003744.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProdukTni;
