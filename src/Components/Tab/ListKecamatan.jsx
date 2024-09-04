import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  console.log(kecamatan);
  
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKecamatan(id);
  }, []);

  const fetchKecamatan = () => {
    fetch(`https://api.edulink-indonesia.com/kecamatan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKecamatan(data);
      });
  };
  console.log(fetchKecamatan);
  

  return (
    <div className="container-all-tab">
      <div className="parent-list-kota">
        {kecamatan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            onClick={() => {
              window.location.href = `/les-privat-di/kecamatan/${item.slug}`;
            }}
          >
            {item.kecamatan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKecamatan;
