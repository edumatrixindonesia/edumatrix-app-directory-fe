import React, { useEffect } from "react";
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
import SuccessOsn from "../BimbelOsn/SuccessOsn/SuccessOsn";
import GaleriKegiatan from "../BimbelOsn/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import BestProgramOsn from "../../Components/BestProgram/BestProgramOsn/BestProgramOsn";
import PaketBelajarOsn from "../../Components/PaketBelajar/PaketBelajarOsn/PaketBelajarOsn";
import PromoOsn from "../BimbelOsn/PromoOsn/PromoOsn";
import BestProgramKsn from "../../Components/BestProgram/BestProgramKsn/BestProgramKsn";
import ListKotaKsn from "../../Components/Tab/TabKsn/ListKotaKsn";

const BimbelKsn = ({ setProgress }) => {
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel, Les Privat dan Pelatihan Kompetisi Sains Nasional (KSN) Terbaik #1 -
          Edumatrix Indonesia"
        />
        <title>
          Bimbel dan Pelatihan Kompetisi Sains Nasional (KSN) - SD, SMP, SMA
          Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderOsn />
        <BestProgramKsn />
        <SuccessOsn />
        <PaketBelajarOsn />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKotaKsn />
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

export default BimbelKsn;
