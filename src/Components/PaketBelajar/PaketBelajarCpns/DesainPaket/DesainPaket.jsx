import React from 'react'
import desainCpns1 from "../../../../assets/desain_paket/cpns new 2.jpg"
import desainCpns2 from "../../../../assets/desain_paket/cpns new 3.jpg"
import desainCpns3 from "../../../../assets/desain_paket/cpns new 1.jpg"
import "./DesainPaket.css"

const DesainPaket = () => {
  return (
    <React.Fragment>
        <div className="parent-desain-cpns">
            <img src={desainCpns1} alt="" className="desain-paket-cpns" />
            <img src={desainCpns2} alt="" className="desain-paket-cpns" />
            <img src={desainCpns3} alt="" className="desain-paket-cpns" />
        </div>
    </React.Fragment>
  )
}

export default DesainPaket