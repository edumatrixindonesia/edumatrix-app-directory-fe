import React from "react";
import "./SuccessLpdp.css";
import successStoryLpdp1 from "../../../assets/success_story/lpdp/Success_Story_LPDP_Harits.jpeg";

const SuccessLpdp = () => {
  return (
    <React.Fragment>
      <div className="box-success-story-lpdp">
        <h1 className="title-success-story-lpdp">SUCCESS STORY</h1>
        <div className="parent-success-story-lpdp">
          <img className="child-success-story-lpdp" src={successStoryLpdp1} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessLpdp;
