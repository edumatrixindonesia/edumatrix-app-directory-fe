import React from "react";
import "./SuccessOsn.css";
import successStory1 from "../../../assets/success_story/osn/Success_Story_OSN_Asytar.jpeg";
import successStory2 from "../../../assets/success_story/osn/Success_Story_OSN_Hanan.jpeg";
import successStory3 from "../../../assets/success_story/osn/Success_Story_OSN_Arvin_Potrait.jpeg"
import testimoni1 from "../../../assets/success_story/osn/Testimoni_Belajar_OSN_SD.jpeg";
import testimoni2 from "../../../assets/success_story/osn/Testimoni_Belajar_OSN_SMA.jpeg";

const SuccessOsn = () => {
  return (
    <React.Fragment>
      <div className="box-success-story-osn">
        <h1 className="title-success-story-osn">SUCCESS STORY</h1>
        <div className="parent-success-story-osn">
          <img className="child-success-story-osn" src={successStory1} alt="Success_Story_OSN_Asytar.jpeg" />
          <img className="child-success-story-osn" src={successStory2} alt="Success_Story_OSN_Hanan.jpeg" />
          <img className="child-success-story-osn" src={successStory3} alt="Success_Story_OSN_Arvin.jpeg" />
          <img className="child-success-story-osn" src={testimoni1} alt="Bimbel OSN SD Terbaik" />
          <img className="child-success-story-osn" src={testimoni2} alt="Bimbel OSN SMA Terbaik" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessOsn;
