import React, { useEffect, useMemo, useState } from "react";
import "./Halamanprogram.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import Masterteacher from "../MasterTeacher/Masterteacher";
import modelTanyaProgram from "../../assets/tanya_program.png";
import Listkelasperkota from "../Tab/ListKelasperkota";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import rumahAdat from "../../assets/rumah_adat.png";
import Faqtni from "../Faq/FaqTni/FaqTni";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Liputan from "../Liputan/Liputan";
import SuccessStory from "../SuccessStory/SuccessStory";
import Alumni from "../Alumni/Alumni";
import InfoCamp from "../InfoCamp/InfoCamp";
import Video from "../Video/Video";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";

const Halamanprogram = ({ setProgress }) => {
  const { id } = useParams();
  const [program, setProgram] = useState([]);
  const [kelasperkota, setKelasPerKota] = useState([]);
  const [promo, setPromo] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getProgram = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kelas/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setProgram(response.data);
    };
    const getPromo = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kelas/${query.get("data")}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setPromo(response.data);
    };
    id;
    getProgram(id);
    getPromo(id);
    fetchKelasperKota();

    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, [id, query]);

  const fetchKelasperKota = () => {
    fetch(`https://api.edulink-indonesia.com/kelasperkota/${query.get("data")}`)
      .then((res) => res.json())
      .then((data) => {
        setKelasPerKota(data);
      });
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Les Privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, CPNS, LPDP,
                PPDS, SIMAK UI, SNBT, AKPOL, AKMIL, Kedinasan, Mahasiswa dan
                Karyawan Terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat {`${program.name}`} - Bimbel {`${program.name}`} Terbaik #1
          - Edumatrix Indonesia
        </title>
        <link rel="canonical" href={`https://app.edumatrix-indonesia.com/les-privat/program/${program.slug}`} />
      </Helmet>
      <Navbar />
      <div className="container-halaman-program">
        <div className="content-program">
          <div className="teks-content">
            <h2 className="title-halaman-program">
              Les Privat {program.name} Terbaik
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
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel ABK (Anak Berkebutuhan Khusus) Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel ABK (Anak Berkebutuhan Khusus) Terbaik - Edumatrix Indonesia"
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
        <Listkelasperkota />
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

export default Halamanprogram;
{
  /* <div className="parent-promo">
          <img
            className="discount-promo"
            src={"https://api.edulink-indonesia.com/images/" + promo?.image}
            alt="Bimbel SIMAK UI Terbaik - Edumatrix Indonesia"
          />
        </div> */
}
