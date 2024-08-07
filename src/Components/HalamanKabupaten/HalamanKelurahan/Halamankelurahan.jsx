import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import rumahAdat from "../../../assets/rumah_adat.png";
import { Helmet } from "react-helmet-async";
import Bestprogram2 from "../../BestProgram/BestProgram2/Bestprogram2";
import SuccessStory from "../../SuccessStory/SuccessStory";
import Voucer from "../../Voucer/Voucer";
import Masterteacher from "../../MasterTeacher/Masterteacher";
import Keunggulan from "../../Keunggulan/Keunggulan";
import Testimoni from "../../Testimoni/Testimoni";
import Faq from "../../Faq/Faq";
import Asalsekolah from "../../AsalSekolah/Asalsekolah";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import Liputan from "../../Liputan/Liputan";
import Footer from "../../Footer/Footer";
import Bottombar from "../../BottomBar/Bottombar";
import Floatingcta from "../../FloatingCta/Floatingcta";
import Navbar from "../../Navbar/Navbar";


const Halamankelurahan = () => {
    const { id } = useParams();
    const [kelurahan, setKelurahan] = useState([]);
  

    console.log("kel",id);
    
    function useQuery() {
      const { search } = useLocation();
      return useMemo(() => new URLSearchParams(search), [search]);
    }
  
    const query = useQuery();
    const axiosJWT = axios.create();
  
    useEffect(() => {
      const getKelurahan = async () => {
        const response = await axiosJWT.get(
          `https://api.edulink-indonesia.com/kelurahankec/${id}`,
          {
            headers: {
              Authorization: `Bearer`,
            },
          }
        );
        setKelurahan(response.data);
      };
      console.log(getKelurahan);
      getKelurahan(id);
    }, [id, query]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="robots"
          content="Jasa Les Privat terbaik dengan sistem belajar mengajar yang berkualitas  #1 - Edumatrix Indonesia"
        />
        <title>
          Les Privat di {`${kelurahan.kelurahan}`} - Bimbel di{" "}
          {`${kelurahan.kelurahan}`} Terbaik #1 - Edumatrix Indonesia
        </title>
        <link rel="canonical" href="" />
      </Helmet>
      <Navbar />
      <div className="container-halaman-kabupaten">
        <div className="content-kabupaten">
          <div className="teks-content">
            <h2 className="title-halaman-kabupaten">
              Les Privat Terbaik di Kelurahan {kelurahan.kelurahan}
            </h2>
            <div className="paragraf-kabupaten">
              <p>
                Jasa Les Privat di Kelurahan {kelurahan.kelurahan} untuk TK, SD,
                SMP, SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, SNBT, AKPOL,
                AKMIL, Kedinasan, Mahasiswa dan Karyawan.{" "}
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
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a>

          <a
            className="parent-img-modeltanya-program"
            href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
          >
            <img
              className="model-program-kota"
              src={modelTanyaProgram}
              alt="Bimbel TK-SD-SMP-SMA"
            />
          </a>
        </div>
        <Bestprogram2 />
        <SuccessStory />
        <Voucer />
        <Masterteacher />
        <Keunggulan />
        <Testimoni />
        <Faq />
        <Asalsekolah />
        <PromoHomepage />
        <Liputan />
      </div>
      <Footer />
      <Bottombar />
      <Floatingcta />
    </React.Fragment>
  );
};

export default Halamankelurahan;
