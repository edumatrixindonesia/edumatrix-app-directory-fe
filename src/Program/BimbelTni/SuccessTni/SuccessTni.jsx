import React, { useEffect, useState } from "react";
import "./SuccessTni.css";

const SuccessTni = () => {
  const [successTni, setSuccessTni] = useState([]);

  useEffect(() => {
    fetchSuccessTni();
  }, []);

  const fetchSuccessTni = () => {
    fetch("https://api.edulink-indonesia.com/successtni")
      .then((res) => res.json())
      .then((data) => {
        setSuccessTni(data);
      });
  };
  return (
    <React.Fragment>
      <div className="box-success-story">
        <h1 className="title-success-story">SUCCESS STORY</h1>
        <div className="parent-success-story">
          {successTni.map((item, index) => (
            <img
              key={index}
              className="child-success-story"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessTni;
