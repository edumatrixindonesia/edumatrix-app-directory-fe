import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import Testimoni from "../../Components/Testimoni/Testimoni";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import Masterteacher from "../../Components/MasterTeacher/Masterteacher";
import Voucer from "../../Components/Voucer/Voucer";
import Footer from "../../Components/Footer/Footer";
import Bottombar from "../../Components/BottomBar/Bottombar";
import Floatingcta from "../../Components/FloatingCta/Floatingcta";
import BestprogramSnbt from "../../Components/BestProgram/BestProgramSnbt/BestProgramSnbt";
import Faqtni from "../../Components/Faq/FaqTni/FaqTni";
import Asalsekolah from "../../Components/AsalSekolah/Asalsekolah";
import SliderOsn from "../../Components/SlideTop/SliderOsn/SliderOsn";
import ListKotaOsn from "../../Components/Tab/TabOsn/ListKotaOsn";
import SuccessOsn from "./SuccessOsn/SuccessOsn";
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import BestProgramOsn from "../../Components/BestProgram/BestProgramOsn/BestProgramOsn";
import PaketBelajarOsn from "../../Components/PaketBelajar/PaketBelajarOsn/PaketBelajarOsn";
import PromoOsn from "./PromoOsn/PromoOsn";

const BimbelOsn = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Persiapan Kompetisi Olimpiade Sains Nasional (OSN) Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Persiapan Kompetisi Olimpiade Sains Nasional (OSN) Terbaik #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderOsn />
        <BestProgramOsn />
        <SuccessOsn />
        <PaketBelajarOsn />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKotaOsn />
        <Faqtni />
        <Asalsekolah />
        <PromoOsn />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelOsn;
