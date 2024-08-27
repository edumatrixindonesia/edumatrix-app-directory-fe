import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/rumah_adat.png";
import tanyaProgram from "../../../assets/tanya_program.png";
import { Helmet } from "react-helmet-async";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import ListKabupaten from "../../Tab/ListKabupaten";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bottombar from "../../BottomBar/Bottombar";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ListUtbkSnbt from "../../Tab/TabUtbkSnbt/ListUtbkSnbt";
import ListKabupatenSnbt from "../../Tab/TabUtbkSnbt/ListKabupatenSnbt";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import ListKabupatenLpdp from "../../Tab/TabLpdp/ListKabupatenLpdp";
import ListKabupatenCpns from "../../Tab/TabCpns/ListKabupatenCpns";
import ListKabupatenIgcse from "../../Tab/TabIgcse/ListKabupatenIgcse";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Liputan from "../../Liputan/Liputan";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import PaketBelajarIgcse from "../../PaketBelajar/PaketBelajarIgcse/PaketBelajarIgcse";
import MateriIgcse from "../../../Program/BimbelIgcse/MateriIgcse/MateriIgcse";
import GaleriKegiatan from "../../../Program/BimbelIgcse/GaleriKegiatan/GaleriKegiatan";
import PromoIgcse from "../../../Program/BimbelIgcse/PromoIgcse/PromoIgcse";
import BestprogramPrivat2 from "../../BestProgram/BestProgram2/BestProgramPrivat2/BesProgramPrivat2";
import BestProgramIgcse2 from "../../BestProgram/BestProgram2/BestProgramIgcse2/BestProgramIgcse2";
import FloatingctaIgcse from "../../FloatingCta/FloatingctaIgcse/FloatingctaIgcse";
import KeunggulanIgcse from "../../Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import LiputanIgcse from "../../Liputan/LiputanIgcse/LiputanIgcse";
import AsalSekolahIgcse from "../../AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import OnlyIgcseEdm from "../../../Program/BimbelIgcse/OnlyIgcseEdm/OnlyIgcseEdm";
import BenefitIgcse from "../../../Program/BimbelIgcse/BenefitIgcse/BenefitIgcse";
import WhyChooseIgcse from "../../../Program/BimbelIgcse/WhyChooseIgcse/WhyChooseIgcse";
import PenjelasanIgcse from "../../../Program/BimbelIgcse/PenjelasanIgcse/PenjelasanIgcse";
import FaqIgcse from "../../Faq/FaqIgcse/FaqIgcse";

const HalamankotaIgcse = ({ setProgress }) => {
  const { id } = useParams();
  const [kotaigcse, setKotaigcse] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKota = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kota/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKotaigcse(response.data);
    };
    id;
    getKota(id);

    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, [id, query]);

  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="IGCSE, O Level, A Level & IB Tutor #1 - Edumatrix Indonesia"
        />
        <title>
          IGCSE, O Level, A Level & IB Tutor in {`${kotaigcse.kota}`} #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              IGCSE, O Level, A Level & IB Tutor in {kotaigcse.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                Edumatrix Indonesia offers one-on-one tutoring IGCSE, O Level, A
                Level & IB in {kotaigcse.kota} to provide the best learning
                experience for students
              </p>
              <p className="child-paragraf-kota">
                Get Private Tutoring services anytime and anywhere with more
                than 5,000 Edumatrix Master Teachers who are ready to provide
                the best service.
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel Kurikulum IGCSE Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6285600422188?text=Hello%20Miss%20Sari,%20https://app.edumatrix-indonesia.com%20I%20would%20like%20to%20ask%20for%20Private%20IGCSE%20tutoring%20for%20%0aGrade%20:%0aSubject%20:%0aCurriculum%20:%0aRegion:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel Kurikulum IGCSE Terbaik"
            />
          </a>
        </div>
        <BestProgramIgcse2 />
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
        <ListKabupatenIgcse />
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

export default HalamankotaIgcse;
