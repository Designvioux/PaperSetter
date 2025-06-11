import React, { useState } from 'react';
import './Components/ExamQuestionPage.css';

const questions = [
  { id: 1, question: "What color is the sky on a clear day?", options: ["Red", "Blue", "Green", "Yellow"] },
  { id: 2, question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"] },
  { id: 3, question: "How many days are there in a week?", options: ["5", "6", "7", "8"] },
  { id: 4, question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"] },
  { id: 5, question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
  { id: 6, question: "What gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
  { id: 7, question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"] },
  { id: 8, question: "What is the national animal of India?", options: ["Elephant", "Lion", "Tiger", "Peacock"] },
  { id: 9, question: "How many continents are there?", options: ["5", "6", "7", "8"] },
  { id: 10, question: "Who wrote the Ramayana?", options: ["Tulsidas", "Valmiki", "Kalidas", "Ved Vyas"] },
  { id: 11, question: "Which is the smallest prime number?", options: ["0", "1", "2", "3"] },
  { id: 12, question: "Which festival is known as the Festival of Lights?", options: ["Holi", "Eid", "Diwali", "Christmas"] },
  { id: 13, question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C", "120°C"] },
  { id: 14, question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Leaf", "Stem", "Flower"] },
  { id: 15, question: "What is the capital of Maharashtra?", options: ["Pune", "Mumbai", "Nagpur", "Nashik"] },
  { id: 16, question: "Which instrument is used to measure temperature?", options: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"] },
  { id: 17, question: "Who is known as the Father of the Nation in India?", options: ["Bhagat Singh", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"] },
  { id: 18, question: "Which is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Bear"] },
  { id: 19, question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"] },
  { id: 20, question: "What is the full form of CPU?", options: ["Central Processing Unit", "Computer Power Unit", "Control Program Unit", "Computer Primary Unit"] },
];

const ExamQuestionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleOptionChange = (option) => setSelectedOption(option);
  const handleClear = () => setSelectedOption(null);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowModal(true);
    }
  };

  const handleSubmitTest = () => {
    setShowModal(false);
    alert("Test Submitted!");
  };

  return (
    <div className="exam-Pagecontainer">
      

      <div className="exam-Pageheading-sec">
        <h4 className="exam-Pagesubtitle">Online Test Subject - English</h4>
        <h4 className="Exam-Pagetimer">Timer : 1 hour, 20 Min, 10 sec Left</h4>
      </div>

      <div className="exam-Pagemain">
        <div className="question-Pagepanel">
          <div className="question-Pagebox">
            <div className="question-Pageheader">
              <span>Question {questions[currentQuestionIndex].id}</span>
              <button className="clear-Pagebtn" onClick={handleClear}>Clear Response</button>
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
              <button className="nav-PagebtnPreview" onClick={handlePrevious}>❮ Previous</button>
              <button className="nav-PagebtnOne" onClick={handleNext}>
                {currentQuestionIndex === questions.length - 1 ? 'End Test ❯❯' : 'Next ❯'}
              </button>
            </div>
          </div>
          <button className="review-Pagebtn" disabled>Review Test</button>
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
              {questions.map((_, i) => {
                const number = i + 1;
                const className = number === currentQuestionIndex + 1
                  ? "question-Pagenumber current"
                  : "question-Pagenumber";
                return (
                  <div
                    key={number}
                    className={className}
                    onClick={() => {
                      setCurrentQuestionIndex(i);
                      setSelectedOption(null);
                    }}
                  >
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
            <h3 className="modal-title">Are you sure?</h3>
            <p className="modal-text">You want to submit your test</p>
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
