import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/head_content/cpns.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestProgramCpns2 from "../../BestProgram/BestProgram2/BestProgramCpns2/BestProgramCpns2";
import SuccessTni from "../../../Program/BimbelTni/SuccessTni/SuccessTni";
import PaketBelajarCpns from "../../PaketBelajar/PaketBelajarCpns/PaketBelajarCpns";
import MateriCpns from "../../../Program/BimbelCpns/MateriCpns/MateriCpns";
import GaleriKegiatan from "../../../Program/BimbelCpns/GaleriKegiatan/GaleriKegiatan";
import TestimoniCpns from "../../Testimoni/TestimoniCpns/TestimoniCpns";
import Voucer from "../../Voucer/Voucer";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoCpns from "../../../Program/BimbelCpns/PromoCpns/PromoCpns";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";

const HalamanKecamatanCpns = ({ setProgress }) => {
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
          content="Bimbel CPNS & PPPK - SKD, SKB, TWK, TIU, TKP Terbaik #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel CPNS & PPPK di {`${kecamatan.kecamatan}`} - SKD, SKB, TWK, TIU,
          TKP Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel CPNS & PPPK di {kecamatan.kecamatan} - SKD, SKB, TWK, TIU,
              TKP Terbaik
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk Seleksi CPNS &
                PPPK. Program Belajar SKD, SKB, TWK, TIU, TKP
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
              alt="Bimbel Persiapan Seleksi CPNS dan PPPK"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Persiapan Seleksi CPNS dan PPPK"
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

export default HalamanKecamatanCpns;
