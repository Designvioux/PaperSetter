import React from "react";
import ExamInstructions from "./ExamInstructions";
import ExamQuestion from "./ExamQuestion";
import ExamQuestionPage from "./ExamQuestionPage";
import EndTest from "./EndTest";
import StudentProfile from "./StudentProfile";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Navbar from "./Components/Navbar";
import TestReview from "./TestReview";

 const App = () => {
  return (
    <>
    <Navbar/>
   <ExamInstructions/> 
   <ExamQuestion/>  
  <ExamQuestionPage/>
   <EndTest/>
   <StudentProfile/>
   <PersonalDetailsForm/>
   <TestReview/>
   
     
     
    </>
  );
};

export default App;

