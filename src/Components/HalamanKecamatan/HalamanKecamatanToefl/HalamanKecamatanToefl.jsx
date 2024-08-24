import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import SuccessStory from "../../SuccessStory/SuccessStory";
import PaketBelajarToefl from "../../PaketBelajar/PaketBelajarToefl/PaketBelajarToefl";
import GaleriKegiatan from "../../../Program/BimbelPrivat/GaleriKegiatan/GaleriKegiatan";
import TestimoniToefl from "../../Testimoni/TestimoniToefl/TestimoniToefl";
import Voucer from "../../Voucer/Voucer";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoToefl from "../../../Program/BimbelToefl/PromoToefl/PromoToefl";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";

const HalamanKecamatanToefl = () => {
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
    console.log(getKecamatan);
    getKecamatan(id);
  }, [id, query]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="Bimbel Les Privat TOEFL, TOEICE, IELTS SMP - SMA - Mahasiswa terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Privat TOEFL, TOEIC, IELTS dan English Conversation di{" "}
          {`${kecamatan.kecamatan}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Privat TOEFL, TOEIC, IELTS dan English Conversation di{" "}
              {kecamatan.kecamatan} - Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk TOEFL, TOEIC,
                IELTS dan English Conversation
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
              alt="Bimbel TOEFL TOEIC IELTS dan English Conversation Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel TOEFL TOEIC IELTS dan English Conversation Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestprogramSnbt2 />
        <SuccessStory />
        <PaketBelajarToefl />
        <GaleriKegiatan />
        <TestimoniToefl />
        <Voucer />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <Faqtni />
        <Asalsekolah />
        <PromoToefl />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamanKecamatanToefl;
