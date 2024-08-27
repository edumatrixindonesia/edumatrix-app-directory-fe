import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import SliderSnbt from "../../Components/SlideTop/SliderSnbt/SliderSnbt";
import Testimoni from "../../Components/Testimoni/Testimoni";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import Masterteacher from "../../Components/MasterTeacher/Masterteacher";
import Voucer from "../../Components/Voucer/Voucer";
import Footer from "../../Components/Footer/Footer";
import Bottombar from "../../Components/BottomBar/Bottombar";
import Floatingcta from "../../Components/FloatingCta/Floatingcta";
import BestprogramSnbt from "../../Components/BestProgram/BestProgramSnbt/BestProgramSnbt";
import ListUtbkSnbt from "../../Components/Tab/TabUtbkSnbt/ListUtbkSnbt";
import Listkota from "../../Components/Tab/Listkota";
import Faqtni from "../../Components/Faq/FaqTni/FaqTni";
import Asalsekolah from "../../Components/AsalSekolah/Asalsekolah";
import SliderLpdp from "../../Components/SlideTop/SliderLpdp/SliderLpdp";
import ListKotaLpdp from "../../Components/Tab/TabLpdp/ListKotaLpdp";
import SliderPrivat from "../../Components/SlideTop/SliderPrivat/SliderPrivat";
import ListKotaPrivat from "../../Components/Tab/TabPrivat/ListKotaPrivat";
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import SuccessOsn from "../BimbelOsn/SuccessOsn/SuccessOsn";
import BestprogramPrivat from "../../Components/BestProgram/BestProgramPrivat/BestProgramPrivat";
import Alumni from "../../Components/Alumni/Alumni";
import PaketBelajarPrivat from "../../Components/PaketBelajar/PaketBelajarPrivat/PaketBelajarPrivat";

const BimbelPrivat = ({ setProgress }) => {
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
          content="Bimbel Privat TK - SD - SMP - SMA & Mahasiswa Terbaik #1 - Edumatrix
          Indonesia"
        />
        <title>
          Bimbel Privat TK - SD - SMP - SMA & Mahasiswa Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderPrivat />
        <BestprogramPrivat />
        <SuccessOsn />
        <PaketBelajarPrivat />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Alumni />
        <Liputan />
        <ListKotaPrivat />
        <Faqtni />
        <Asalsekolah />
        <PromoHomepage />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelPrivat;
