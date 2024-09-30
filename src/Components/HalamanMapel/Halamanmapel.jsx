import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Navbar from "../Navbar/Navbar";
import modelTanyaProgram from "../../assets/tanya_program.png";
import ListMapelperkota from "../Tab/ListMapelperkota";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import modelMapel from "../../assets/model_mapel.png";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Liputan from "../Liputan/Liputan";
import SuccessStory from "../SuccessStory/SuccessStory";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../Video/Video";
import InfoCamp from "../InfoCamp/InfoCamp";
import Alumni from "../Alumni/Alumni";
import Faqtni from "../Faq/FaqTni/FaqTni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";

const Halamanmapel = ({setProgress}) => {
  const { id } = useParams();
  const [mapel, setMapel] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getMapel = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/matapelajaran/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setMapel(response.data);
    };
    "datamapel 2", id;
    getMapel(id);

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
          Les Privat {`${mapel.name}`} - Bimbel {`${mapel.name}`} Terbaik #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/les-privat/mata-pelajaran/${mapel.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-halaman-program-edm">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {mapel.name} Terbaik
            </h2>
            <div className="paragraf-program">
              <p>
                Bimbel Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS,
                LPDP, PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa
                dan Karyawan.{" "}
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
              alt="Les Privat dan Bimbel Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Les Privat dan Bimbel Terbaik - Edumatrix Indonesia"
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
        <ListMapelperkota />
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

export default Halamanmapel;
