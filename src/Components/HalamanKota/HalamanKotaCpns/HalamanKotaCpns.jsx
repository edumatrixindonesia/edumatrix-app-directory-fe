import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/cpns.png";
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
import BestprogramTni2 from "../../BestProgram/BestProgram2/BestProgramTni2/BestProgramTni2";
import ListKabupatenLpdp from "../../Tab/TabLpdp/ListKabupatenLpdp";
import ListKabupatenCpns from "../../Tab/TabCpns/ListKabupatenCpns";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import GaleriKegiatan from "../../../Program/BimbelCpns/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import SuccessTni from "../../../Program/BimbelTni/SuccessTni/SuccessTni";
import ListKotaCpns from "../../Tab/TabCpns/ListKotaCpns";
import BestProgramCpns2 from "../../BestProgram/BestProgram2/BestProgramCpns2/BestProgramCpns2";
import PromoCpns from "../../../Program/BimbelCpns/PromoCpns/PromoCpns";
import MateriCpns from "../../../Program/BimbelCpns/MateriCpns/MateriCpns";
import PaketBelajarCpns from "../../PaketBelajar/PaketBelajarCpns/PaketBelajarCpns";
import TestimoniCpns from "../../Testimoni/TestimoniCpns/TestimoniCpns";

const HalamankotaCpns = ({ setProgress }) => {
  const { id } = useParams();
  const [kotacpns, setKotacpns] = useState([]);

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
      setKotacpns(response.data);
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
          content="Bimbel CPNS & PPPK - SKD, SKB, TWK, TIU, TKP Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel CPNS & PPPK di {`${kotacpns.kota}`} - SKD, SKB, TWK, TIU, TKP
          Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel CPNS & PPPK di {kotacpns.kota} - SKD, SKB, TWK, TIU, TKP
              Terbaik
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotacpns.kota} untuk Seleksi CPNS &
                PPPK. Program Belajar SKD, SKB, TWK, TIU, TKP
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Edumatrix yang siap memberikan
                pelayanan terbaik.
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Les Privat CPNS Berkualitas dan Rekomendasi"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Les Privat CPNS Berkualitas dan Rekomendasi"
            />
          </a>
        </div>
        <BestProgramCpns2 />
        <SuccessTni />
        <PaketBelajarCpns />
        <MateriCpns />
        <GaleriKegiatan />
        <TestimoniCpns />
        <Voucer />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKabupatenCpns />
        <Faqtni />
        <Asalsekolah />
        <PromoCpns />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamankotaCpns;
