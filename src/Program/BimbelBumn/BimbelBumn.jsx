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
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import BestProgramBumn from "../../Components/BestProgram/BestProgramBumn/BestProgramBumn";
import SuccessTni from "../BimbelTni/SuccessTni/SuccessTni";
import TestimoniBumn from "../../Components/Testimoni/TestimoniBumn/TestimoniBumn";
import PaketBelajarBumn from "../../Components/PaketBelajar/PaketBelajarBumn/PaketBelajarBumn";
import PromoBumn from "./PromoBumn/PromoBumn";
import MateriBumn from "./MateriBumn/MateriBumn";

const BimbelBumn = ({ setProgress }) => {
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
          content="Bimbel Persiapan Seleksi BUMN | Masuk Kerja dan Naik Jabatan Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Persiapan Seleksi BUMN | Masuk Kerja dan Naik Jabatan Terbaik
          #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-seleksi-bumn`} />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderBumn />
        <BestProgramBumn />
        <SuccessTni />
        <PaketBelajarBumn />
        <MateriBumn />
        <GaleriKegiatan />
        <TestimoniBumn />
        <Voucer />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKotaBumn />
        <Faqtni />
        <Asalsekolah />
        <PromoBumn />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelBumn;
