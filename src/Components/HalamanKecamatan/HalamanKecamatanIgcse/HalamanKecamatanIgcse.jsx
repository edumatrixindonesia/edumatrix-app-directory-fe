import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/head_content/IGCSE.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestProgramIgcse2 from "../../BestProgram/BestProgram2/BestProgramIgcse2/BestProgramIgcse2";
import PaketBelajarIgcse from "../../PaketBelajar/PaketBelajarIgcse/PaketBelajarIgcse";
import MateriIgcse from "../../../Program/BimbelIgcse/MateriIgcse/MateriIgcse";
import GaleriKegiatan from "../../../Program/BimbelIgcse/GaleriKegiatan/GaleriKegiatan";
import Voucer from "../../Voucer/Voucer";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoIgcse from "../../../Program/BimbelIgcse/PromoIgcse/PromoIgcse";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import FloatingctaIgcse from "../../FloatingCta/FloatingctaIgcse/FloatingctaIgcse";
import KeunggulanIgcse from "../../Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import LiputanIgcse from "../../Liputan/LiputanIgcse/LiputanIgcse";
import AsalSekolahIgcse from "../../AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import PenjelasanIgcse from "../../../Program/BimbelIgcse/PenjelasanIgcse/PenjelasanIgcse";
import WhyChooseIgcse from "../../../Program/BimbelIgcse/WhyChooseIgcse/WhyChooseIgcse";
import OnlyIgcseEdm from "../../../Program/BimbelIgcse/OnlyIgcseEdm/OnlyIgcseEdm";
import BenefitIgcse from "../../../Program/BimbelIgcse/BenefitIgcse/BenefitIgcse";
import FaqIgcse from "../../Faq/FaqIgcse/FaqIgcse";

const HalamanKecamatanIgcse = ({ setProgress }) => {
  const { id } = useParams();
  const [kecamatan, setKecamatan] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKecamatan = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kecamatankab/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKecamatan(response.data);
    };
    getKecamatan(id);

    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, [id, query]);
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="IGCSE, O Level, A Level & IB Tutor #1 - Edumatrix Indonesia"
        />
        <title>
          IGCSE, O Level, A Level & IB Tutor in {`${kecamatan.kecamatan}`} #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              IGCSE, O Level, A Level & IB Tutor in {kecamatan.kecamatan} -
              Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Edumatrix Indonesia offers one-on-one tutoring IGCSE, O Level, A
                Level & IB in {kecamatan.kecamatan} to provide the best learning
                experience for students
              </p>
              <p className="child-paragraf-kabupaten">
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
              alt="Bimbel IGCSE Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6285600422188?text=Hello%20Miss%20Sari,%20I%20would%20like%20to%20ask%20for%20Private%20IGCSE%20tutoring%20for%20%0aGrade%20:%0aSubject%20:%0aCurriculum%20:%0aRegion:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel IGCSE Terbaik"
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

export default HalamanKecamatanIgcse;
