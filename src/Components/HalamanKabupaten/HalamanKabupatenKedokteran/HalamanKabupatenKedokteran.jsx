import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Bottombar from "../../BottomBar/Bottombar";
import Footer from "../../Footer/Footer";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import SuccessSnbt from "../../../Program/BimbelSnbt/SuccessSnbt/SuccessSnbt";
import GaleriKegiatan from "../../../Program/BimbelSnbt/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import InfoCamp from "../../InfoCamp/InfoCamp";
import Alumni from "../../Alumni/Alumni";
import PaketBelajarSnbt from "../../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import SectionSupercamp from "../../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import Video from "../../Video/Video";
import ListKabupatenSnbt from "../../Tab/TabUtbkSnbt/ListKabupatenSnbt";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import PaketBelajarKedokteran from "../../PaketBelajar/PaketBelajarKedokteran/PaketBelajarKedokteran";

const HalamanKabupatenKedokteran = () => {
  const { id } = useParams();
  const [kabupaten, setKabupaten] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKabupaten = async () => {
      const response = await axiosJWT.get(
        `https://api.edulink-indonesia.com/ibukotakabupaten/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        }
      );
      setKabupaten(response.data);
    };
    id;
    getKabupaten(id);
  }, [id, query]);
  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="Bimbel Masuk Kedokteran UTBK SNBT, SIMAK UI, CBT UGM, UM PTN Terbaik
          #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Masuk Kedokteran UTBK SNBT, SIMAK UI, CBT UGM di{" "}
          {`${kabupaten.kota_kabupaten}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Persiapan Masuk Kedokteran UTBK SNBT, SIMAK UI, CBT UGM di{" "}
              {kabupaten.kota_kabupaten} - Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Masuk Kedokteran di{" "}
                {kabupaten.kota_kabupaten} untuk UTBK-SNBT, Kedokteran, UMPTN,
                UMPTKIN, SIMAK UI dan UTUL UGM
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
              alt="Bimbel Masuk PTN Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Masuk PTN Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestprogramSnbt2 />
        <Voucer />
        <SuccessSnbt />
        <PaketBelajarKedokteran />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
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

export default HalamanKabupatenKedokteran;