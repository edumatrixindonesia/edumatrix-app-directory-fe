import React from 'react'
import logoSekolah from "../../../assets/scroll.png";

const AsalSekolahIgcse = () => {
  return (
    <div className="container-asal-sekolah">
    <div className="parent-title-asal-sekolah">
      <h1 className="title-asal-sekolah">STUDENT'S SCHOOL OF ORIGIN</h1>
      <div className="parent-card-asalsekolah">
        <div className="marquee">
          <div className="track">
            <div className="content">
              <img className="logo-school" src={logoSekolah} alt="Bimbel dan Les Privat UTBK SNBT, Bimbel Privat TK-SD-SMP-SMA" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AsalSekolahIgcse