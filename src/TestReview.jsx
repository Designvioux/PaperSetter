import React from "react";
import "./Components/TestReview.css";

const TestReview = () => {
  return (
    <div className="review-container">
      
      
        

    
      <h3 className="review-title">
        Online Test Subject - English Test Review : View answers and explanation for this test.
        <button className="back-btn">back</button>
      </h3>

      
      <div className="student-details">
        <p><strong>Name :</strong> Anil Raj Yadav</p>
        <p><strong>Std :</strong> 1st</p>
        <p><strong>Subject :</strong> English</p>
        <p><strong>Total Mark :</strong> 18/20</p>
        <button className="pass-btn">PASS</button>
      </div>

      
    <div className="Score-box">
     
         <div className="score-summary"> <h4 className="score-box total">20</h4><p>Total Questions</p></div>
       <div className="score-summary"> <h4 className="score-box answered">19 </h4><p>Answered Questions</p></div>
        <div className="score-summary"><h4 className="score-box unanswered">1</h4><p>Unanswered Questions</p></div>
       <div className="score-summary"> <div className="score-box wrong">1</div><p>Wrong Answers</p></div>
   </div>

    
      <div className="Answer-correct">
       
        <p className="test-two">
          Question Count</p>
        
      <div className="question-count">
        
        <div className="circle green">1</div>
        <div className="circle gray">2</div>
        <div className="circle green">3</div>
        <div className="circle green">4</div>
        <div className="circle red">5</div>
        <div className="legend">
         
         
        
        </div>
        
      </div>
      <div className="span-correct">
       <span>✓</span> <span>⟳</span> <span>✓</span> <span>✓</span> <span>✗</span>
       </div>
       </div>

      
      
        
       
        <div className="question-Testbox">
          <p className="test-h4">
          Review : Answers and Explanation For This Test
          </p>
      
          
          
          <p><strong>1. अमेरिकेचा शोध कोणी लावला ? </strong></p>
          <p className="Correct-AnswerOne">✓Correct Answer</p>
          <p>A) प्राचीन खलाशी</p>
          <p className="correct-option">B) स्पॅनिश खलाशी ✓</p>
          <p>C) वेद इंग्रजी</p>
          <p>D) आफ्रिकन रहिवासी</p>
          <p><strong>Correct Answer:</strong> B) स्पॅनिश खलाशी</p>
          <p className="explanation">
            Explanation: ख्रिस्तोफर कोलंबसने 1492 मध्ये अमेरिका शोधली. राजा फर्डिनांड आणि राणी इसाबेला यांची त्या मदत केली.
          </p>
          
          <div className="Question-two">
          <p ><strong>2. वेस्ट इंडीज बेटातील रहिवासी कशाचे दिवे वापरत असत ?</strong></p>
          <p className="Correct-AnswerOne">⟳ Skipped Answer</p>
          <p>A) लोखंडाचे</p>
          <p className="correct-option">B) मातीचे </p>
          <p>C) पितळेचे</p>
          <p>D) चांदीचे</p>
          <p><strong>Correct Answer:</strong> B) मातीचे ✓</p>
          <p className="explanation">
          Explanation: वेस्ट इंडीज बेटातील रहिवासी साधे आणि स्वस्त असल्याने प्रकाशासाठी मातीचे दिवे वापरायचे.
          </p>
          </div>
          </div>
        </div>
      
  );
};

export default TestReview;
