import React from "react";
import "./Components/EndTest.css";

const EndTest = () => {
  return (
    <div className="endtest-container">
     
     
      

     
      <div className="endtest-box">
        <div className="student-info">
          <p><strong>Student Name :</strong> Yash Yadav</p>
          <p><strong>Std :</strong> 8th</p>
          <p><strong>Subject :</strong> Marathi</p>
        </div>
        <hr />
        <div className="end-message">
          <h2>End of Test....!</h2>
          <p>Well done! You finished the test</p>
          <p>Check your answers now. Keep learning and have fun!</p>
          <button className="review-btnend">Review Test</button>
        </div>
      </div>
    </div>
  );
};

export default EndTest;
