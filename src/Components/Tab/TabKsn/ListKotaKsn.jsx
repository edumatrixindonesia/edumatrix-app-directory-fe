import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import jangkauanKota from "../../../assets/kota.png";
import city from "../../../assets/city.png";

const ListKotaKsn = () => {
  const [kotaKsn, setKotaKsn] = useState([]);

  useEffect(() => {
    fetchKotaOsn();
  }, []);

  const fetchKotaOsn = () => {
    fetch("https://api.edulink-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKotaKsn(data);
      });
  };
  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kotaKsn.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/pelatihan-osn-ksn/${item.slug}`;
            }}
          >
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaKsn;
