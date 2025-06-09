import React from 'react';
import'./Components/ExamInstruction.css';



const ExamInstructions = () => {
  return (
    <div className="exam-container">
      
      <div className="exam-card">
        <h2>Online Exam Instructions</h2>
        <h4>Subject : English (Set A)</h4>
        <p className="start-time">Test Start In : 02.00 minutes</p>
        <ol className="instructions">
          <li>Number Of Question : <strong>20</strong></li>
          <li>Duration : <strong>90 Minutes</strong></li>
          <li>Your answers will be <strong>auto-saved periodically</strong>.</li>
          <li>Do not switch <strong>tabs</strong> or use <strong>other devices</strong>.</li>
          <li>Keep your <strong>camera</strong> and <strong>mic</strong> on, and <strong>face the screen at all times</strong>.</li>
          <li>Keep track of the timer and click <strong>"Submit"</strong> before the exam ends. <strong>Late submissions will not be accepted</strong>.</li>
        </ol>
        <button className="start-btn">Start Test</button>
      </div>
    </div>
  );
};

export default ExamInstructions;
