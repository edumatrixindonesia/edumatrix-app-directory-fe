import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import BestProgramKsn2 from "../../BestProgram/BestProgram2/BestProgramKsn2/BestProgramKsn2";
import SuccessOsn from "../../../Program/BimbelOsn/SuccessOsn/SuccessOsn";
import PaketBelajarOsn from "../../PaketBelajar/PaketBelajarOsn/PaketBelajarOsn";
import GaleriKegiatan from "../../../Program/BimbelOsn/GaleriKegiatan/GaleriKegiatan";
import Voucer from "../../Voucer/Voucer";
import Testimoni from "../../Testimoni/Testimoni";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Liputan from "../../Liputan/Liputan";
import Faqtni from "../../Faq/FaqTni/FaqTni";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoOsn from "../../../Program/BimbelOsn/PromoOsn/PromoOsn";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";

const HalamanKecamatanKsn = () => {
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
          content="Bimbel Kompetisi Sains Nasional (OSN/KSN), SD-SMP-SMA terbaik terbaik dengan sistem belajar mengajar yang berkualitas #1 - Edumatrix Indonesia"
        />
        <title>
          Bimbel Kompetisi Sains Nasional (KSN) di {`${kecamatan.kecamatan}`} -
          SD, SMP, SMA Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Bimbel Kompetisi Sains Nasional (KSN) di {kecamatan.kecamatan} -
              SD, SMP, SMA
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Bimbel Les Privat di {kecamatan.kecamatan} untuk Persiapan
                Kompetisi Sains Nasional (OSN) jenjang SD - SMP - SMA
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
              alt="Bimbel Persiapan OSN SD-SMP-SMA"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel Persiapan OSN SD-SMP-SMA"
            />
          </a>
        </div>
        <BestProgramKsn2 />
        <SuccessOsn />
        <PaketBelajarOsn />
        <GaleriKegiatan />
        <Voucer />
        <Testimoni />
        <Keunggulan />
        <Masterteacher />
        <Liputan />
        <Faqtni />
        <Asalsekolah />
        <PromoOsn />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamanKecamatanKsn;
