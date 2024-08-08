import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKelurahan(id);
  }, []);

  const fetchKelurahan = () => {
    fetch(`https://api.edulink-indonesia.com/kelurahan/${id}`)
    .then((res) => res.json())
      .then((data) => {
        setKelurahan(data);
      });
  };

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kelurahan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/les-privat-di/kelurahan/${item.slug}`;
            }}
          >
            {item.kelurahan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKelurahan;
