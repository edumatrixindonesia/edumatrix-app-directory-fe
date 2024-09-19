import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/TOEFL.png";
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
import ListKabupatenSupercamp from "../../Tab/TabSupercamp/ListKabupatenSupercamp";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import ListKabupatenToefl from "../../Tab/TabToefl/ListKabupatenToefl";
import GaleriKegiatan from "../../../Program/BimbelToefl/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import SuccessStory from "../../SuccessStory/SuccessStory";
import PaketBelajarToefl from "../../PaketBelajar/PaketBelajarToefl/PaketBelajarToefl";
import TestimoniToefl from "../../Testimoni/TestimoniToefl/TestimoniToefl";
import PromoToefl from "../../../Program/BimbelToefl/PromoToefl/PromoToefl";
import AsalSekolahIgcse from "../../AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";
import FaqToefl from "../../Faq/FaqToefl/FaqToefl";
import LiputanIgcse from "../../Liputan/LiputanIgcse/LiputanIgcse";
import KeunggulanIgcse from "../../Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import PenjelasanToefl from "../../../Program/BimbelToefl/PenjelasanToefl/PenjelasanToefl";
import FloatingCtaToefl from "../../FloatingCta/FloatingCtaToefl/FloatingCtaToefl";
import SistemBelajarToefl from "../../SistemBelajar/SistemBelajarToefl/SistemBelajarToefl";
import BestProgramToefl2 from "../../BestProgram/BestProgram2/BestProgramToefl2/BestProgramToefl2";
import { useTranslation } from "react-i18next";
import "../../../Components/Translator/i18n";
import NavbarIgcse from "../../Navbar/NavbarIgcse";

const HalamankotaToefl = ({ setProgress }) => {
  const { id } = useParams();
  const [kotatoefl, setKotatoefl] = useState([]);
  const { t, i18n } = useTranslation();

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
      setKotatoefl(response.data);
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
          name="description"
          content="Bimbel Les Privat TOEFL, TOEIC, IELTS, and English Conversation Lessons, SMP - SMA - Mahasiswa terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Les Privat TOEFL, TOEIC, IELTS, and English Conversation
          Lessons in {`${kotatoefl.kota}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-toefl-toeic-ielts-dan-english-conversation-di/${kotatoefl.slug}`} />
      </Helmet>
      <NavbarIgcse />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              {t("halamanKotaToefl.title")} {kotatoefl.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                {t("halamanKotaToefl.desk_1")} {kotatoefl.kota}
              </p>
              <p className="child-paragraf-kota">
                {t("halamanKotaToefl.desk_3")}
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel TOEFL Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel TOEFL Terbaik"
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
        <ListKabupatenToefl />
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

export default HalamankotaToefl;
