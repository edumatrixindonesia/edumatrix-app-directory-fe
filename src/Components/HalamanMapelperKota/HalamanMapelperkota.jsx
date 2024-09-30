import React, { useEffect, useMemo, useState } from "react";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import modelTanyaProgram from "../../assets/tanya_program.png";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import modelMapel from "../../assets/model_mapel.png";
import Liputan from "../Liputan/Liputan";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Testimoni from "../Testimoni/Testimoni";
import SuccessStory from "../SuccessStory/SuccessStory";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../Video/Video";
import InfoCamp from "../InfoCamp/InfoCamp";
import Alumni from "../Alumni/Alumni";
import Faqtni from "../Faq/FaqTni/FaqTni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";

const HalamanMapelperkota = ({setProgress}) => {
  const [kota, setKota] = useState([]);
  const [mapel, setMapel] = useState([]);
  const { id, mapelId } = useParams();

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

    const getMapel = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/matapelajaran/${mapelId}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setMapel(response.data);
    };
    getKota(id);
    getMapel(mapelId);

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
          content="Les Privat TK, SD, SMP, SMA, Mahasiswa Semua Mata Pelajaran dan Mata Kuliah Terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat {`${mapel.name}`} di {`${kota.kota}`} - Bimbel{" "}
          {`${mapel.name}`} di {`${kota.kota}`} Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/les-privat/mata-pelajaran/${mapel.slug}/kota/${kota.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-halaman-program-edm">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {mapel.name} di {kota.kota} Terbaik
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
          <a className="parent-program-edm" href="">
            <img
              className="model-program-edm"
              src={modelMapel}
              alt="Bimbel SNBT Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel SNBT Terbaik"
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

export default HalamanMapelperkota;
