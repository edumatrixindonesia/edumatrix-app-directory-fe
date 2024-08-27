import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Halamankota from "./Components/HalamanKota/Halamankota";
import Halamankabupaten from "./Components/HalamanKabupaten/Halamankabupaten";
import Halamanprogram from "./Components/HalamanProgram/Halamanprogram";
import HalamanProgramperkota from "./Components/HalamanProgramperKota/HalamanProgramperkota";
import Halamanmapel from "./Components/HalamanMapel/Halamanmapel";
import HalamanMapelperkota from "./Components/HalamanMapelperKota/HalamanMapelperkota";
import Errorpage from "./Components/ErrorPage/Errorpage";
import Searchkelas from "./Components/SearchKelas/Searchkelas";
import Aboutus from "./Components/AboutUs/Aboutus";
import BimbelTni from "./Program/BimbelTni/BimbelTni";
import Halamankotatni from "./Components/HalamanKota/HalamanKotaTni/Halamankotatni";
import Halamanprogramtni from "./Components/HalamanProgram/HalamanProgramTni/HalamanProgramTni";
import HalamanProgramperkotaTni from "./Components/HalamanProgramperKota/HalamanProgramperKotaTni/HalamanProgramperKotaTni";
import BimbelSnbt from "./Program/BimbelSnbt/BimbelSnbt";
import HalamankotaSnbt from "./Components/HalamanKota/HalamanKotaSnbt/HalamanKotaSnbt";
import Halamanprogramsnbt from "./Components/HalamanProgram/HalamanProgramSnbt/HalamanProgramSnbt";
import HalamankabupatenSnbt from "./Components/HalamanKabupaten/HalamanKabupatenSnbt/HalamanKabupatenSnbt";
import BimbelSupercamp from "./Program/BimbelSupercamp/BimbelSupercamp";
import HalamankotaSupercamp from "./Components/HalamanKota/HalamanKotaSupercamp/HalamanKotaSupercamp";
import HalamankabupatenSupercamp from "./Components/HalamanKabupaten/HalamanKabupatenSupercamp/HalamanKabupatenSupercamp";
import BimbelLpdp from "./Program/BimbelLpdp/BimbelLpdp";
import HalamankotaLpdp from "./Components/HalamanKota/HalamanKotaLpdp/HalamanKotaLpdp";
import HalamankabupatenLpdp from "./Components/HalamanKabupaten/HalamanKabupatenLpdp/HalamanKabupatenLpdp";
import BimbelPrivat from "./Program/BimbelPrivat/BimbelPrivat";
import HalamankotaPrivat from "./Components/HalamanKota/HalamanKotaPrivat/HalamanKotaPrivat";
import HalamankabupatenPrivat from "./Components/HalamanKabupaten/HalamanKabupatenPrivat/HalamanKabupatenPrivat";
import BimbelCpns from "./Program/BimbelCpns/BimbelCpns";
import HalamankotaCpns from "./Components/HalamanKota/HalamanKotaCpns/HalamanKotaCpns";
import HalamankabupatenCpns from "./Components/HalamanKabupaten/HalamanKabupatenCpns/HalamanKabupatenCpns";
import BimbelBumn from "./Program/BimbelBumn/BimbelBumn";
import HalamankotaBumn from "./Components/HalamanKota/HalamanKotaBumn/HalamanKotaBumn";
import BimbelIgcse from "./Program/BimbelIgcse/BimbelIgcse";
import HalamankotaIgcse from "./Components/HalamanKota/HalamanKotaIgcse/HalamanKotaIgcse";
import HalamankabupatenIgcse from "./Components/HalamanKabupaten/HalamanKabupatenIgcse/HalamanKabupatenIgcse";
import BimbelIup from "./Program/BimbelIup/BimbelIup";
import HalamankotaIup from "./Components/HalamanKota/HalamanKotaIup/HalamanKotaIup";
import HalamankabupatenIup from "./Components/HalamanKabupaten/HalamanKabupatenIup/HalamanKabupatenIup";
import BimbelOsn from "./Program/BimbelOsn/BimbelOsn";
import HalamankotaOsn from "./Components/HalamanKota/HalamanKotaOsn/HalamanKotaOsn";
import HalamankabupatenBumn from "./Components/HalamanKabupaten/HalamanKabupatenBumn/HalamanKabupatenBumn";
import HalamankabupatenOsn from "./Components/HalamanKabupaten/HalamanKabupatenOsn/HalamanKabupatenOsn";
import BimbelToefl from "./Program/BimbelToefl/BimbelToefl";
import HalamankotaToefl from "./Components/HalamanKota/HalamanKotaToefl/HalamanKotaToefl";
import HalamankabupatenToefl from "./Components/HalamanKabupaten/HalamanKabupatenToefl/HalamanKabupatenToefl";
import Halamankecamatan from "./Components/HalamanKecamatan/Halamankecamatan";
import Halamankelurahan from "./Components/HalamanKabupaten/HalamanKelurahan/Halamankelurahan";
import BimbelKedokteran from "./Program/BimbelKedokteran/BimbelKedokteran";
import HalamanKotaKedokteran from "./Components/HalamanKota/HalamanKotaKedokteran/HalamanKotaKedokteran";
import HalamanKabupatenKedokteran from "./Components/HalamanKabupaten/HalamanKabupatenKedokteran/HalamanKabupatenKedokteran";
import Produk from "./Components/Produk/Produk";
import BimbelKsn from "./Program/BimbelKsn/BimbelKsn";
import HalamanKotaKsn from "./Components/HalamanKota/HalamanKotaKsn/HalamanKotaKsn";
import HalamanKabupatenKsn from "./Components/HalamanKabupaten/HalamanKabupatenKsn/HalamanKabupatenKsn";
import HalamanKecamatanKedokteran from "./Components/HalamanKecamatan/HalamanKecamatanKedokteran/HalamanKecamatanKedokteran";
import HalamanKecamatanSupercamp from "./Components/HalamanKecamatan/HalamanKecamatanSupercamp/HalamanKecamatanSupercamp";
import HalamanKecamatanSnbt from "./Components/HalamanKecamatan/HalamanKecamatanSnbt/HalamanKecamatanSnbt";
import HalamanKecamatanPrivat from "./Components/HalamanKecamatan/HalamanKecamatanPrivat/HalamanKecamatanPrivat";
import HalamanKecamatanLpdp from "./Components/HalamanKecamatan/HalamanKecamatanLpdp/HalamanKecamatanLpdp";
import HalamanKecamatanCpns from "./Components/HalamanKecamatan/HalamanKecamatanCpns/HalamanKecamatanCpns";
import HalamanKecamatanBumn from "./Components/HalamanKecamatan/HalamanKecamatanBumn/HalamanKecamatanBumn";
import HalamanKecamatanIgcse from "./Components/HalamanKecamatan/HalamanKecamatanIgcse/HalamanKecamatanIgcse";
import HalamanKecamatanIup from "./Components/HalamanKecamatan/HalamanKecamatanIup/HalamanKecamatanIup";
import HalamanKecamatanOsn from "./Components/HalamanKecamatan/HalamanKecamatanOsn/HalamanKecamatanOsn";
import HalamanKecamatanKsn from "./Components/HalamanKecamatan/HalamanKecamatanKsn/HalamanKecamatanKsn";
import HalamanKecamatanToefl from "./Components/HalamanKecamatan/HalamanKecamatanToefl/HalamanKecamatanToefl";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const TRACKING_ID = "G-NZRFMBB12N";
ReactGA.initialize(TRACKING_ID)

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <BrowserRouter>
    <LoadingBar
        color="white"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<Homepage setProgress = {setProgress} />}></Route>
        {/* Go to City By ID */}
        <Route exact path="/les-privat-di-kota/:id" element={<Halamankota setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten By ID */}
        <Route exact path="/les-privat-di/:id" element={<Halamankabupaten setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan By ID */}
        <Route exact path="/les-privat-di/kecamatan/:id" element={<Halamankecamatan setProgress = {setProgress} />}></Route>
        {/* Go to Kelurahan By ID */}
        <Route exact path="/les-privat-di/kelurahan/:id" element={<Halamankelurahan setProgress = {setProgress} />}></Route>
        {/* Go to program By ID */}
        <Route exact path="/les-privat/program/:id" element={<Halamanprogram setProgress = {setProgress} />}></Route>
        {/* Go to program per Kota By ID */}
        <Route exact path="/les-privat/program/:programid/kota/:id" element={<HalamanProgramperkota setProgress = {setProgress} />}></Route>
        {/* Go to Mapel By ID */}
        <Route exact path="/les-privat/mata-pelajaran/:id" element={<Halamanmapel setProgress = {setProgress} />}></Route>
        {/* Go to Mapel per kota By ID */}
        <Route exact path="/les-privat/mata-pelajaran/:mapelId/kota/:id" element={<HalamanMapelperkota setProgress = {setProgress} />}></Route>
        {/* Go to Errorpage */}
        <Route exact path="*" element={<Homepage />}></Route>
        {/* Go to Search Kelas */}
        <Route exact path="/pilihan-kelas" element={<Searchkelas setProgress = {setProgress} />}></Route>
        {/* Go to About Us */}
        <Route exact path="/tentang-kami" element={<Aboutus setProgress = {setProgress} />}></Route>
        {/* Go to Produk */}
        <Route exact path="/produk" element={<Produk setProgress = {setProgress} />}></Route>

        {/* PROGRAM BIMBEL */}
        {/* TNI-POLRI */}
        <Route exact path="/bimbel-tni-polri-dan-sekolah-kedinasan" element={<BimbelTni setProgress = {setProgress} />}></Route>
        {/* Go to City TNI By ID */}
        <Route exact path="/bimbel-tni-polri-dan-sekolah-kedinasan-di/:id" element={<Halamankotatni setProgress = {setProgress} />}></Route>
        {/* Go to program TNI By ID */}
        <Route exact path="/bimbel/:id-terbaik" element={<Halamanprogramtni setProgress = {setProgress} />}></Route>
        {/* Go to program per Kota TNI By ID */}
        <Route exact path="/bimbel-di-kota/:id" element={<HalamanProgramperkotaTni setProgress = {setProgress} />}></Route>

        {/* SNBT */}
        <Route exact path="/bimbel-snbt-terbaik" element={<BimbelSnbt setProgress = {setProgress} />}></Route>
        {/* Go to City SNBT By ID */}
        <Route exact path="/bimbel-snbt-terbaik-di/:id" element={<HalamankotaSnbt setProgress = {setProgress} />}></Route>
        {/* Go to Program SNBT By ID */}
        <Route exact path="/bimbel-privat/:id" element={<Halamanprogramsnbt />}></Route>
        {/* Go to Kabupaten SNBT By ID */}
        <Route exact path="/bimbel-snbt/kabupaten/:id" element={<HalamankabupatenSnbt setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan SNBT By ID */}
        <Route exact path="/bimbel-snbt/kecamatan/:id" element={<HalamanKecamatanSnbt setProgress = {setProgress} />}></Route>

        {/* SUPERCAMP */}
        <Route exact path="/bimbel-supercamp-edumatrix" element={<BimbelSupercamp setProgress = {setProgress} />}></Route>
        {/* Go to City SUPERCAMP By ID */}
        <Route exact path="/bimbel-supercamp-edumatrix-di/:id" element={<HalamankotaSupercamp setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten SUPERCAMP By ID */}
        <Route exact path="/bimbel-supercamp-edumatrix/kabupaten/:id" element={<HalamankabupatenSupercamp setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan SUPERCAMP By ID */}
        <Route exact path="/bimbel-supercamp-edumatrix/kecamatan/:id" element={<HalamanKecamatanSupercamp setProgress = {setProgress} />}></Route>

        {/* LPDP */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp" element={<BimbelLpdp setProgress = {setProgress} />}></Route>
        {/* Go to City LPDP By ID */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp-di/:id" element={<HalamankotaLpdp setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten LPDP By ID */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp/kabupaten/:id" element={<HalamankabupatenLpdp setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan LPDP By ID */}
        <Route exact path="/bimbel-persiapan-seleksi-lpdp/kecamatan/:id" element={<HalamanKecamatanLpdp setProgress = {setProgress} />}></Route>

        {/* PRIVAT */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa" element={<BimbelPrivat setProgress = {setProgress} />}></Route>
        {/* Go to City PRIVAT By ID */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa-di/:id" element={<HalamankotaPrivat setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten PRIVAT By ID */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa/kabupaten/:id" element={<HalamankabupatenPrivat setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan PRIVAT By ID */}
        <Route exact path="/bimbel-privat-tk-sd-smp-sma-mahasiswa/kecamatan/:id" element={<HalamanKecamatanPrivat setProgress = {setProgress} />}></Route>

        {/* CPNS */}
        <Route exact path="/bimbel-cpns-dan-pppk" element={<BimbelCpns setProgress = {setProgress} />}></Route>
        {/* Go to City CPNS By ID */}
        <Route exact path="/bimbel-cpns-dan-pppk-di/:id" element={<HalamankotaCpns setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten CPNS By ID */}
        <Route exact path="/bimbel-cpns-dan-pppk/kabupaten/:id" element={<HalamankabupatenCpns setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan CPNS By ID */}
        <Route exact path="/bimbel-cpns-dan-pppk/kecamatan/:id" element={<HalamanKecamatanCpns setProgress = {setProgress} />}></Route>

        {/* BUMN */}
        <Route exact path="/bimbel-seleksi-bumn" element={<BimbelBumn setProgress = {setProgress} />}></Route>
        {/* Go to City BUMN By ID */}
        <Route exact path="/bimbel-seleksi-bumn-di/:id" element={<HalamankotaBumn setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten BUMN By ID */}
        <Route exact path="/bimbel-seleksi-bumn/kabupaten/:id" element={<HalamankabupatenBumn setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan BUMN By ID */}
        <Route exact path="/bimbel-seleksi-bumn/kecamatan/:id" element={<HalamanKecamatanBumn setProgress = {setProgress} />}></Route>

        {/* IGCSE */}
        <Route exact path="/bimbel-kurikulum-igcse" element={<BimbelIgcse setProgress = {setProgress} />}></Route>
        {/* Go to City IGCSE By ID */}
        <Route exact path="/bimbel-igcse-dan-ibtutor-di/:id" element={<HalamankotaIgcse setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten BUMN By ID */}
        <Route exact path="/bimbel-igcse-dan-ibtutor/kabupaten/:id" element={<HalamankabupatenIgcse setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan BUMN By ID */}
        <Route exact path="/bimbel-igcse-dan-ibtutor/kecamatan/:id" element={<HalamanKecamatanIgcse setProgress = {setProgress} />}></Route>

        {/* IUP-KKI */}
        <Route exact path="/bimbel-iup-kki" element={<BimbelIup setProgress = {setProgress} />}></Route>
        {/* Go to City IUPKKI By ID */}
        <Route exact path="/bimbel-iup-kki-di/:id" element={<HalamankotaIup setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten IUPKKI By ID */}
        <Route exact path="/bimbel-iup-kki/kabupaten/:id" element={<HalamankabupatenIup setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten IUPKKI By ID */}
        <Route exact path="/bimbel-iup-kki/kecamatan/:id" element={<HalamanKecamatanIup setProgress = {setProgress} />}></Route>

        {/* OSN */}
        <Route exact path="/bimbel-osn" element={<BimbelOsn setProgress = {setProgress} />}></Route>
        {/* Go to City OSN By ID */}
        <Route exact path="/bimbel-osn-di/:id" element={<HalamankotaOsn setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten OSN By ID */}
        <Route exact path="/bimbel-osn/kabupaten/:id" element={<HalamankabupatenOsn setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan OSN By ID */}
        <Route exact path="/bimbel-osn/kecamatan/:id" element={<HalamanKecamatanOsn setProgress = {setProgress} />}></Route>

        {/* TOEFL */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation" element={<BimbelToefl setProgress = {setProgress} />}></Route>
        {/* Go to City TOEFL By ID */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation-di/:id" element={<HalamankotaToefl setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten TOEFL By ID */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation/kabupaten/:id" element={<HalamankabupatenToefl setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan TOEFL By ID */}
        <Route exact path="/bimbel-toefl-toeic-ielts-dan-english-conversation/kecamatan/:id" element={<HalamanKecamatanToefl setProgress = {setProgress} />}></Route>

        {/* KEDOKTERAN */}
        <Route exact path="/bimbel-masuk-kedokteran" element={<BimbelKedokteran setProgress = {setProgress} />}></Route>
        {/* Go to City Kedokteran By ID */}
        <Route exact path="/bimbel-masuk-kedokteran/:id" element={<HalamanKotaKedokteran setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten Kedokteran By ID */}
        <Route exact path="/bimbel-masuk-kedokteran/kabupaten/:id" element={<HalamanKabupatenKedokteran setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan Kedokteran By ID */}
        <Route exact path="/bimbel-masuk-kedokteran/kecamatan/:id" element={<HalamanKecamatanKedokteran setProgress = {setProgress} />}></Route>

        {/* KSN */}
        <Route exact path="/pelatihan-osn-ksn" element={<BimbelKsn setProgress = {setProgress} />}></Route>
        {/* Go to City KSN By ID */}
        <Route exact path="/pelatihan-osn-ksn/:id" element={<HalamanKotaKsn setProgress = {setProgress} />}></Route>
        {/* Go to Kabupaten KSN By ID */}
        <Route exact path="/pelatihan-osn-ksn/kabupaten/:id" element={<HalamanKabupatenKsn setProgress = {setProgress} />}></Route>
        {/* Go to Kecamatan KSN By ID */}
        <Route exact path="/pelatihan-osn-ksn/kecamatan/:id" element={<HalamanKecamatanKsn setProgress = {setProgress} />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
