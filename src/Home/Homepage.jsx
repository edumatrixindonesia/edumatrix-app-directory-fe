import React, { useEffect } from "react";
import Slidertop from "../Components/SlideTop/Slidertop";
import Navbar from "../Components/Navbar/Navbar";
import "./Homepage.css";
import BestProgram from "../Components/BestProgram/Bestprogram";
import Voucer from "../Components/Voucer/Voucer";
import Masterteacher from "../Components/MasterTeacher/Masterteacher";
import Listkota from "../Components/Tab/Listkota";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/Faq/Faq";
import Testimoni from "../Components/Testimoni/Testimoni";
import Keunggulan from "../Components/Keunggulan/Keunggulan";
import Asalsekolah from "../Components/AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet-async";
import PreLoader from "../Components/Preloader/PreLoader";
import Floatingcta from "../Components/FloatingCta/Floatingcta";
import Bottombar from "../Components/BottomBar/Bottombar";
import SuccessStory from "../Components/SuccessStory/SuccessStory";
import PromoHomepage from "./PromoHomepage/PromoHomepage";
import Liputan from "../Components/Liputan/Liputan";
import InfoCamp from "../Components/InfoCamp/InfoCamp";
import Alumni from "../Components/Alumni/Alumni";
import GaleriKegiatan from "../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../Components/Video/Video";
import SectionSupercamp from "../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import PaketBelajarSnbt from "../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import ReactGA from "react-ga";
import ProblemSnbt from "../Program/BimbelSnbt/ProblemSnbt/ProblemSnbt";
import LolosPtn from "../Program/BimbelSnbt/LolosPtn/LolosPtn";
import SubtesSnbt from "../Program/BimbelSnbt/SubtesSnbt/SubtesSnbt";
import PaketBelajarSnbtNew from "../Components/PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbtNew";

const Homepage = ({setProgress}) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    setProgress(60)
    setTimeout(() => {
      setProgress(100)
    }, 50)
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Les Privat & Bimbel UTBK SNBT Terbaik di Indonesia - Edumatrix Indonesia"
        />
        <title>
          Les Privat & Bimbel UTBK SNBT Terbaik di Indonesia - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="https://app.edumatrix-indonesia.com/" />
      </Helmet>
      {/* <PreLoader /> */}
      <Navbar />
      <div className="container-all">
        <Slidertop />
        <BestProgram />
        <LolosPtn />
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
        <SuccessStory />
        <Alumni />
        <Liputan />
        <Listkota />
        <Faq />
        <Asalsekolah />
        <PromoHomepage />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Homepage;
