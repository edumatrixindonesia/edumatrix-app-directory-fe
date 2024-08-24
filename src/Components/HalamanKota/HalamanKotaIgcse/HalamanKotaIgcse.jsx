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
import ListUtbkSnbt from "../../Tab/TabUtbkSnbt/ListUtbkSnbt";
import ListKabupatenSnbt from "../../Tab/TabUtbkSnbt/ListKabupatenSnbt";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import ListKabupatenLpdp from "../../Tab/TabLpdp/ListKabupatenLpdp";
import ListKabupatenCpns from "../../Tab/TabCpns/ListKabupatenCpns";
import ListKabupatenIgcse from "../../Tab/TabIgcse/ListKabupatenIgcse";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Liputan from "../../Liputan/Liputan";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import PaketBelajarIgcse from "../../PaketBelajar/PaketBelajarIgcse/PaketBelajarIgcse";
import MateriIgcse from "../../../Program/BimbelIgcse/MateriIgcse/MateriIgcse";
import GaleriKegiatan from "../../../Program/BimbelIgcse/GaleriKegiatan/GaleriKegiatan";
import PromoIgcse from "../../../Program/BimbelIgcse/PromoIgcse/PromoIgcse";
import BestprogramPrivat2 from "../../BestProgram/BestProgram2/BestProgramPrivat2/BesProgramPrivat2";
import BestProgramIgcse2 from "../../BestProgram/BestProgram2/BestProgramIgcse2/BestProgramIgcse2";
import FloatingctaIgcse from "../../FloatingCta/FloatingctaIgcse/FloatingctaIgcse";
import KeunggulanIgcse from "../../Keunggulan/KeunggulanIgcse/KeunggulanIgcse";
import LiputanIgcse from "../../Liputan/LiputanIgcse/LiputanIgcse";
import AsalSekolahIgcse from "../../AsalSekolah/AsalSekolahIgcse/AsalSekolahIgcse";

const HalamankotaIgcse = () => {
  const { id } = useParams();
  const [kotaigcse, setKotaigcse] = useState([]);

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
      setKotaigcse(response.data);
    };
    id;
    getKota(id);
  }, [id, query]);

  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="IGCSE, O Level, A Level & IB Tutor #1 - Edumatrix Indonesia"
        />
        <title>
          IGCSE, O Level, A Level & IB Tutor in {`${kotaigcse.kota}`} #1 -
          Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              IGCSE, O Level, A Level & IB Tutor in {kotaigcse.kota}
            </h2>

            <div className="paragraf-kota">
              <p>
                Edumatrix Indonesia offers one-on-one tutoring IGCSE, O Level, A
                Level & IB in {kotaigcse.kota} to provide the best learning
                experience for students
              </p>
              <p className="child-paragraf-kota">
                Get Private Tutoring services anytime and anywhere with more
                than 5,000 Edumatrix Master Teachers who are ready to provide
                the best service.
              </p>
            </div>
          </div>
          <a className="parent-img-modeltanya-program" href="">
            <img
              className="rumah-adat"
              src={rumahAdat}
              alt="Bimbel Kurikulum IGCSE Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel Kurikulum IGCSE Terbaik"
            />
          </a>
        </div>
        <BestProgramIgcse2 />
        <PaketBelajarIgcse />
        <MateriIgcse />
        <GaleriKegiatan />
        <Voucer />
        <KeunggulanIgcse />
        <Masterteacher />
        <LiputanIgcse />
        <ListKabupatenIgcse />
        <Faqtni />
        <AsalSekolahIgcse />
        <PromoIgcse />
      </div>
      <Footer />
      <Bottombar />
      <FloatingctaIgcse />
    </React.Fragment>
  );
};

export default HalamankotaIgcse;
