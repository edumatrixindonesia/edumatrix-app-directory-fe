import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import SuccessSnbt from "../../../Program/BimbelSnbt/SuccessSnbt/SuccessSnbt";
import PaketBelajarSnbt from "../../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import GaleriKegiatan from "../../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../../Video/Video";
import Voucer from "../../Voucer/Voucer";
import Testimoni from "../../Testimoni/Testimoni";
import Keunggulan from "../../Keunggulan/Keunggulan";
import InfoCamp from "../../InfoCamp/InfoCamp";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Alumni from "../../Alumni/Alumni";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import rumahAdat from "../../../assets/rumah_adat.png";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import ProblemSnbt from "../../../Program/BimbelSnbt/ProblemSnbt/ProblemSnbt";
import LolosPtn from "../../../Program/BimbelSnbt/LolosPtn/LolosPtn";

const HalamanKecamatanSupercamp = ({ setProgress }) => {
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
          content="Bimbel Supercamp Masuk Kedokteran dan UTBK SNBT, UI, UGM, Undip, Unair,
          Unpad, UB, Udayana Terbaik #1 - Edumatrix Indonesia Indonesia"
        />
        <title>
          Bimbel Masuk Kedokteran & UTBK SNBT di {`${kecamatan.kecamatan}`} -
          UI, UGM, Undip, Unair, Unpad, UB, Udayana Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Masuk Kedokteran & UTBK SNBT di {kecamatan.kecamatan} - UI,
              UGM, Undip, Unair, Unpad, UB, Udayana
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di Kabupaten {kecamatan.kecamatan} untuk
                UTBK-SNBT, Kedokteran, UMPTN, UMPTKIN, SIMAK UI dan UTUL UGM
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
              alt="Bimbel Karantina Supercamp - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Karantina Supercamp - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestprogramSnbt2 />
        <ProblemSnbt />
        <LolosPtn />
        <PaketBelajarSnbt />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <InfoCamp />
        <Masterteacher />
        <SuccessSnbt />
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

export default HalamanKecamatanSupercamp;
