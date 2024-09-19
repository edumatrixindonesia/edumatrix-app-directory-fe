import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/SD SMP SMA.png";
import tanyaProgram from "../../../assets/tanya_program.png";
import { Helmet } from "react-helmet-async";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bottombar from "../../BottomBar/Bottombar";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ListKabupatenPrivat from "../../Tab/TabPrivat/ListKabupatenPrivat";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import GaleriKegiatan from "../../../Program/BimbelPrivat/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import SuccessOsn from "../../../Program/BimbelOsn/SuccessOsn/SuccessOsn";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import BestprogramPrivat2 from "../../BestProgram/BestProgram2/BestProgramPrivat2/BesProgramPrivat2";
import Alumni from "../../Alumni/Alumni";
import PaketBelajarPrivat from "../../PaketBelajar/PaketBelajarPrivat/PaketBelajarPrivat";

const HalamankotaPrivat = ({ setProgress }) => {
  const { id } = useParams();
  const [kotaprivat, setKotaprivat] = useState([]);

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
      setKotaprivat(response.data);
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
          content="Bimbel Les Privat TK, SD, SMP, SMA terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Privat TK - SD - SMP - SMA & Mahasiswa di{" "}
          {`${kotaprivat.kota}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/bimbel-privat-tk-sd-smp-sma-mahasiswa-di/${kotaprivat.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Privat TK - SD - SMP - SMA & Mahasiswa di {kotaprivat.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotaprivat.kota} untuk TK, SD, SMP,
                SMA & Mahasiswa
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
              alt="Bimbel Privat TK SD SMP SMA Terbaik dan Berkualitas - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel Privat TK SD SMP SMA Terbaik dan Berkualitas - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestprogramPrivat2 />
        <SuccessOsn />
        <PaketBelajarPrivat />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Alumni />
        <Liputan />
        <ListKabupatenPrivat />
        <Faqtni />
        <Asalsekolah />
        <PromoHomepage />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamankotaPrivat;
