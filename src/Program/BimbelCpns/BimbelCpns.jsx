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
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import SuccessTni from "../BimbelTni/SuccessTni/SuccessTni";
import BestprogramTni from "../../Components/BestProgram/BestProgramTni/BestProgramTni";
import BestProgramCpns from "../../Components/BestProgram/BestProgramCpns/BestProgramCpns";
import PaketBelajarCpns from "../../Components/PaketBelajar/PaketBelajarCpns/PaketBelajarCpns";
import MateriCpns from "./MateriCpns/MateriCpns";
import PromoCpns from "./PromoCpns/PromoCpns";
import TestimoniCpns from "../../Components/Testimoni/TestimoniCpns/TestimoniCpns";

const BimbelCpns = ({ setProgress }) => {
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
          content="Bimbel CPNS & PPPK - SKD, SKB, TWK, TIU, TKP Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel CPNS & PPPK - SKD, SKB, TWK, TIU, TKP Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderCpns />
        <BestProgramCpns />
        <SuccessTni />
        <PaketBelajarCpns />
        <MateriCpns />
        <GaleriKegiatan />
        <TestimoniCpns />
        <Voucer />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKotaCpns />
        <Faqtni />
        <Asalsekolah />
        <PromoCpns />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelCpns;
