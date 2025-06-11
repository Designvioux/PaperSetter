import React from "react";
import ExamInstructions from "./ExamInstructions";
import ExamQuestion from "./ExamQuestion";
import ExamQuestionPage from "./ExamQuestionPage";
import EndTest from "./EndTest";
import StudentProfile from "./StudentProfile";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Navbar from "./Components/Navbar";
import TestReview from "./TestReview";
import LoginPage from "./LoginPage";

 const App = () => {
  return (
    <>
    
    <LoginPage/> 
     <Navbar/>
   <ExamInstructions/> 
    <Navbar/>
   <ExamQuestion/>  
    <Navbar/>
  <ExamQuestionPage/>
   <Navbar/>
   <EndTest/>
    <Navbar/>
   <StudentProfile/>
    <Navbar/>
   <PersonalDetailsForm/>
    <Navbar/>
   <TestReview/>
   
   
     
     
    </>
  );
};

export default App;

