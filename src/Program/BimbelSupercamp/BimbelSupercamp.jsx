import React from "react";
import { Helmet } from "react-helmet";
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

const BimbelSupercamp = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Supercamp Karantina Persiapan UTBK SNBT Terbaik #1 - Edumatrix
          Indonesia"
        />
        <title>
          Bimbel Supercamp Karantina Persiapan UTBK SNBT Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-all">
        <SliderSupercamp />
        <BestprogramSnbt />
        <Voucer />
        <Masterteacher />
        <ListKotaSupercamp />
        <Keunggulan />
        <Testimoni />
        <Faqtni />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default BimbelSupercamp;