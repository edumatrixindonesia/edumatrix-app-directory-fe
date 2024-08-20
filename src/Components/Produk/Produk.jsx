import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Produk.css";
import BestProgramBumn2 from "../BestProgram/BestProgram2/BestProgramBumn2/BestProgramBumn2";

const Produk = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-produk">
        <BestProgramBumn2 />
      </div>
    </React.Fragment>
  );
};

export default Produk;
