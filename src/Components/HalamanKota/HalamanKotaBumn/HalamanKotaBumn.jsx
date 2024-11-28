import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/bumn.png";
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
import ListKabupatenBumn from "../../Tab/TabBumn/ListKabupatenBumn";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import GaleriKegiatan from "../../../Program/BimbelBumn/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import BestProgramBumn2 from "../../BestProgram/BestProgram2/BestProgramBumn2/BestProgramBumn2";
import PromoBumn from "../../../Program/BimbelBumn/PromoBumn/PromoBumn";
import TestimoniBumn from "../../Testimoni/TestimoniBumn/TestimoniBumn";
import MateriBumn from "../../../Program/BimbelBumn/MateriBumn/MateriBumn";
import PaketBelajarBumn from "../../PaketBelajar/PaketBelajarBumn/PaketBelajarBumn";
import SuccessTni from "../../../Program/BimbelTni/SuccessTni/SuccessTni";

const HalamankotaBumn = ({ setProgress }) => {
  const { id } = useParams();
  const [kotabumn, setKotabumn] = useState([]);

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
      setKotabumn(response.data);
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
          content="Bimbel Les Privat Seleksi BUMN Persiapan Masuk Kerja dan Naik Jabatan terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Privat BUMN di {`${kotabumn.kota}`} Terbaik #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-seleksi-bumn-di/${kotabumn.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Privat BUMN di {kotabumn.kota} Terbaik
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotabumn.kota} untuk Seleksi BUMN dan
                Tes masuk Kerja
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
              alt="Les Privat BUMN Terbaik dan Rekomendasi - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Les Privat BUMN Terbaik dan Rekomendasi - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestProgramBumn2 />
        <SuccessTni />
        <PaketBelajarBumn />
        <MateriBumn />
        <GaleriKegiatan />
        <TestimoniBumn />
        <Voucer />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKabupatenBumn />
        <Faqtni />
        <Asalsekolah />
        <PromoBumn />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamankotaBumn;
