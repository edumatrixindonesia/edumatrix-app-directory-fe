import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestprogramPrivat2 from "../../BestProgram/BestProgram2/BestProgramPrivat2/BesProgramPrivat2";
import SuccessOsn from "../../../Program/BimbelOsn/SuccessOsn/SuccessOsn";
import PaketBelajarPrivat from "../../PaketBelajar/PaketBelajarPrivat/PaketBelajarPrivat";
import GaleriKegiatan from "../../../Program/BimbelPrivat/GaleriKegiatan/GaleriKegiatan";
import Voucer from "../../Voucer/Voucer";
import Testimoni from "../../Testimoni/Testimoni";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Alumni from "../../Alumni/Alumni";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";

const HalamanKecamatanPrivat = ({ setProgress }) => {
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
          content="Bimbel Les Privat TK, SD, SMP, SMA terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Privat TK - SD - SMP - SMA & Mahasiswa di{" "}
          {`${kecamatan.kecamatan}`} #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Privat TK - SD - SMP - SMA & Mahasiswa di{" "}
              {kecamatan.kecamatan} - Edumatrix Indonesia
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk TK, SD, SMP,
                SMA & Mahasiswa
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
              alt="Bimbel Privat Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Privat Terbaik"
            />
          </a>
        </div>
        <BestprogramPrivat2 />
        <SuccessOsn />
        <PaketBelajarPrivat />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
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

export default HalamanKecamatanPrivat;
