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
import SliderSupercamp from "../../Components/SlideTop/SliderSupercamp/SliderSupercamp";
import ListKotaSupercamp from "../../Components/Tab/TabSupercamp/ListKotaSupercamp";
import Asalsekolah from "../../Components/AsalSekolah/Asalsekolah";
import SliderToefl from "../../Components/SlideTop/SliderToefl/SliderToefl";
import ListKotaToefl from "../../Components/Tab/TabToefl/ListKotaToefl";
import GaleriKegiatan from "../BimbelToefl/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import SuccessSnbt from "../BimbelSnbt/SuccessSnbt/SuccessSnbt";
import PaketBelajarToefl from "../../Components/PaketBelajar/PaketBelajarToefl/PaketBelajarToefl";
import PromoToefl from "./PromoToefl/PromoToefl";
import TestimoniToefl from "../../Components/Testimoni/TestimoniToefl/TestimoniToefl";
import KeunggulanIgcse from "../../Components/Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import LiputanIgcse from "../../Components/Liputan/LiputanIgcse/LiputanIgcse";
import AsalSekolahIgcse from "../../Components/AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import PenjelasanToefl from "./PenjelasanToefl/PenjelasanToefl";
import FaqToefl from "../../Components/Faq/FaqToefl/FaqToefl";
import FloatingCtaToefl from "../../Components/FloatingCta/FloatingCtaToefl/FloatingCtaToefl";
import SistemBelajarToefl from "../../Components/SistemBelajar/SistemBelajarToefl/SistemBelajarToefl";
import BestProgramToefl from "../../Components/BestProgram/BestProgramToefl/BestProgramToefl";
import NavbarIgcse from "../../Components/Navbar/NavbarIgcse";

const BimbelToefl = ({ setProgress }) => {
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
          content="Bimbel Les Privat TOEFL, TOEIC, IELTS, and English Conversation Lessons Terbaik #1 - Edumatrix
          Indonesia"
        />
        <title>
          Bimbel Les Privat TOEFL, TOEIC, IELTS, and English Conversation
          Lessons Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="https://app.edumatrix-indonesia.com/bimbel-toefl-toeic-ielts-dan-english-conversation" />
      </Helmet>
      <NavbarIgcse />
      <div className="container-all">
        <SliderToefl />
        <BestProgramToefl />
        <PenjelasanToefl />
        <SuccessStory />
        <PaketBelajarToefl />
        <GaleriKegiatan />
        <SistemBelajarToefl />
        <TestimoniToefl />
        <Voucer />
        <KeunggulanIgcse />
        <Masterteacher />
        <LiputanIgcse />
        <ListKotaToefl />
        <FaqToefl />
        <AsalSekolahIgcse />
        <PromoToefl />
      </div>
      <Footer />
      <Bottombar />
      <FloatingCtaToefl />
    </React.Fragment>
  );
};

export default BimbelToefl;
