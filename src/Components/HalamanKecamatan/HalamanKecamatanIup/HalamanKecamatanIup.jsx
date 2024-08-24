import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestprogramSnbt2 from "../../BestProgram/BestProgram2/BestProgramSnbt2/BestProgramSnbt2";
import SuccessSnbt from "../../../Program/BimbelSnbt/SuccessSnbt/SuccessSnbt";
import PaketBelajarIup from "../../PaketBelajar/PaketBelajarIup/PaketBelajarIup";
import GaleriKegiatan from "../../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import Video from "../../Video/Video";
import Voucer from "../../Voucer/Voucer";
import Testimoni from "../../Testimoni/Testimoni";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Alumni from "../../Alumni/Alumni";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import PromoIup from "../../../Program/BimbelIup/PromoIup/PromoIup"

const HalamanKecamatanIup = () => {
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
          content="Bimbel Persiapan IUP UGM, IUP ITB, IUP Unair SIMAK KKI UI, UTBK SNBT Terbaik
          #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Persiapan IUP - KKI di {`${kecamatan.kecamatan}`} - IUP UGM,
          IUP ITB, IUP UNAIR, SIMAK KKI UI, UTBK SNBT Terbaik #1 - Edumatrix
          Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Persiapan IUP - KKI di {kecamatan.kecamatan} - IUP UGM, IUP
              ITB, IUP Unair, SIMAK KKI UI, UTBK SNBT
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk Seleksi IUP
                UGM, IUP ITB, IUP Unair, SIMAK KKI UI, UTBK SNBT
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
              alt="Bimbel Persipan IUP/KKI"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Persipan IUP/KKI"
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

export default HalamanKecamatanIup;
