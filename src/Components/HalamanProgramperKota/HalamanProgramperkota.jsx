import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import modelTanyaProgram from "../../assets/tanya_program.png";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Asalsekolah from "../AsalSekolah/Asalsekolah";
import Testimoni from "../Testimoni/Testimoni";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import rumahAdat from "../../assets/rumah_adat.png";
import Faqtni from "../Faq/FaqTni/FaqTni";
import Liputan from "../Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import SuccessStory from "../SuccessStory/SuccessStory";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../Video/Video";
import InfoCamp from "../InfoCamp/InfoCamp";
import Alumni from "../Alumni/Alumni";

const HalamanProgramperkota = ({setProgress}) => {
  const [kota, setKota] = useState([]);
  const [program, setProgram] = useState([]);
  const { id, programid } = useParams();

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
      setKota(response.data);
    };

    const getProgram = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kelas/${programid}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setProgram(response.data);
    };
    getKota(id);
    getProgram(id);

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
          content="Bimbel Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan Terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat {`${program.name}`} - Bimbel {`${program.name}`} di{" "}
          {`${kota.kota}`} Terbaik - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {program.name} di {kota.kota} Terbaik - Edumatrix
              Indonesia
            </h2>
            <div className="paragraf-program">
              <p>
                Bimbel Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan.{" "}
              </p>
              <p className="child-paragraf-program">
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
              alt="Bimbel dan Les Privat Mahasiswa - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel dan Les Privat Mahasiswa - Edumatrix Indonesia"
            />
          </a>
        </div>
        <Bestprogram2 />
        <SuccessStory />
        <PaketBelajarSnbt />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <InfoCamp />
        <Masterteacher />
        <Alumni />
        <Liputan />
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

export default HalamanProgramperkota;
