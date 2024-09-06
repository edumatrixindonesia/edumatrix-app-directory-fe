import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/OSN KSN.png";
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
import Faqtni from "../../Faq/FaqTni/FaqTni";
import ListKabupatenOsn from "../../Tab/TabOsn/ListKabupatenOsn";
import SuccessOsn from "../../../Program/BimbelOsn/SuccessOsn/SuccessOsn";
import GaleriKegiatan from "../../../Program/BimbelOsn/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import BestProgramOsn2 from "../../BestProgram/BestProgram2/BestProgramOsn2/BestProgramOsn2";
import PaketBelajarOsn from "../../PaketBelajar/PaketBelajarOsn/PaketBelajarOsn";
import PromoOsn from "../../../Program/BimbelOsn/PromoOsn/PromoOsn";
import BestProgramKsn2 from "../../BestProgram/BestProgram2/BestProgramKsn2/BestProgramKsn2";
import ListKabupatenKsn from "../../Tab/TabKsn/ListKabupatenKsn";

const HalamanKotaKsn = ({ setProgress }) => {
  const { id } = useParams();
  const [kotaosn, setKotaosn] = useState([]);

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
      setKotaosn(response.data);
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
          content="Bimbel Kompetisi Sains Nasional (OSN/KSN), SD-SMP-SMA terbaik terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Kompetisi Sains Nasional (KSN) di {`${kotaosn.kota}`} - SD,
          SMP, SMA Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Kompetisi Sains Nasional (KSN) di {kotaosn.kota} - SD, SMP,
              SMA
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotaosn.kota} untuk Persiapan
                Kompetisi Sains Nasional (KSN) jenjang SD - SMP - SMA
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
              alt="Bimbel OSN SD SMP SMA Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel OSN SD SMP SMA Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestProgramKsn2 />
        <SuccessOsn />
        <PaketBelajarOsn />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <ListKabupatenKsn />
        <Faqtni />
        <Asalsekolah />
        <PromoOsn />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamanKotaKsn;
