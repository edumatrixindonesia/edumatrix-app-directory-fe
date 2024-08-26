import React from "react";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyChooseIgcse = () => {
  return (
    <React.Fragment>
      <div className="container-materi-tni">
        <div className="box-materi-akpol">
          <button className="title-materi-lpdp">Why Choose Us?</button>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Young and Experienced Teachers
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Despite their young age, our Master Teachers have extensive
              teaching experience. Their closer age to students helps build a
              more relatable and approachable learning environment.
            </span>
          </div>

          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> Wide
            Range of Materials & Practice
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              We offer up-to-date materials and practice resources, so you`ll
              always have access to the latest content.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" />{" "}
            Personalized Learning
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Our lessons are tailored to each student's needs with one-on-one
              sessions, free consultations, and assessments.
            </span>
          </div>
          <h4 className="title-list-materi-lpdp">
            <FontAwesomeIcon icon={faCheck} className="icon-materi-lpdp" /> High
            Success Rate
          </h4>
          <div className="parent-list-materi-lpdp">
            <FontAwesomeIcon
              className="icon-list-materi-lpdp"
              icon={faCircle}
            />
            <span className="list-materi-lpdp">
              Our dedicated Master Teachers aim for a 90% success rate, helping
              students achieve their goals and gain entry into their desired
              schools.
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyChooseIgcse;
