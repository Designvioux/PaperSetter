
import React, { useState, useEffect } from "react";
import "./Components/ExamQuestion.css";

const questions = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  question: `प्रश्न क्रमांक ${index + 1}: भारताचा इतिहास कोणत्या शतकात सुरु होतो?`,
  options: [
    "A) 15वे शतक",
    "B) 10वे शतक",
    "C) 20वे शतक",
    "D) 5वे शतक",
  ],
}));

const ExamQuestion = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1 * 60 * 60 + 20 * 60 + 10); // 1h 20m 10s in seconds

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestion.id] || null;

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `Timer : ${hrs} hour, ${mins} Min, ${secs} sec Left`;
  };

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleClear = () => {
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="exam-container">
      

      <div className="exam-heading-sec">
        <h4 className="exam-subtitle">
          इयत्ता आठवी - पूर्व माध्यमिक शिष्यवृत्ती परीक्षा – विषय मराठी
        </h4>
        <h4 className="Exam-timer">{formatTime(timeLeft)}</h4>
      </div>

      <div className="exam-main">
        <div className="question-panel">
          <div className="question-box">
            <div className="question-header">
              <span>Question {currentQuestion.id}</span>
              <button className="clear-btn" onClick={handleClear}>
                Clear Response
              </button>
            </div>
            <p className="question-text">{currentQuestion.question}</p>
            {currentQuestion.options.map((option, idx) => (
              <label key={idx} className="option-item">
                <input
                  type="radio"
                  name={`option-${currentQuestion.id}`}
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
              <li>
                <span className="dot green" /> Answered
              </li>
              <li>
                <span className="dot gray" /> Not Attempted
              </li>
              <li>
                <span className="dot blue" /> Present
              </li>
              <li>
                <span className="dot white" /> Not Visited
              </li>
            </ul>
          </div>

          <div className="question-count-box">
            <h4>Questions Count</h4>
            <div className="question-grid">
              {questions.map((_, i) => {
                const number = i + 1;
                const questionId = questions[i].id;
                let className = "question-number";

                if (currentQuestionIndex === i) {
                  className += " current";
                } else if (answers[questionId]) {
                  className += " answered";
                }

                return (
                  <div
                    key={number}
                    className={className}
                    onClick={() => setCurrentQuestionIndex(i)}
                    style={{ cursor: "pointer" }}
                  >
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
