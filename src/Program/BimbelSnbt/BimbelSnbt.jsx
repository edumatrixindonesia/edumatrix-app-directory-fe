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
import SuccessSnbt from "./SuccessSnbt/SuccessSnbt";
import GaleriKegiatan from "./GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import InfoCamp from "../../Components/InfoCamp/InfoCamp";
import Alumni from "../../Components/Alumni/Alumni";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Video from "../../Components/Video/Video";
import PaketBelajarSnbt from "../../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import ProblemSnbt from "./ProblemSnbt/ProblemSnbt";
import SubtesSnbt from "./SubtesSnbt/SubtesSnbt";
import PromoSnbt from "./PromoSnbt/PromoSnbt";
import LolosPtn from "./LolosPtn/LolosPtn";
import PaketBelajarSnbtNew from "../../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbtNew";

const BimbelSnbt = ({ setProgress }) => {
  
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
          content="Bimbel Masuk PTN UTBK SNBT - UI, UGM, Undip, Unair, Unpad, UB, Udayana
          Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Masuk PTN UTBK SNBT - UI, UGM, Undip, Unair, Unpad, UB, Udayana
          Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="https://app.edumatrix-indonesia.com/bimbel-snbt-terbaik" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderSnbt />
        <BestprogramSnbt />
        <ProblemSnbt />
        <LolosPtn />
        <SubtesSnbt />
        <PaketBelajarSnbt />
        <PaketBelajarSnbtNew />
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
        <ListUtbkSnbt />
        <Faqtni />
        <Asalsekolah />
        {/* <PromoHomepage /> */}
        <PromoSnbt />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelSnbt;
