import React from 'react'
import "./Liputan.css"
import liputan1 from "../../assets/liputan/idn_times.jpg"
import liputan2 from "../../assets/liputan/jogja_aja.jpg"
import liputan3 from "../../assets/liputan/kompas.jpg"
import liputan4 from "../../assets/liputan/krjogja.jpg"
import liputan5 from "../../assets/liputan/kumparan_2.jpeg"
import liputan6 from "../../assets/liputan/liputan_6.jpg"
import liputan7 from "../../assets/liputan/tribun_jogja.jpg"
import liputan8 from "../../assets/liputan/jawa_post.png"

const Liputan = () => {
  return (
    <React.Fragment>
        <div className="parent-liputan">
            <h1 className='title-telah-diliput'>TELAH DILIPUT OLEH :</h1>
            <div className="box-liputan">
                <img className='img-liputan' src={liputan1} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan2} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan3} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan5} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan4} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan6} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan' src={liputan7} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
                <img className='img-liputan-nobg' src={liputan8} alt="Bimbel - Les Privat dan Program Masuk PTN Terbaik - Edumatrix Indonesia" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Liputan