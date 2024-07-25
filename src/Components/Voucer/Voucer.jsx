import React from "react";
import "./Voucer.css";
import klaimVoucher from "../../assets/voucher.png";
import dapatkanDiskon from "../../assets/diskon.png";

const Voucer = () => {
  return (
    <div className="bg-voucer">
      <p className="title-vouvher">
        Jangan lupa tukarkan kode voucher dan dapatkan diskon menarik
      </p>
      <div className="parent-btn">
        <a className="btn-klaim-voucher" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Apakah%20Voucher%20Bimbel%20Masih%20Tersedia?">
          <button className="btn-klaim-voucher">
            <img className="icon-klaim-voucher" src={klaimVoucher} alt="Bimbel Berkualitas" />{" "}
            KLAIM VOUCHERMU DISINI
          </button>
        </a>
        <a className="btn-dapatkan-diskon" href="https://api.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Nia%20https://app.edumatrix-indonesia.com,%20Apakah%20Diskon%20Bimbel%20Masih%20Tersedia?">
        <button className="btn-dapatkan-diskon">
          <img className="icon-dapatkan-diskon" src={dapatkanDiskon} alt="Bimbel Berkualitas" />
          DAPATKAN DISKON MENARIK DISINI
        </button>
        </a>
      </div>
    </div>
  );
};

export default Voucer;
