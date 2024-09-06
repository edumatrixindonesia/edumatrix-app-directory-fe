import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../../assets/head_content/supercamp.png";
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
import ListKabupatenSupercamp from "../../Tab/TabSupercamp/ListKabupatenSupercamp";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import SuccessSnbt from "../../../Program/BimbelSnbt/SuccessSnbt/SuccessSnbt";
import GaleriKegiatan from "../../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import Alumni from "../../Alumni/Alumni";
import InfoCamp from "../../InfoCamp/InfoCamp";
import Video from "../../Video/Video";
import SectionSupercamp from "../../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import PaketBelajarSnbt from "../../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SubtesSnbt from "../../../Program/BimbelSnbt/SubtesSnbt/SubtesSnbt";
import ProblemSnbt from "../../../Program/BimbelSnbt/ProblemSnbt/ProblemSnbt";
import LolosPtn from "../../../Program/BimbelSnbt/LolosPtn/LolosPtn";

const HalamankotaSupercamp = ({ setProgress }) => {
  const { id } = useParams();
  const [kotasnbt, setKotasnbt] = useState([]);

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
      setKotasnbt(response.data);
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
          content="Bimbel Supercamp Masuk Kedokteran dan UTBK SNBT, UI, UGM, Undip, Unair,
          Unpad, UB, Udayana Terbaik #1 - Edumatrix Indonesia Indonesia"
        />
        <title>
          Bimbel Masuk Kedokteran & UTBK SNBT di {`${kotasnbt.kota}`} - UI, UGM,
          Undip, Unair, Unpad, UB, Udayana Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Masuk Kedokteran & UTBK SNBT di {kotasnbt.kota} - UI, UGM,
              Undip, Unair, Unpad, UB, Udayana
            </h2>
            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotasnbt.kota} untuk UTBK-SNBT,
                Kedokteran, UMPTN, UMPTKIN, SIMAK UI, CBT UGM, UM PTN dan UTUL
                UGM
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
              alt="Bimbel Karantina Masuk Kedokteran dan PTN favorit"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel Karantina Masuk Kedokteran dan PTN favorit"
            />
          </a>
        </div>
        <BestprogramSnbt2 />
        <ProblemSnbt />
        <LolosPtn />
        <SubtesSnbt />
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
        <ListKabupatenSupercamp />
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

export default HalamankotaSupercamp;
