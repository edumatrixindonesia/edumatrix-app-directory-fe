import React, { useEffect, useState } from "react";
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
import successStory13 from "../../../assets/success_story/snbt/Success_Story_UM_UNAIR_Alifia_Potrait.jpeg";
import successStory14 from "../../../assets/success_story/snbt/Success_Story_UTBK_SNBT_11_PTN_Alvito_Potrait.jpeg";
import successStory15 from "../../../assets/success_story/snbt/Success_Story_UTBK_SNBT_UNAIR_UNY_Ibrahim_Potrait.jpeg";

const SuccessSnbt = () => {
  const [successSnbt, setSuccessSnbt] = useState([]);

  useEffect(() => {
    fetchSuccessSnbt();
  }, []);

  const fetchSuccessSnbt = () => {
    fetch("https://api.edulink-indonesia.com/successsnbt")
      .then((res) => res.json())
      .then((data) => {
        setSuccessSnbt(data);
      });
  };
  return (
    <React.Fragment>
      <div className="box-success-story-snbt">
        <h1 className="title-success-story-snbt">SUCCESS STORY 2024</h1>
        <div className="parent-success-story-snbt">
          {successSnbt.map((item, index) => (
            <img
              key={index}
              className="child-success-story-snbt"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessSnbt;
