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
import BestprogramPrivat from "../../Components/BestProgram/BestProgramPrivat/BestProgramPrivat";
import ListUtbkSnbt from "../../Components/Tab/TabUtbkSnbt/ListUtbkSnbt";
import Listkota from "../../Components/Tab/Listkota";
import Faqtni from "../../Components/Faq/FaqTni/FaqTni";
import Asalsekolah from "../../Components/AsalSekolah/Asalsekolah";
import SliderLpdp from "../../Components/SlideTop/SliderLpdp/SliderLpdp";
import ListKotaLpdp from "../../Components/Tab/TabLpdp/ListKotaLpdp";
import SliderCpns from "../../Components/SlideTop/SliderCpns/SliderCpns";
import ListKotaCpns from "../../Components/Tab/TabCpns/ListKotaCpns";
import SliderIgcse from "../../Components/SlideTop/SliderIgcse/SliderIgcse";
import ListKotaIgcse from "../../Components/Tab/TabIgcse/ListKotaIgcse";
import Liputan from "../../Components/Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import PaketBelajarIgcse from "../../Components/PaketBelajar/PaketBelajarIgcse/PaketBelajarIgcse";
import GaleriKegiatan from "../BimbelIgcse/GaleriKegiatan/GaleriKegiatan";
import PromoIgcse from "./PromoIgcse/PromoIgcse";
import MateriIgcse from "./MateriIgcse/MateriIgcse";
import BestProgramIgcse from "../../Components/BestProgram/BestProgramIgcse/BestProgramIgcse";
import FloatingctaIgcse from "../../Components/FloatingCta/FloatingctaIgcse/FloatingctaIgcse";
import KeunggulanIgcse from "../../Components/Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import LiputanIgcse from "../../Components/Liputan/LiputanIgcse/LiputanIgcse";
import AsalSekolahIgcse from "../../Components/AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import PenjelasanIgcse from "./PenjelasanIgcse/PenjelasanIgcse";
import OnlyIgcseEdm from "./OnlyIgcseEdm/OnlyIgcseEdm";
import BenefitIgcse from "./BenefitIgcse/BenefitIgcse";
import FaqIgcse from "../../Components/Faq/FaqIgcse/FaqIgcse";
import WhyChooseIgcse from "./WhyChooseIgcse/WhyChooseIgcse";
import Translator from "../../Components/Translator/Translator";

const BimbelIgcse = ({ setProgress }) => {
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
          content="IGCSE, O Level, A Level & IB Tutor #1 - Edumatrix
          Indonesia"
        />
        <title>
          IGCSE, O Level, A Level & IB Tutor #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <Translator />
        <SliderIgcse />
        <BestProgramIgcse />
        <PenjelasanIgcse />
        <PaketBelajarIgcse />
        <MateriIgcse />
        <GaleriKegiatan />
        <Voucer />
        <KeunggulanIgcse />
        <WhyChooseIgcse />
        <Masterteacher />
        <BenefitIgcse />
        <OnlyIgcseEdm />
        <LiputanIgcse />
        <ListKotaIgcse />
        <FaqIgcse />
        <AsalSekolahIgcse />
        <PromoIgcse />
      </div>
      <Footer />
      <Bottombar />
      <FloatingctaIgcse />
    </React.Fragment>
  );
};

export default BimbelIgcse;
