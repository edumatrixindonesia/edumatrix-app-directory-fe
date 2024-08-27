import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/rumah_adat.png";
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
import Listkotatni from "../../Tab/Tabtni/ListKotatni";
import BestprogramTni2 from "../../BestProgram/BestProgram2/BestProgramTni2/BestProgramTni2";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import SuccessTni from "../../../Program/BimbelTni/SuccessTni/SuccessTni";
import ProgramUnggulanTni from "../../ProgramUnggulan/ProgramUnggulanTni/ProgramUnggulanTni";
import GaleriKegiatan from "../../../Program/BimbelTni/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import PromoTni from "../../../Program/BimbelTni/PromoTni/PromoTni";
import VideoTesti from "../../../Program/BimbelTni/VideoTesti/VideoTesti";
import MasterteacherTni from "../../MasterTeacher/MasterteacherTni/MasterteacherTni";
import Konsultan from "../../../Program/BimbelTni/Konsultan/Konsultan";
import MateriTni from "../../../Program/BimbelTni/MateriTni/MateriTni";
import Testimonitni from "../../Testimoni/TestimoniTni/TestimoniTni";

const Halamankotatni = ({ setProgress }) => {
  const { id } = useParams();
  const [kotatni, setKotatni] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKotatni = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/kotatni/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKotatni(response.data);
    };
    id;
    getKotatni(id);

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
          content="Bimbel Les Privat Akpol Akademi TNI Bintara TNI - Polri & Sekolah Kedinasan terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Akpol Akademi TNI Bintara TNI - Polri & Sekolah Kedinasan di{" "}
          {`${kotatni.kotatni}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Akpol Akademi TNI Bintara TNI - Polri & Sekolah Kedinasan
              di {kotatni.kotatni}
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di {kotatni.kotatni} untuk AKPOL, AKMIL,
                Bintara/Tamtama dan Sekolah Kedinasan
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
              alt="Bimbel TNI/Polri AKPOL AKMIL Bintara Tamtama dan Sekolah Kedinasan Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel TNI/Polri AKPOL AKMIL Bintara Tamtama dan Sekolah Kedinasan Terbaik"
            />
          </a>
        </div>
        <BestprogramTni2 />
        <SuccessTni />
        <Konsultan />
        <MateriTni />
        <div className="parent-roadmap">
          {/* <img className="image-roadmap" src={roadmapTni} alt="roadmap tni" /> */}
          <img
            className="image-roadmap"
            src="https://lesprivatkerumah.com/wp-content/uploads/2023/12/new-program-1200x532.jpeg"
            alt=""
          />
        </div>
        <ProgramUnggulanTni />
        <GaleriKegiatan />
        <Testimonitni />
        <Keunggulan />
        <Voucer />
        <MasterteacherTni />
        <Listkotatni />
        <VideoTesti />
        <Faqtni />
        <PromoTni />
        <Liputan />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankotatni;
