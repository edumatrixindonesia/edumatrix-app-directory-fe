import React from "react";
import "./SuccessTni.css";
import successStory1 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Alfaza_Potrait.jpeg";
import successStory2 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Halim_Potrait.jpeg";
import successStory3 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Hazzel_Potrait.jpeg";
import successStory4 from "../../../assets/success_story/tni-polri/Success_Story_Tni_Polri_Wisnu_Potrait.jpeg";
import successStory5 from "../../../assets/success_story/tni-polri/Success_Story_Sekolah_Kedinasan_Fariz.jpeg";

const SuccessTni = () => {
  return (
    <React.Fragment>
      <div className="box-success-story">
        <h1 className="title-success-story">SUCCESS STORY</h1>
        <div className="parent-success-story">
          <img className="child-success-story" src={successStory1} alt="" />
          <img className="child-success-story" src={successStory2} alt="" />
          <img className="child-success-story" src={successStory3} alt="" />
          <img className="child-success-story" src={successStory4} alt="" />
          <img className="child-success-story" src={successStory5} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessTni;
