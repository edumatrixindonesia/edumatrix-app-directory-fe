import React, { useEffect, useMemo, useState } from "react";
// import "./Halamankabupaten.css";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import modelTanyaProgram from "../../assets/tanya_program.png";
import rumahAdat from "../../assets/rumah_adat.png";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import SuccessStory from "../SuccessStory/SuccessStory";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Liputan from "../Liputan/Liputan";
import ListKelurahan from "../Tab/ListKelurahan";
import Alumni from "../Alumni/Alumni";
import Video from "../Video/Video";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import LolosPtn from "../../Program/BimbelSnbt/LolosPtn/LolosPtn";
import PaketBelajarSnbtNew from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbtNew";

const Halamankecamatan = ({setProgress}) => {
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

    setProgress(60)
    setTimeout(() => {
      setProgress(100)
    }, 50)
  }, [id, query]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Jasa Les Privat TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM terbaik dengan sistem belajar mengajar yang berkualitas  #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat di {`${kecamatan.kecamatan}`} - TK, SD, SMP, SMA, UTBK
          SNBT, SIMAK UI, UM PTN & CBT UGM - Bimbel di{" "}
          {`${kecamatan.kecamatan}`} Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/les-privat-di/kecamatan/${kecamatan.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Les Privat di {kecamatan.kecamatan} - TK, SD, SMP, SMA, UTBK SNBT,
              SIMAK UI, UM PTN & CBT UGM Terbaik
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk TK, SD, SMP,
                SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT, CBT
                UGM, UM PTN, AKPOL, AKMIL, Kedinasan, Mahasiswa dan Karyawan.{" "}
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
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a>
        </div>
        <Bestprogram2 />
        <LolosPtn />
        <PaketBelajarSnbt />
        <PaketBelajarSnbtNew />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <SuccessStory />
        <Alumni />
        <Liputan />
        <ListKelurahan />
        <Faq />
        <Asalsekolah />
        <PromoHomepage />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankecamatan;
