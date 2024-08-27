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
import SliderCpns from "../../Components/SlideTop/SliderCpns/SliderCpns";
import ListKotaCpns from "../../Components/Tab/TabCpns/ListKotaCpns";
import SliderBumn from "../../Components/SlideTop/SliderBumn/SliderBumn";
import ListKotaBumn from "../../Components/Tab/TabBumn/ListKotaBumn";
import SliderIup from "../../Components/SlideTop/SliderIup/SliderIup";
import ListKotaIup from "../../Components/Tab/TabIup/ListKotaIup";
import GaleriKegiatan from "../BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import SuccessSnbt from "../BimbelSnbt/SuccessSnbt/SuccessSnbt";
import Alumni from "../../Components/Alumni/Alumni";
import InfoCamp from "../../Components/InfoCamp/InfoCamp";
import PaketBelajarSnbt from "../../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import Video from "../../Components/Video/Video";
import PromoIup from "./PromoIup/PromoIup";
import PaketBelajarIup from "../../Components/PaketBelajar/PaketBelajarIup/PaketBelajarIup";

const BimbelIup = ({ setProgress }) => {
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
          content="Bimbel Persiapan IUP UGM, IUP ITB, IUP Unair, SIMAK KKI UI, UTBK SNBT Terbaik
          #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Persiapan IUP UGM, IUP ITB, IUP Unair, SIMAK KKI UI, UTBK SNBT
          Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderIup />
        <BestprogramSnbt />
        <SuccessSnbt />
        <PaketBelajarIup />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Alumni />
        <Liputan />
        <ListKotaIup />
        <Faqtni />
        <Asalsekolah />
        <PromoIup />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelIup;
