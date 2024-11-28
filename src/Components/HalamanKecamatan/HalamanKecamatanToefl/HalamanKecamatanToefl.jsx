import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/head_content/TOEFL.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import SuccessStory from "../../SuccessStory/SuccessStory";
import PaketBelajarToefl from "../../PaketBelajar/PaketBelajarToefl/PaketBelajarToefl";
import GaleriKegiatan from "../../../Program/BimbelToefl/GaleriKegiatan/GaleriKegiatan";
import TestimoniToefl from "../../Testimoni/TestimoniToefl/TestimoniToefl";
import Voucer from "../../Voucer/Voucer";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoToefl from "../../../Program/BimbelToefl/PromoToefl/PromoToefl";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import PenjelasanToefl from "../../../Program/BimbelToefl/PenjelasanToefl/PenjelasanToefl";
import AsalSekolahIgcse from "../../AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import FaqToefl from "../../Faq/FaqToefl/FaqToefl";
import LiputanIgcse from "../../Liputan/LiputanIgcse/LiputanIgcse";
import KeunggulanIgcse from "../../Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import FloatingCtaToefl from "../../FloatingCta/FloatingCtaToefl/FloatingCtaToefl";
import SistemBelajarToefl from "../../SistemBelajar/SistemBelajarToefl/SistemBelajarToefl";
import BestProgramToefl2 from "../../BestProgram/BestProgram2/BestProgramToefl2/BestProgramToefl2";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";
import NavbarIgcse from "../../Navbar/NavbarIgcse";

const HalamanKecamatanToefl = ({ setProgress }) => {
  const { id } = useParams();
  const [kecamatan, setKecamatan] = useState([]);
  const { t, i18n } = useTranslation();

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
          name="description"
          content="Bimbel Privat TOEFL, TOEIC, IELTS, and English Conversation Lessons, SMP - SMA - Mahasiswa terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Privat TOEFL, TOEIC, IELTS, and English Conversation
          Lessons in {`${kecamatan.kecamatan}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-toefl-toeic-ielts-dan-english-conversation/kecamatan/${kecamatan.slug}`} />
      </Helmet>
      <NavbarIgcse />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
            {t("halamanKotaToefl.title")}{" "}
              {kecamatan.kecamatan} - Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
              {t("halamanKotaToefl.desk_1")} {kecamatan.kecamatan}
              </p>
              <p className="child-paragraf-kabupaten">
              {t("halamanKotaToefl.desk_3")}
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel TOEFL TOEIC IELTS dan English Conversation Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel TOEFL TOEIC IELTS dan English Conversation Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestProgramToefl2 />
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

export default HalamanKecamatanToefl;
