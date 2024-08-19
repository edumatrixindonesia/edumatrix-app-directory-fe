import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import Tab from "../Tab";
import "../Tab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKedokteran = () => {
  const [kotaKedokteran, setKotaKedokteran] = useState([]);
  const [kelasSnbt, setKelasSnbt] = useState([]);

  useEffect(() => {
    fetchKotaSnbt();
    fetchKelasSnbt();
  }, []);

  const fetchKotaSnbt = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaKedokteran(data);
      });
  };

  const fetchKelasSnbt = () => {
    fetch(`https://api.edulink-indonesia.com/kelassnbt`)
      .then((res) => res.json())
      .then((data) => {
        setKelasSnbt(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaKedokteran.map((item, index) => (
          <Link
            // to={`/bimbel-snbt-terbaik-di/${item.kota.toLowerCase()}?data=${
            //   item.id
            // }`}
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/bimbel-masuk-kedokteran/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKedokteran;
