import React, { useEffect, useState } from "react";
import "./SuccessStory.css";

const SuccessStory = () => {
  const [successSnbt, setSuccessSnbt] = useState([]);
  const [successOsn, setSuccessOsn] = useState([]);
  const [successTni, setSuccessTni] = useState([]);

  useEffect(() => {
    fetchSuccessSnbt();
    fetchSuccessOsn();
    fetchSuccessTni();
  }, []);

  const fetchSuccessSnbt = () => {
    fetch("https://api.edulink-indonesia.com/successsnbt")
      .then((res) => res.json())
      .then((data) => {
        setSuccessSnbt(data);
      });
  };

  const fetchSuccessOsn = () => {
    fetch("https://api.edulink-indonesia.com/successosn")
      .then((res) => res.json())
      .then((data) => {
        setSuccessOsn(data);
      });
  };
  
  const fetchSuccessTni = () => {
    fetch("https://api.edulink-indonesia.com/successtni")
      .then((res) => res.json())
      .then((data) => {
        setSuccessTni(data);
      });
  };

  return (
    <React.Fragment>
      <div className="box-success-story-all">
        <h1 className="title-success-story-all">SUCCESS STORY</h1>
        <div className="parent-success-story-all">
          {/* SNBT */}
          <h2 className="subtitle-all-success-story">UTBK - SNBT</h2>
          <div className="parent-child-success-story-all">
            {successSnbt.map((item, index) => (
              <img
                key={index}
                className="child-success-story-all"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
              />
            ))}
          </div>
          {/* OSN */}
          <h2 className="subtitle-all-success-story">
            OLIMPIADE SAINS NASIONAL
          </h2>
          <div className="parent-child-success-story-all">
            {successOsn.map((item, index) => (
              <img
                key={index}
                className="child-success-story-all"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
              />
            ))}
          </div>
          {/* TNI POLRI */}
          <h2 className="subtitle-all-success-story">
            TNI - POLRI & SEKOLAH KEDINASAN
          </h2>
          <div className="parent-child-success-story-all">
            {successTni.map((item, index) => (
              <img
                key={index}
                className="child-success-story-all"
                src={"https://api.edulink-indonesia.com/images/" + item.image}
                alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessStory;
