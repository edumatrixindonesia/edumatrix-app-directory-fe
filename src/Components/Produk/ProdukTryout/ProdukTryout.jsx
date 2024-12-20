import React from "react";
import "../Produk.css";
import toSnbt from "../../../assets/produk_digital/tryout_snbt.png";
import toLpdp from "../../../assets/produk_digital/tryout_lpdp.png";
import toSimakUi from "../../../assets/produk_digital/tryout_simak_ui.png";
import toSimakkki from "../../../assets/produk_digital/tryout_kki_iup.png";
import toCpns from "../../../assets/produk_digital/tryout_cpns.png";
import toPsikotes from "../../../assets/produk_digital/tryout_psikotes_tni_polri.png";
import toAkademik from "../../../assets/produk_digital/tryout_akademik_tni_polri.png";
import toSekdin from "../../../assets/produk_digital/tryout_Sekolah_kedinasan.png";

import ratting from "../../../assets/produk_digital/ratting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProdukTryout = () => {
  return (
    <React.Fragment>
      <div className="super-parent-produk-tni">
        <h2 className="super-title-produk">PAKET TRYOUT INTENSIVE</h2>
        <div className="parent-card-to">
          <div className="card-produk">
            <img src={toSnbt} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout <br /> UTBK SNBT
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">5 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toLpdp} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout <br /> TBS LPDP
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">9 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toSimakUi} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout <br /> SIMAK UI
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">1 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toSimakkki} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout <br /> SIMAK KKI - IUP
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">0 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toCpns} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout <br /> CPNS & PPPK
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">13 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* <div className="card-produk">
            <img src={toPsikotes} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout Psikotes <br /> TNI - POLRI
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">150 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toAkademik} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout Akademik <br /> TNI - POLRI
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">150 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="card-produk">
            <img src={toSekdin} alt="" className="header-produk" />
            <div className="fill-produk">
              <h2 className="title-produk">
                Paket - Tryout Sekolah <br /> Kedinasan
              </h2>
              <h3 className="harga-produk">Rp50,000,-</h3>
              <div className="parent-ratting-produk">
                <p className="text-produk-terjual">150 Terjual</p>
                <img src={ratting} alt="" className="star-ratting-produk" />
              </div>
              <a className="btn-pesan-produk-sekarang" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Saya%20ingin%20pesan%20Paket%20Tryout.%20Apakah%20masih%20tersedia?">
                <FontAwesomeIcon className="icon-keranjang-produk" icon={faCartShopping} />
                Pesan Sekarang
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </React.Fragment>
  );
};

export default ProdukTryout;
