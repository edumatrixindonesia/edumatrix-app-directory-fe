import React from "react";
import "./VideoTesti.css";

const VideoTesti = () => {
  return (
    <React.Fragment>
      <div className="container-video-tni-polri">
        <div className="parent-title-apa-kata-mereka">
          <hr className="garis-apa-kata-mereka" />
          <h1 className="title-apa-kata-mereka">APA KATA MEREKA ?</h1>
          <hr className="garis-apa-kata-mereka" />
        </div>
        <div class="video-container">
          <iframe
            className="video-tni-polri"
            width="1200"
            height="675"
            src="https://www.youtube.com/embed/gAdLrN511Ck"
            title="Ini dia! Motivasi dan kesan belajar para siswa kami"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoTesti;
