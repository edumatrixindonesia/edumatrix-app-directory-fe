import React from "react";
import "./InfoCamp.css";
import jadwal1 from "../../assets/jadwal_camp/jadwal_supercamp_bimbel_utbk_snbt_1.jpg"
import jadwal2 from "../../assets/jadwal_camp/jadwal_supercamp_bimbel_utbk_snbt_2.jpg"

const InfoCamp = () => {
  return (
    <React.Fragment>
      <div className="box-infocamp">
        <h2 className="title-infocamp">JADWAL SUPERCAMP UTBK SNBT 2025</h2>
        <div className="child-infocamp">
          {/* <div className="box-lokasi-program"></div> */}
          <img className="img-jadwal-camp" src={jadwal1} alt="" />
          <img className="img-jadwal-camp" src={jadwal2} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoCamp;
