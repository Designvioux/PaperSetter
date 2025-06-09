import React, { useState } from 'react';
import './Components/ExamQuestionPage.css';

const questions = [
  {
    id: 5,
    question: "What color is the sky on a clear day?",
    options: ["Red", "Blue", "Green", "Yellow"],
  }
];

const ExamQuestionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true); // Show confirmation popup on End Test
  };

  const handleSubmitTest = () => {
    setShowModal(false);
    alert("Test Submitted!"); // You can replace this with API call
  };

  return (
    <div className="exam-Pagecontainer">
      <header className="exam-Pageheader">
        <div className="title-Pageleft">
          <img src="/logo192.png" alt="logo" className="logo" />
          <h2>Paper Setter</h2>
        </div>
      </header>

      <div className="exam-Pageheading-sec">
        <h4 className="exam-Pagesubtitle">Online Test Subject - English</h4>
        <h4 className="Exam-Pagetimer">Timer : 1 hour, 20 Min, 10 sec Left</h4>
      </div>

      <div className="exam-Pagemain">
        <div className="question-Pagepanel">
          <div className="question-Pagebox">
            <div className="question-Pageheader">
              <span>Question {questions[currentQuestionIndex].id}</span>
              <button className="clear-Pagebtn" onClick={handleClear}>
                Clear Response
              </button>
            </div>

            <p className="question-Pagetext">{questions[currentQuestionIndex].question}</p>

            {questions[currentQuestionIndex].options.map((option, idx) => (
              <label key={idx} className="option-Pageitem">
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

            <div className="navigation-Pagebuttons">
              <button className="nav-PagebtnPreview" onClick={handlePrevious}>
                ❮ Previous
              </button>
              <button className="nav-PagebtnOne" onClick={handleNext}>
                End Test ❯❯
              </button>
            </div>
          </div>

          <button className="review-Pagebtn" disabled>
            Review Test
          </button>
        </div>

        <div className="side-Pagepanel">
          <div className="instruction-Pagebox">
            <h4>Instruction</h4>
            <ul>
              <li><span className="dotPage green" /> Answered</li>
              <li><span className="dotPage gray" /> Not Attempted</li>
              <li><span className="dotPage blue" /> Present</li>
              <li><span className="dotPage white" /> Not Visited</li>
            </ul>
          </div>

          <div className="question-Pagecount-box">
            <h4>Questions Count</h4>
            <div className="question-Pagegrid">
              {[...Array(20)].map((_, i) => {
                const number = i + 1;
                const className =
                  number === currentQuestionIndex + 1
                    ? "question-Pagenumber current"
                    : number === 1
                    ? "question-Pagenumber answered"
                    : "question-Pagenumber";
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3 className="modal-title">Are you sure ?</h3>
            <p className="modal-text">you want to submit your test</p>
            <div className="modal-buttons">
              <button className="modal-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="modal-submit" onClick={handleSubmitTest}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionPage;
