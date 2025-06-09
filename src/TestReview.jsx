import React from 'react';
import './Components/TestReview.css';

const questions = [
  {
    id: 1,
    question: "अमेरिकेचा शोध कोणी लावला ?",
    options: ["प्राचीन खलाशी", "इंद्रा गांधी", "शिवाजी महाराज", "ख्रिस्तोफर कोलंबस"],
    correctAnswer: 3,
    userAnswer: 3,
    explanation: "ख्रिस्तोफर कोलंबसने 1492 मध्ये अमेरिका शोधली. राजा फर्डिनांड आणि राणी इसाबेला यांची त्या मदत केली.",
  },
  {
    id: 2,
    question: "बेझ आणि जेफने कोणती कंपनी स्थापित केली ?",
    options: ["अमेझॉन", "गुगल", "फेसबुक", "सायबर"],
    correctAnswer: 0,
    userAnswer: null,
    explanation: "बेझ आणि जेफने अमेझॉन स्थापित केली होती.",
  },
  {
    id: 3,
    question: "राजधानीचं दुसरं नाव काय आहे?",
    options: ["उदाहरण", "केंद्र - राजधानी", "गाव", "शहर"],
    correctAnswer: 1,
    userAnswer: 1,
    explanation: "केंद्र म्हजेच राजधानी, हे प्रशासनाचे ठिकाण असते.",
  },
  {
    id: 4,
    question: "पाणी का पाझरते?",
    options: ["श्वासामुळे", "पाण्यामुळे", "कणखरते", "गुरुत्व"],
    correctAnswer: 2,
    userAnswer: 2,
    explanation: "कणखरतेमुळे पाणी गाळात झिरपतं.",
  },
  {
    id: 5,
    question: "माणसामध्ये काय नसते ?",
    options: ["T. R. S.", "नखं", "हात", "पाय"],
    correctAnswer: 0,
    userAnswer: 1,
    explanation: "T. R. S. म्झेञे रेडिओ सिग्नल. माणसात ते नसतो.",
  },
];

const TestReview = () => {
  return (
    <div className="test-review">
      <header className="review-header">
        <div className="logo-title">📘 Paper Setter</div>
        <div className="user-name">Welcome, Rakesh Kumar</div>
      </header>

      <div className="Test-subject">
        <h4 className="exam-Testsubtitle">
          Online Test Subject - English Test Review : View answers and explanation for this test.
        </h4>
        <button className="back-btn">Back</button>
      </div>

      <div className="summary-bar">
        <div><strong>Name:</strong> Anil Raj Yadav</div>
        <div><strong>Std:</strong> 1st</div>
        <div><strong>Subject:</strong> English</div>
        <div><strong>Total Marks:</strong> 18/20</div>
         <button className="Pass-btn">pass</button>
      </div>

      <div className="score-boxes">
        <div className="score blue">20<br />Total Questions</div>
        <div className="score green">19<br />Answered</div>
        <div className="score gray">1<br />Unanswered</div>
        <div className="score red">1<br />Wrong</div>
      </div>
      

      <div className="question-section">
        {questions.map((q, idx) => {
          const isCorrect = q.userAnswer === q.correctAnswer;
          const isSkipped = q.userAnswer === null;

          return (
            <div key={q.id} className={`question-card ${isCorrect ? 'correct' : isSkipped ? 'skipped' : 'wrong'}`}>
              <div className="question">{idx + 1}. {q.question}</div>
              <ul className="options">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className={`option ${i === q.correctAnswer ? 'correct-answer' : ''} ${i === q.userAnswer && i !== q.correctAnswer ? 'wrong-answer' : ''}`}
                  >
                    {String.fromCharCode(65 + i)}) {opt}
                  </li>
                ))}
              </ul>
              <div className="explanation">
                <strong>Explanation:</strong> {q.explanation}
              </div>
              <div className="answer-status">
                {isSkipped ? '⏭️ Skipped' : isCorrect ? '✅ Correct Answer' : '❌ Wrong Answer'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestReview;