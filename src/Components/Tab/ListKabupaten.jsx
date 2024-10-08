import React, { useEffect, useMemo, useState } from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKabupaten = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);
  const { id } = useParams();


  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKabupaten(id);
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchKabupaten = () => {
    fetch(`https://api.edulink-indonesia.com/ibukotakab/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKabupaten(data);
      });
  };

  const fetchKelas = () => {
    fetch(`https://api.edulink-indonesia.com/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
      });
  };

  const fetchMapel = () => {
    fetch("https://api.edulink-indonesia.com/matapelajaran")
      .then((res) => res.json())
      .then((data) => {
        setMapel(data);
      });
  };

  return (
    <div className="container-all-tab">
      <Tabs>
        <Tab title="PROGRAM">
          <div className="parent-list-kelas">
            {kelas.map((item, index) => (
              <Link
                // to={`/les-privat/${item.slug.toLowerCase()}?data=${item.id}`}
                className="btn-kelas"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat/program/${item.slug}`;
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="MAPEL">
          <div className="parent-list-mapel">
            {mapel.map((item, index) => (
              <Link
                // to={`/mata-pelajaran/${item.name.toLowerCase()}?data=${
                //   item.id
                // }`}
                className="btn-mapel"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat/mata-pelajaran/${item.slug}`;
                }}
              >
                <div className="combine-icon-text">
                  <img
                    className="icon-mapel"
                    src={"https://api.edulink-indonesia.com/images/" + item.image}
                    alt="Bimbel Terbaik dan Berkualitas - Edumatrix Indonesia"
                  />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="WILAYAH">
          <div className="parent-list-kota">
            {kabupaten.map((item, index) => (
              <Link
                // to={`/les-privat-di-kabupaten/${item.kota_kabupaten}?data=${item.id}`}
                className="btn-kota"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat-di/${item.slug}`;
                }}
              >
                {item.kota_kabupaten}
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ListKabupaten;
