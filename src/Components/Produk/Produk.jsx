import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Produk.css";

import ProdukPtn from "./ProdukPtn/ProdukPtn";
import SlidetTop from "../SlideTop/Slidertop";
import ProdukTni from "./ProdukTni/ProdukTni";
import ProdukOsn from "./ProdukOsn/ProdukOsn";
import ProdukTryout from "./ProdukTryout/ProdukTryout";
import Floatingcta from "../FloatingCta/Floatingcta";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Produk = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Jual Modul dan Paket Tryout UTBK SNBT, SIMAK UI, CBT UGM, TNI-POLRI, Sekolah Kedinasan & OSD SD-SMP-SMA"
        />
        <title>
          Jual Modul dan Paket Tryout UTBK SNBT, SIMAK UI, CBT UGM, TNI-POLRI,
          Sekolah Kedinasan & OSD SD-SMP-SMA
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-produk">
        <SlidetTop />
        <ProdukPtn />
        <ProdukTni />
        <ProdukOsn />
        {/* <ProdukTryout /> */}
        <br />
      </div>
      <Floatingcta />
      <Footer />
    </React.Fragment>
  );
};

export default Produk;
