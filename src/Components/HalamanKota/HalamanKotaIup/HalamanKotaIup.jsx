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
import Faqtni from "../../Faq/FaqTni/FaqTni";
import ListKabupatenIup from "../../Tab/TabIup/ListKabupatenIup";
import GaleriKegiatan from "../../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Liputan from "../../Liputan/Liputan";
import SuccessSnbt from "../../../Program/BimbelSnbt/SuccessSnbt/SuccessSnbt";
import PaketBelajarIup from "../../PaketBelajar/PaketBelajarIup/PaketBelajarIup";
import Video from "../../Video/Video";
import Alumni from "../../Alumni/Alumni";
import PromoIup from "../../../Program/BimbelIup/PromoIup/PromoIup";

const HalamankotaIup = ({ setProgress }) => {
  const { id } = useParams();
  const [kotaiup, setKotaiup] = useState([]);

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
      setKotaiup(response.data);
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
          content="Bimbel Persiapan IUP UGM, IUP ITB, IUP Unair SIMAK KKI UI, UTBK SNBT Terbaik
          #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Persiapan IUP - KKI di {`${kotaiup.kota}`} - IUP UGM, IUP ITB,
          IUP UNAIR, SIMAK KKI UI, UTBK SNBT Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Bimbel Persiapan IUP - KKI di {kotaiup.kota} - IUP UGM, IUP ITB,
              IUP Unair, SIMAK KKI UI, UTBK SNBT
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kotaiup.kota} untuk Seleksi IUP UGM,
                IUP ITB, IUP Unair, SIMAK KKI UI, UTBK SNBT
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
              alt="Bimbel IUP ITB UGM dan KKI UI Terbaik - Edumatrix Indonesia"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Bimbel IUP ITB UGM dan KKI UI Terbaik - Edumatrix Indonesia"
            />
          </a>
        </div>
        <BestprogramSnbt2 />
        <SuccessSnbt />
        <PaketBelajarIup />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Alumni />
        <Liputan />
        <ListKabupatenIup />
        <Faqtni />
        <Asalsekolah />
        <PromoIup />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamankotaIup;
