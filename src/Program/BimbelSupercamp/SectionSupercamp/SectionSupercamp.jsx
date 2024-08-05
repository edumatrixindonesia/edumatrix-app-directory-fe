import React from "react";
import "./SectionSupercamp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import textMengapaKarantina from "../../../assets/icon_supercamp/mengapa_karantina.png"
import textTargetProgram from "../../../assets/icon_supercamp/target_Program.png"

const SectionSupercamp = () => {
  return (
    <React.Fragment>
      <div className="tentang-supercamp">
        <button className="title-section-supercamp">
          <h2>Supercamp Edumatrix Indonesia 2025</h2>
        </button>
        <p className="paragraf-section-supercamp">
          <b>Supercamp Edumatrix Indonesia</b> adalah program belajar karantina
          yang memfokuskan pembelajaran secara lebih intens. Sistem belajar{" "}
          <b>One on One</b> yang mempertemukan satu guru dengan satu siswa atau
          sesuai dengan kebutuhan dan kecocokan belajarmu. Dengan tujuan yaitu
          proses pembelajaran terjadi secara lebih efektif dan membuat siswa
          lebih mudah memahami materi pelajaran.
        </p>
      </div>

      <div className="tentang-supercamp-2">
        <div className="box-mengapa-karantina">
          {/* <h3 className="title-supercamp-2">Mengapa Karantina</h3> */}
          <img className="img-mengapa-karantina" src={textMengapaKarantina} alt="" />
          <div className="parent-section-supercamp">
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Pendampingan akademik dan non akademik setiap hari (24 jam)
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Siswa lebih fokus dalam belajar, terhindar dari gangguan yang tidak
            perlu
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Program belajar sangat terencana dan terukur hasilnya
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Metode belajar yang personal, sistematis dan terstruktur
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Proses belajar yang efektif, efisien dan tertarget
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Penanganan lebih holistik mulai dari pemahaman materi, skill dan
            kemampuan mengerjakan soal, motivasi, dan ibadah/pendekatan diri
            kepada Sang Pencipta
          </li>
          </div>
        </div>

        <div className="box-mengapa-karantina">
        <img className="img-mengapa-karantina" src={textTargetProgram} alt="" />
          <div className="parent-section-supercamp">
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Implementasi efektif model belajar berdasarkan hasil dari mapping
            kebutuhan siswa
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Penguasaan strategi belajar efektif UTBK SNBT/SBMPTN, Simak UI, UTUL
            UGM & UM PTN
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Meningkatkan kemampuan siswa dalam memahami konsep dasar dari setiap
            materi
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Meningkatkan skill dan kemampuan mengerjakan soal secara cepat &
            tepat
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Siswa siap menghadapi SNBT 2025
          </li>
          <li className="list-section-supercamp">
            <FontAwesomeIcon
              className="icon-section-supercamp"
              icon={faCheck}
            />{" "}
            Siswa berhasil lolos SNBT 2025
          </li>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionSupercamp;
