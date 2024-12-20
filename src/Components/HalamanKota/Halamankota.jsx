import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Halamankota.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import rumahAdat from "../../assets/rumah_adat.png";
import tanyaProgram from "../../assets/tanya_program.png";
import Bestprogram2 from "../BestProgram/BestProgram2/Bestprogram2";
import Voucer from "../Voucer/Voucer";
import ListKabupaten from "../Tab/ListKabupaten";
import Masterteacher from "../MasterTeacher/Masterteacher";
import Footer from "../Footer/Footer";
import Keunggulan from "../Keunggulan/Keunggulan";
import Faq from "../Faq/Faq";
import Testimoni from "../Testimoni/Testimoni";
import Asalsekolah from "../AsalSekolah/Asalsekolah";
import { Helmet } from "react-helmet-async";
import Floatingcta from "../FloatingCta/Floatingcta";
import Bottombar from "../BottomBar/Bottombar";
import SuccessStory from "../SuccessStory/SuccessStory";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import Liputan from "../Liputan/Liputan";
import Alumni from "../Alumni/Alumni";
import Video from "../Video/Video";
import GaleriKegiatan from "../../Program/BimbelSupercamp/GaleriKegiatan/GaleriKegiatan";
import SectionSupercamp from "../../Program/BimbelSupercamp/SectionSupercamp/SectionSupercamp";
import PaketBelajarSnbt from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbt";
import LolosPtn from "../../Program/BimbelSnbt/LolosPtn/LolosPtn";
import PaketBelajarSnbtNew from "../PaketBelajar/PaketBelajarSnbt/PaketBelajarSnbtNew";

const Halamankota = ({ setProgress }) => {
  const { id } = useParams();
  const [kota, setKota] = useState([]);

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
      setKota(response.data);
    };
    getKota(id);
  }, [id, query]);

  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 50);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Bimbel Les Privat TK, SD, SMP, SMA, OSN, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />

        {/* <!-- Thumbnail Site --> */}
        <meta
          name="msapplication-TileImage"
          content="https://app.edumatrix-indonesia.com/static/media/rumah_adat.1551a94703cb9fe7e1ec.png"
        />

        <meta property="og:site_name" content="Edumatrix Indonesia" />
        <meta
          property="og:title"
          content="Bimbel Les Privat TK, SD, SMP, SMA, OSN, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <meta
          property="og:description"
          content="Les Privat TK SD SMP SMA Mahasiswa OSN SNBT CBT UGM SIMAK UI UM PTN Terbaik"
        />

        <meta
          property="og:image"
          itemprop="image"
          content="https://app.edumatrix-indonesia.com/static/media/rumah_adat.1551a94703cb9fe7e1ec.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpg" />

        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        <meta
          property="og:url"
          content="https://app.edumatrix-indonesia.com/"
        />

        <title>
          Les Privat di {`${kota.kota}`} - TK, SD, SMP, SMA, UTBK SNBT, SIMAK
          UI, UM PTN & CBT UGM - Bimbel di {`${kota.kota}`} Terbaik #1 -
          Edumatrix Indonesia
        </title>
        <link
          rel="canonical"
          href={`https://app.edumatrix-indonesia.com/les-privat-di-kota/${kota.slug}`}
        />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h2 className="title-halaman-kota">
              Les Privat di {kota.kota} - TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI,
              UM PTN & CBT UGM Terbaik
            </h2>

            <div className="paragraf-kota">
              <p>
                Bimbel Les Privat di Kota {kota.kota} untuk TK, SD, SMP, SMA,
                UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT, CBT UGM, UM
                PTN, AKPOL, AKMIL, Kedinasan, Mahasiswa dan Karyawan.{" "}
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
              alt="Les Privat Terbaik"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={tanyaProgram}
              alt="Les Privat Terbaik"
            />
          </a>
        </div>
        <Bestprogram2 />
        <LolosPtn />
        <PaketBelajarSnbt />
        <PaketBelajarSnbtNew />
        <SectionSupercamp />
        <GaleriKegiatan />
        <Video />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <SuccessStory />
        <Alumni />
        <Liputan />
        <ListKabupaten />
        <Faq />
        <Asalsekolah />
        <PromoHomepage />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankota;
