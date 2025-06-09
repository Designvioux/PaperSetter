import React, { useState } from "react";
import "./Components/ExamQuestion.css";

const questions = [
  {
    id: 1,
    question: "अमेरिकेचा शोध कोणी लावला ?",
    options: [
      "A) प्राचीन ग्रीक खलाशी",
      "B) ख्रिस्तोफर कोलंबस",
      "C) वॅस्ट इंडीज",
      "D) आफ्रिकन रहिवासी",
    ],
  },
];

const ExamQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleClear = () => {
    setSelectedOption(null);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="exam-container">
      <header className="exam-header">
        <div className="title-left">
          <img src="/logo192.png" alt="logo" className="logo" />
          <h2>Paper Setter</h2>
        </div>
       
       
      </header>
<div className="exam-heading-sec"> 
 <h4 className="exam-subtitle">
        इयत्ता आठवी - पूर्व माध्यमिक शिष्यवृत्ती परीक्षा – विषय मराठी
      </h4>

      <h4 className="Exam-timer">Timer : 1 hour, 20 Min, 10 sec Left</h4>

</div>
     
        

      <div className="exam-main">
        <div className="question-panel">
          <div className="question-box">
            <div className="question-header">
              <span>Question {questions[currentQuestionIndex].id}</span>
              <button className="clear-btn" onClick={handleClear}>
                Clear Response
                
              </button>
            </div>
            <p className="question-text">
            
              
              {questions[currentQuestionIndex].question}
            </p>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <label key={idx} className="option-item">
              
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          

          <div className="navigation-buttons">
            <button className="nav-btnPreview" onClick={handlePrevious}>
              ❮ Previous
            </button>
            <button className="nav-btnOne" onClick={handleNext}>
              Next ❯❯
            </button>
          </div>
          </div>

          <button className="review-btn" disabled>
            Review Test
          </button>
        </div>
           
        <div className="side-panel">
         
          <div className="instruction-box">
            <h4>Instruction</h4>
            <ul>
              <li><span className="dot green" /> Answered</li>
              <li><span className="dot gray" /> Not Attempted</li>
              <li><span className="dot blue" /> Present</li>
              <li><span className="dot white" /> Not Visited</li>
            </ul>
          </div>

          <div className="question-count-box">
            <h4>Questions Count</h4>
            <div className="question-grid">
              {[...Array(20)].map((_, i) => {
                const number = i + 1;
                const className =
                  number === currentQuestionIndex + 1
                    ? "question-number current"
                    : number === 1
                    ? "question-number answered"
                    : "question-number";
                return (
                  <div key={number} className={className}>
                    {number}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
