import React from "react";
import "./SuccessStory.css";
// SNBT
import successStorySnbt1 from "../../assets/success_story/snbt/Fatimah Az Zahra potrait.jpg";
import successStorySnbt2 from "../../assets/success_story/snbt/Khristofer Abimanyu potrait.jpg";
import successStorySnbt3 from "../../assets/success_story/snbt/Lolos UTBK SNBT_Fadil Arvia Albahrin.jpg";
import successStorySnbt4 from "../../assets/success_story/snbt/Salma Nisrina potrait.jpg";
import successStorySnbt5 from "../../assets/success_story/snbt/Zaidan Shafiq Abid potrait.jpg";
import successStorySnbt6 from "../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Abdul.jpeg";
import successStorySnbt7 from "../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Naufal.jpeg";
import successStorySnbt8 from "../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Naura.jpeg";
import successStorySnbt9 from "../../assets/success_story/snbt/Lolos_CBT_UGM_Regina.jpeg";
import successStorySnbt10 from "../../assets/success_story/snbt/Lolos_CBT_UGM_Salma.jpeg";
import successStorySnbt11 from "../../assets/success_story/snbt/Lolos_CBT_UGM_Sheval.jpeg";
import successStorySnbt12 from "../../assets/success_story/snbt/Success_Story_UM_UNDIP_Charisa.jpeg";
import successStorySnbt13 from "../../assets/success_story/snbt/Success_Story_UM_UNAIR_Alifia_Potrait.jpeg";
// TNI POLRI
import successStoryTni1 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Alfaza_Potrait.jpeg";
import successStoryTni2 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Halim_Potrait.jpeg";
import successStoryTni3 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Hazzel_Potrait.jpeg";
import successStoryTni4 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Wisnu_Potrait.jpeg";
import successStoryTni5 from "../../assets/success_story/tni-polri/Success_Story_Sekolah_Kedinasan_Fariz.jpeg";
import successStoryTni6 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Riyad_Potrait.jpeg";
import successStoryTni7 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Fikri_Potrait.jpeg";
import successStoryTni8 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Fitrah_Potrait.jpeg";
import successStoryTni9 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Hanif_Potrait.jpeg";
import successStoryTni10 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Laode_Potrait.jpeg";
import successStoryTni11 from "../../assets/success_story/tni-polri/Success_Story_Tni_Polri_izzy_Potrait.jpeg";
// OSN
import successStoryOsn1 from "../../assets/success_story/osn/Success_Story_OSN_Asytar.jpeg";
import successStoryOsn2 from "../../assets/success_story/osn/Success_Story_OSN_Hanan.jpeg";

const SuccessStory = () => {
  return (
    <React.Fragment>
      <div className="box-success-story-all">
        <h1 className="title-success-story-all">SUCCESS STORY</h1>
        <div className="parent-success-story-all">
          {/* SNBT */}
          <h2 className="subtitle-all-success-story">UTBK - SNBT</h2>
          <div className="parent-child-success-story-all">
            <img
              className="child-success-story-all"
              src={successStorySnbt9}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt10}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt11}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt4}
              alt="Les Privat SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt5}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt12}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt13}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt6}
              alt="Bimbel UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt7}
              alt="Les Privat SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt8}
              alt="Les Privat UTBK SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt1}
              alt="Bimbel SNBT Terbaik"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt2}
              alt="Bimbel SNBT"
            />
            <img
              className="child-success-story-all"
              src={successStorySnbt3}
              alt="Bimbel UTBK SNBT"
            />
          </div>
          {/* OSN */}
          <h2 className="subtitle-all-success-story">
            OLIMPIADE SAINS NASIONAL
          </h2>
          <div className="parent-child-success-story-all">
            <img
              className="child-success-story-all"
              src={successStoryOsn1}
              alt="OSN Matematika"
            />
            <img
              className="child-success-story-all"
              src={successStoryOsn2}
              alt="OSN IPA"
            />
          </div>
          {/* TNI POLRI */}
          <h2 className="subtitle-all-success-story">
            TNI - POLRI & SEKOLAH KEDINASAN
          </h2>
          <div className="parent-child-success-story-all">
            <img
              className="child-success-story-all"
              src={successStoryTni1}
              alt="Bimbel Bintara Tamtama"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni2}
              alt="Bimbel Akpol Terbaik"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni3}
              alt="Bimbel Akmil Terbaik"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni4}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni11}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni6}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni7}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni8}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni9}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni10}
              alt="Bimbel Sekolah Kedinasan"
            />
            <img
              className="child-success-story-all"
              src={successStoryTni5}
              alt="Bimbel Sekolah Kedinasan"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessStory;
