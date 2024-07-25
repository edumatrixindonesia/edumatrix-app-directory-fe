import React, { useEffect, useState } from "react";
import "./Keunggulan.css";
import keunggulanIcon from "../../assets/keunggulan.png";

const Keunggulan = () => {
  const [keunggulan, setKeunggulan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("https://api.edulink-indonesia.com/keunggulan")
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-keunggulan">
        <h1 className="title-keunggulan">
          <img className="icon-keunggulan" src={keunggulanIcon} alt="Bimbel Privat Masuk PTN - Edumatrix Indonesia" />
          KEUNGGULAN
        </h1>
        <div className="parent-card-keunggulan">
          {keunggulan.map((item, index) => (
            <img
              key={index}
              className="keunggulan-img"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Bimbel Privat UTBK SNBT Terbaik - Edumatrix Indonesia"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keunggulan;
