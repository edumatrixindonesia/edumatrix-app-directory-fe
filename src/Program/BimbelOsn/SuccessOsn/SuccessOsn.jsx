import React, { useEffect, useState } from "react";
import "./SuccessOsn.css";
import testimoni1 from "../../../assets/success_story/osn/Testimoni_Belajar_OSN_SD.jpeg";
import testimoni2 from "../../../assets/success_story/osn/Testimoni_Belajar_OSN_SMA.jpeg";

const SuccessOsn = () => {
  const [successOsn, setSuccessOsn] = useState([]);
  useEffect(() => {
    fetchSuccessOsn();
  }, []);

  const fetchSuccessOsn = () => {
    fetch("https://api.edulink-indonesia.com/successosn")
      .then((res) => res.json())
      .then((data) => {
        setSuccessOsn(data);
      });
  };
  return (
    <React.Fragment>
      <div className="box-success-story-osn">
        <h1 className="title-success-story-osn">SUCCESS STORY</h1>
        <div className="parent-success-story-osn">
          {successOsn.map((item, index) => (
            <img
              key={index}
              className="child-success-story-osn"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
            />
          ))}
          <img
            className="child-success-story-osn"
            src={testimoni1}
            alt="Bimbel OSN SD Terbaik"
          />
          <img
            className="child-success-story-osn"
            src={testimoni2}
            alt="Bimbel OSN SMA Terbaik"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessOsn;
