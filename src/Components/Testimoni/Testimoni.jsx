// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "./Testimoni.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import Carousel from "react-multi-carousel";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 896, min: 414 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 667, min: 375 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 740, min: 360 },
//     items: 1,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 882, min: 344 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// const Testimoni = () => {
//   const [testimoni, setTestimoni] = useState([]);

//   useEffect(() => {
//     fetchTestimoni();
//   }, []);

//   const fetchTestimoni = () => {
//     fetch("https://api.edulink-indonesia.com/testimoni")
//       .then((res) => res.json())
//       .then((data) => {
//         setTestimoni(data);
//       });
//   };

//   return (
//     <React.Fragment>
//       <div className="box-testi">
//         <div className="slider-top-testi">
//           <h1 className="title-testimoni">TESTIMONI SISWA</h1>
//           <Carousel
//             responsive={responsive}
//             autoPlay={true}
//             swipeable={true}
//             draggable={true}
//             showDots={false}
//             infinite={true}
//             partialVisible={false}
//           >
//             {testimoni.map((item, index) => {
//               return (
//                 <div className="top-slider-testi">
//                   <div className="slider" key={index}>
//                     <div className="card-testimoni">
//                       <img
//                         className="foto-testimoni"
//                         src={"https://api.edulink-indonesia.com/images/" + item.image}
//                         alt="Testimoni Bimbel Terbaik - Edumatrix Indonesia"
//                       />
//                       <h1 className="nama-siswa">{item.name_siswa}</h1>
//                       <h1 className="judul-testimoni">{item.judul_testi}</h1>
//                       <img
//                         className="star-5"
//                         src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
//                         alt="Testimoni Bimbel Terbaik - Edumatrix Indonesia"
//                       />
//                       <span className="petik-quot">
//                         <FontAwesomeIcon
//                           className="icon-quote"
//                           icon={faQuoteLeft}
//                         />
//                       </span>
//                       <h1 className="desk-testi">{item.deskripsi}</h1>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </Carousel>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Testimoni;

import React from "react";
import "./Testimoni.css";
import testimoniSiswaNew1 from "../../assets/testimoni/testimoni_bimbel_snbt_1.png";
import testimoniSiswaNew2 from "../../assets/testimoni/testimoni_bimbel_snbt_2.png";

const Testimoni = () => {
  return (
    <React.Fragment>
      <div className="super-parent-testimoni-new">
        <h1 className="title-testimoni">TESTIMONI SISWA</h1>
        <div className="parent-testimoni-new">
          <img className="img-testimoni-new" src={testimoniSiswaNew1} alt="" />
          <img className="img-testimoni-new" src={testimoniSiswaNew2} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimoni;
