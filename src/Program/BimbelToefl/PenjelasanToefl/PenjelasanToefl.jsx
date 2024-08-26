import React from "react";
import "./PenjelasanToefl.css";

const PenjelasanToefl = () => {
  return (
    <React.Fragment>
      <div className="container-penjelasan-toefl">
        <div className="penjelasan-toefl-1">
          <h3 className="title-penjelasan-toefl">TOEFL Preparation</h3>
          <p className="desk-penjelasan-toefl">
            Master the skills needed for the TOEFL test with our comprehensive
            course. Focus on reading, writing, listening, and speaking sections
            to improve your score and meet your university or immigration
            requirements.
          </p>
        </div>

        <div className="penjelasan-toefl-1">
          <h3 className="title-penjelasan-toefl">TOEIC Preparation</h3>
          <p className="desk-penjelasan-toefl">
            Enhance your business English skills with our TOEIC preparation
            program. Perfect for career advancement, this course covers
            listening and reading comprehension in a professional context.
          </p>
        </div>
      </div>

      <div className="container-penjelasan-toefl-1">
        <div className="penjelasan-toefl">
          <h3 className="title-penjelasan-toefl">IELTS Preparation</h3>
          <p className="desk-penjelasan-toefl">
            Achieve a high score on the IELTS exam with targeted practice and
            expert guidance. Our program addresses all four components of the
            test—listening, reading, writing, and speaking.
          </p>
        </div>

        <div className="penjelasan-toefl">
          <h3 className="title-penjelasan-toefl">English Conversation</h3>
          <p className="desk-penjelasan-toefl">
            Develop your speaking skills and gain confidence with our English
            Conversation program. Practice real-life scenarios and enhance your
            ability to communicate effectively.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PenjelasanToefl;
