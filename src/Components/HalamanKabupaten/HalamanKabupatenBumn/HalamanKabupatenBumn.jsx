import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/head_content/bumn.png";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bottombar from "../../BottomBar/Bottombar";
import Footer from "../../Footer/Footer";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import GaleriKegiatan from "../../../Program/BimbelBumn/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import BestProgramBumn2 from "../../BestProgram/BestProgram2/BestProgramBumn2/BestProgramBumn2";
import SuccessTni from "../../../Program/BimbelTni/SuccessTni/SuccessTni";
import PaketBelajarBumn from "../../PaketBelajar/PaketBelajarBumn/PaketBelajarBumn";
import MateriBumn from "../../../Program/BimbelBumn/MateriBumn/MateriBumn";
import TestimoniBumn from "../../Testimoni/TestimoniBumn/TestimoniBumn";
import PromoBumn from "../../../Program/BimbelBumn/PromoBumn/PromoBumn";
import ListKecamatanBumn from "../../Tab/TabBumn/ListKecamatanBumn";

const HalamankabupatenBumn = ({ setProgress }) => {
  const { id } = useParams();
  const [kabupaten, setKabupaten] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKabupaten = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/ibukotakabupaten/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKabupaten(response.data);
    };
    id;
    getKabupaten();

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
          content="Bimbel Les Privat Seleksi BUMN Persiapan Masuk Kerja dan Naik Jabatan terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Les Privat Persiapan Seleksi BUMN di Kabupaten{" "}
          {`${kabupaten.kota_kabupaten}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-seleksi-bumn/kabupaten/${kabupaten.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Les Privat Persiapan Seleksi BUMN di Kabupaten{" "}
              {kabupaten.kota_kabupaten} - Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat Seleksi BUMN di Kabupaten {kabupaten.kota_kabupaten}
              </p>
              <p className="child-paragraf-kabupaten">
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
              alt="Bimbel Persiapan Seleksi BUMN"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Persiapan Seleksi BUMN"
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
        <ListKecamatanBumn />
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

export default HalamankabupatenBumn;
