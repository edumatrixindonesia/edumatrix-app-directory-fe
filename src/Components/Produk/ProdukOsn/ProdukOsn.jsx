import React from "react";
import "../Produk.css";
import modulOsnSd from "../../../assets/produk_digital/modul_osn_sd.png";
import modulOsnSmp from "../../../assets/produk_digital/modul_osn_smp.png";
import modulOsnSma from "../../../assets/produk_digital/modul_osn_sma.png";
import ratting from "../../../assets/produk_digital/ratting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProdukOsn = () => {
  return (
    <React.Fragment>
      <div className="super-parent-produk-tni">
        <h2 className="super-title-produk">MODUL JUARA OSN</h2>
        <div className="parent-card-ptn">
          <div className="card-produk">
            <img src={modulOsnSd} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">Modul OSN untuk tingkat SD</h2>
              <h3 className="harga-produk">Rp.50,000</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">11 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20OSN%20SD%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_osn_sd.90d73dddd82109ebb357.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={modulOsnSmp} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul OSN untuk tingkat SMP
                <br />
              </h2>
              <h3 className="harga-produk">Rp.50,000</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">89 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20OSN%20SMP%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_osn_smp.7856e662e8d78c22392e.png%0aApakah%20masih%20tersedia?"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={modulOsnSma} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Modul OSN untuk tingkat SMA
                <br />
              </h2>
              <h3 className="harga-produk">Rp.50,000</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">5 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a
                className="btn-pesan-produk-sekarang"
                href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Modul%20OSN%20SMA%0a*Seperti%20Berikut%20:*%0ahttps://app.edumatrix-indonesia.com/static/media/modul_osn_sma.1f920af2944c514d8dcb.png%0aApakah%20masih%20tersedia?"
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

export default ProdukOsn;
