import React from "react";
import "./SuccessSnbt.css";
import successStory1 from "../../../assets/success_story/snbt/Fatimah Az Zahra potrait.jpg";
import successStory2 from "../../../assets/success_story/snbt/Khristofer Abimanyu potrait.jpg";
import successStory3 from "../../../assets/success_story/snbt/Lolos UTBK SNBT_Fadil Arvia Albahrin.jpg";
import successStory4 from "../../../assets/success_story/snbt/Salma Nisrina potrait.jpg";
import successStory5 from "../../../assets/success_story/snbt/Zaidan Shafiq Abid potrait.jpg";
import successStory6 from "../../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Abdul.jpeg";
import successStory7 from "../../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Naufal.jpeg";
import successStory8 from "../../../assets/success_story/snbt/Bimbel_UTBK_SNBT_Naura.jpeg";
import successStory9 from "../../../assets/success_story/snbt/Lolos_CBT_UGM_Regina.jpeg";
import successStory10 from "../../../assets/success_story/snbt/Lolos_CBT_UGM_Salma.jpeg";
import successStory11 from "../../../assets/success_story/snbt/Lolos_CBT_UGM_Sheval.jpeg";
import successStory12 from "../../../assets/success_story/snbt/Success_Story_UM_UNDIP_Charisa.jpeg";
import successStory13 from "../../../assets/success_story/snbt/Success_Story_UM_UNAIR_Alifia_Potrait.jpeg"

const SuccessSnbt = () => {
  return (
    <React.Fragment>
      <div className="box-success-story-snbt">
        <h1 className="title-success-story-snbt">SUCCESS STORY</h1>
        <div className="parent-success-story-snbt">
        <img className="child-success-story-snbt" src={successStory9} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory10} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory11} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory12} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory4} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory5} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory13} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory1} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory2} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory3} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory6} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory7} alt="Bimbel SNBT Terbaik" />
          <img className="child-success-story-snbt" src={successStory8} alt="Bimbel SNBT Terbaik" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessSnbt;
