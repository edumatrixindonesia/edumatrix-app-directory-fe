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
import SuccessSnbt from "../BimbelSnbt/SuccessSnbt/SuccessSnbt";
import GaleriKegiatan from "../BimbelSnbt/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Components/Liputan/Liputan";
import InfoCamp from "../../Components/InfoCamp/InfoCamp";
import Alumni from "../../Components/Alumni/Alumni";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Video from "../../Components/Video/Video";
import PaketBelajarSnbt from "../../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import BestProgramKedokteran from "../../Components/BestProgram/BestProgramKedokteran/BestProgramKedokteran";
import PaketBelajarKedokteran from "../../Components/PaketBelajar/PaketBelajarKedokteran/PaketBelajarKedokteran";
import ListKedokteran from "../../Components/Tab/TabKedokteran/ListKedokteran";
import SliderKedokteran from "../../Components/SlideTop/SliderKedokteran/SliderKedokteran";

const BimbelKedokteran = ({ setProgress }) => {
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
          content="Bimbel Masuk Kedokteran UI, UGM, Unair, Unpad, UB Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Masuk Kedokteran - FK UI, UGM, Undip, Unair, Unpad, UB, Udayana
          Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderKedokteran />
        <BestProgramKedokteran />
        <SuccessSnbt />
        <PaketBelajarKedokteran />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <InfoCamp />
        <Masterteacher />
        <Alumni />
        <Liputan />
        <ListKedokteran />
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

export default BimbelKedokteran;
