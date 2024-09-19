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
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import SuccessSnbt from "../BimbelSnbt/SuccessSnbt/SuccessSnbt";
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import Alumni from "../../Components/Alumni/Alumni";
import InfoCamp from "../../Components/InfoCamp/InfoCamp";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Video from "../../Components/Video/Video";
import PaketBelajarSnbt from "../../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "./SectionSupercamp/SectionSupercamp";
import SubtesSnbt from "../BimbelSnbt/SubtesSnbt/SubtesSnbt";
import ProblemSnbt from "../BimbelSnbt/ProblemSnbt/ProblemSnbt";
import LolosPtn from "../BimbelSnbt/LolosPtn/LolosPtn";

const BimbelSupercamp = ({ setProgress }) => {
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
          content="Bimbel Supercamp Masuk Kedokteran dan UTBK SNBT, UI, UGM, Undip, Unair,
          Unpad, UB, Udayana Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Supercamp Masuk Kedokteran dan UTBK SNBT, UI, UGM, Undip,
          Unair, Unpad, UB, Udayana Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="https://app.edumatrix-indonesia.com/bimbel-supercamp-edumatrix" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderSupercamp />
        <BestprogramSnbt />
        <ProblemSnbt />
        <LolosPtn />
        <SubtesSnbt />
        <PaketBelajarSnbt />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <InfoCamp />
        <Masterteacher />
        <SuccessSnbt />
        <Alumni />
        <Liputan />
        <ListKotaSupercamp />
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

export default BimbelSupercamp;
