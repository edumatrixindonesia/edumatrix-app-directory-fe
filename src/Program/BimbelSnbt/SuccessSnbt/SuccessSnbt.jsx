import React, { useEffect, useState } from "react";
import "./SuccessSnbt.css";

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
