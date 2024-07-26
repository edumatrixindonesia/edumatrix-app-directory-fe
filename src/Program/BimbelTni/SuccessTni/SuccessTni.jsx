import React from "react";
import "./SuccessTni.css";
import successStory1 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Alfaza_Potrait.jpeg";
import successStory2 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Halim_Potrait.jpeg";
import successStory3 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Hazzel_Potrait.jpeg";
import successStory4 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Wisnu_Potrait.jpeg";
import successStory5 from "../../../assets/success_story/tni-polri/Success_Story_Sekolah_Kedinasan_Fariz.jpeg";
import successStory6 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Riyad_Potrait.jpeg";
import successStory7 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Fikri_Potrait.jpeg";
import successStory8 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Fitrah_Potrait.jpeg";
import successStory9 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Hanif_Potrait.jpeg";
import successStory10 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Laode_Potrait.jpeg";

const SuccessTni = () => {
  return (
    <React.Fragment>
      <div className="box-success-story">
        <h1 className="title-success-story">SUCCESS STORY</h1>
        <div className="parent-success-story">
          <img className="child-success-story" src={successStory1} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory2} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory3} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory4} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory5} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory6} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory7} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory8} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory9} alt="Success Story Bimbel TNI Polri" />
          <img className="child-success-story" src={successStory10} alt="Success Story Bimbel TNI Polri" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessTni;
