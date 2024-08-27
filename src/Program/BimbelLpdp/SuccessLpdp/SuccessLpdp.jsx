import React, { useEffect, useState } from "react";
import "./SuccessLpdp.css";

const SuccessLpdp = () => {
  const [successLpdp, setSuccessLpdp] = useState([]);

  useEffect(() => {
    fetchSuccesLpdp();
  }, []);

  const fetchSuccesLpdp = () => {
    fetch("https://api.edulink-indonesia.com/successlpdp")
      .then((res) => res.json())
      .then((data) => {
        setSuccessLpdp(data);
      });
  };

  return (
    <React.Fragment>
      <div className="box-success-story-lpdp">
        <h1 className="title-success-story-lpdp">SUCCESS STORY</h1>
        <div className="parent-success-story-lpdp">
          {successLpdp.map((item, index) => (
            <img
              key={index}
              className="child-success-story-lpdp"
              src={"https://api.edulink-indonesia.com/images/" + item.image}
              alt="Success Story Bimbel LPDP"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessLpdp;
